import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import QLChaoHangSer from '../../service/MemberService/QLChaoHangSer.tsx'
import DanhMucNhomSPSer from '../../service/AdminService/DanhMucNhomSPSer.tsx'
import QLLoaiHinhGianHangDNSer from '../../service/AdminService/QLLoaiHinhGianHangDNSer.tsx'
import { useForm } from 'react-hook-form'
import React from 'react'
import { Button, Col, Dropdown, DropdownButton, Pagination, Row } from 'react-bootstrap'
import ValidateNumber from '../../validate/ValidateNumber.tsx'
import ValidateSelectMonth from '../../validate/ValidateSelectMonth.tsx'
import QLTKSoLuongSPSer from '../../service/MemberService/QLTKSoLuongSPSer.tsx'
import HeaderPage from '../../page/HeaderPage.tsx'
import DanhMucLoaiSPSer from '../../service/AdminService/DanhMucLoaiSPSer.tsx'

const QLTKSoLuongSP = () => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const [infoPage, setInfoPage] = useState(undefined);
  const [page, setPage] = useState(0);
  const [listByPage, setListByPage] = useState([]);
  const [listMonth, setListMonth] = useState(["01","02","03","04","05","06","07","08","09","10","11","12"]);

  const [timeCreatedBefore, setTimeCreatedBefore] = useState('');
  const [timeCreatedAfter, setTimeCreatedAfter] = useState('');
  const [isTimeValid, setIsTimeValid] = useState(true);

  const [searchByTimeStatus, setSearchByTimeStatus] = useState(false);

  const [listNhomSP, setListNhomSP] = useState([]);
  const [listLoaiSP, setListLoaiSP] = useState([]);
  const [listLoaiHinhGianHangDN, setListLoaiHinhGianHangDN] = useState([]);
  const [loaiSPPicked, setLoaiSPPicked] = useState('');
  const [loaiSPPickedTitle, setLoaiSPPickedTitle] = useState('');
  const [nhomSPPicked, setNhomSPPicked] = useState('');
  const [nhomSPPickedTitle, setNhomSPPickedTitle] = useState('');
  const [loaiHinhPicked, setLoaiHinhPicked] = useState('');
  const [loaiHinhPickedTitle, setLoaiHinhPickedTitle] = useState('');

  const [reload, setReload] = useState(false);
  const makeReload = () => {
    setReload(!reload);
  }
  const getAllbyPage = async () => {
    const list = await QLChaoHangSer.getAllbyPage(pageSize, page);
    setListByPage(list.content);
    setInfoPage(list)
  }
  const getALlLoaiSP = async () => {
    const list = await DanhMucLoaiSPSer.getAll();
    setListLoaiSP(list);
  }
  const getALlNhomSP = async () => {
    if (loaiSPPickedTitle == '' ) {
      const list = await DanhMucNhomSPSer.getAll();
      setListNhomSP(list);
    } else {
      const list = await DanhMucNhomSPSer.getAllByLoaiSP(loaiSPPicked);
      setListNhomSP(list);
    }
  }
  const getALlLoaiHinhGianHang = async () => {
    const list = await QLLoaiHinhGianHangDNSer.getAll();
    setListLoaiHinhGianHangDN(list);
  }

  useEffect(() => {
    if (searchByTimeStatus) {
      onSubmitForm2(searchByTimeData)
    } else {
      getAllbyPage();
    }
    getALlLoaiSP();
    getALlLoaiHinhGianHang();
  }, [page, pageSize, reload]);
  useEffect(() => {
    getALlNhomSP()
    setNhomSPPicked('');
    setNhomSPPickedTitle('')
  }, [loaiSPPicked]);

  const showLog = () => {
    console.log(infoPage)
  }
  // Event
  const changePageSize = async (event) => {
    await setPageSize(event.target.value);
    await setPage(0);
    makeReload()
  }
  const handleNext =  () => {
    if (page !== (infoPage.totalPages - 1)) {
      setPage(page + 1)
      makeReload();
    }
  };
  const handlePrev =  () => {
    if (page > 0)
    {
      setPage(page - 1)
      makeReload();
    }
  };
  const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: "all" });

  const [searchByTimeData, setSearchByTimeData] = useState({});
  const onSubmitForm2 = async (data) => {
    // data.productGroup = nhomSPPicked;
    // data.sellType = loaiHinhPicked;
    setSearchByTimeData(data);
    setSearchByTimeStatus(true);
    const dateBefore = data.yearBefore + "-" + data.monthBefore + "-" + data.dayBefore;
    const dateAfter = data.yearAfter + "-" + data.monthAfter + "-" + data.dayAfter;
    if (dateBefore>dateAfter) {
      setIsTimeValid(false)
      return;
    } else {
      setIsTimeValid(true)
    }
    const list = await QLTKSoLuongSPSer.searchByTimeAndInfor(nhomSPPicked, loaiHinhPicked, dateBefore, dateAfter, pageSize, page);
    console.log(list)
    setListByPage(list.content);
    setInfoPage(list);
  };

  return (
    <div style={{ width: '100vw' }}>
      <HeaderPage title={'Quản lý thống kê số lượng sản phẩm'} />
      <div>
        <div className='container' style={{ height: '100vh' }}>
          <div>
            <Row>
              <Col xs={6}>
                <div>
                  <h4>Lọc sản phẩm theo danh mục hàng hóa</h4>
                </div>
                <div style={{ display: 'flex' }}>
                  <DropdownButton
                    id='dropdown-basic-button'
                    title={loaiSPPickedTitle == '' ? 'Loại sản phẩm' : loaiSPPickedTitle}
                  >
                    <Dropdown.Item
                      onClick={() => {
                        setLoaiSPPicked('')
                        setLoaiSPPickedTitle('')
                        makeReload()
                      }}
                    >
                      ----
                    </Dropdown.Item>
                    {listLoaiSP.map((i, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => {
                          setLoaiSPPicked(i.id)
                          setLoaiSPPickedTitle(i.name)
                          makeReload()
                        }}
                      >
                        {i.name}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <DropdownButton
                    id='dropdown-basic-button'
                    title={nhomSPPickedTitle == '' ? 'Nhóm sản phẩm' : nhomSPPickedTitle}
                  >
                    <Dropdown.Item
                      onClick={() => {
                        setNhomSPPicked('')
                        setNhomSPPickedTitle('')
                        makeReload()
                      }}
                    >
                      ----
                    </Dropdown.Item>
                    {listNhomSP.map((i, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => {
                          setNhomSPPicked(i.id)
                          setNhomSPPickedTitle(i.name)
                          makeReload()
                        }}
                      >
                        {i.name}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <DropdownButton
                    id='dropdown-basic-button'
                    title={loaiHinhPickedTitle == '' ? 'Loại hình gian hàng' : loaiHinhPickedTitle}
                  >
                    <Dropdown.Item
                      onClick={() => {
                        setLoaiHinhPicked('')
                        setLoaiHinhPickedTitle('')
                        makeReload()
                      }}
                    >
                      ----
                    </Dropdown.Item>
                    {listLoaiHinhGianHangDN.map((i, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => {
                          setLoaiHinhPicked(i.id)
                          setLoaiHinhPickedTitle(i.name)
                          makeReload()
                        }}
                      >
                        {i.name}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
              </Col>
              <Col xs={6}>
                <form onSubmit={handleSubmit(onSubmitForm2)}>
                  <div id='khachnhanTitle'>
                    <h4>Lọc sản phẩm theo thời gian đăng</h4>
                  </div>
                  <div>
                    <table style={{ width: '100%' }}>
                      <thead>
                        <th>Thời gian</th>
                        <th>Ngày</th>
                        <th>Tháng</th>
                        <th>Năm</th>
                      </thead>
                      <tr>
                        <td>
                          <b>Từ:</b>
                        </td>
                        <td>
                          <ValidateNumber
                            title={''}
                            nameTitle={'dayBefore'}
                            register={register}
                            errors={errors}
                          />
                        </td>
                        <td>
                          <ValidateSelectMonth
                            title={''}
                            nameTitle={'monthBefore'}
                            register={register}
                            errors={errors}
                            list={listMonth}
                          />
                        </td>
                        <td>
                          <ValidateNumber
                            title={''}
                            nameTitle={'yearBefore'}
                            register={register}
                            errors={errors}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Đến:</b>
                        </td>
                        <td>
                          <ValidateNumber
                            title={''}
                            nameTitle={'dayAfter'}
                            register={register}
                            errors={errors}
                          />
                        </td>
                        <td>
                          <ValidateSelectMonth
                            title={''}
                            nameTitle={'monthAfter'}
                            register={register}
                            errors={errors}
                            list={listMonth}
                          />
                        </td>
                        <td>
                          <ValidateNumber
                            title={''}
                            nameTitle={'yearAfter'}
                            register={register}
                            errors={errors}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <Row>
                      <Col xs={3}>
                        <Button style={{ float: 'left' }} type='submit'>
                          Search
                        </Button>
                      </Col>
                      <Col xs={9}>
                        {isTimeValid ? '' : <p style={{ color: '#bf1650' }}>Vui lòng nhập khoảng thời gian hợp lệ</p>}
                      </Col>
                    </Row>
                  </div>
                </form>
              </Col>
            </Row>
          </div>

          <table className='table table-striped'>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Mô tả</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Nhóm sản phẩm</th>
                <th>Loại hình gian hàng</th>
                <th>Trạng thái</th>
                <th>Ghi chú</th>
                <th>Chi tiết</th>
                <th>Chỉnh sửa</th>
                <th>Chọn</th>
              </tr>
            </thead>
            <tbody>
              {listByPage.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.productGroup == null ? '' : item.productGroup.name}</td>
                  <td>{item.sellType == null ? '' : item.sellType.name}</td>
                  <td>{item.status}</td>
                  <td>{item.note}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex' }}>
            <div>
              <Pagination style={{ paddingLeft: '40px' }}>
                <Pagination.First onClick={handlePrev} />
                {infoPage && (
                  <Pagination.Item>
                    {page + 1}/{infoPage == undefined ? 1 : infoPage.totalPages}
                  </Pagination.Item>
                )}
                <Pagination.Last onClick={handleNext} />
              </Pagination>
            </div>
            Số lượng bản ghi
            <div>
              <select className='my-select' value={pageSize} onChange={changePageSize} style={{ width: '50px' }}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QLTKSoLuongSP;