import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Dropdown, DropdownButton, Modal, Pagination } from 'react-bootstrap'
import CreateChaoHangModal from './CreateChaoHangModal'
import UpdateChaoHangModal from './UpdateChaoHangModal'
import QLChaoHangSer from '../../service/MemberService/QLChaoHangSer'
import DanhMucNhomSPSer from '../../service/AdminService/DanhMucNhomSPSer'
import QLLoaiHinhGianHangDNSer from '../../service/AdminService/QLLoaiHinhGianHangDNSer'
import QLNganhHangSer from '../../service/AdminService/QLNganhHangSer'
import ChiTietChaoHangModal from './ChiTietChaoHangModal'
import HeaderPage from '../../page/HeaderPage.tsx'
// import ImageUpload from '../../supComponent/ImageUpload.txt'

const QLChaoHang = () => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState(5);
  const [infoPage, setInfoPage] = useState(undefined);
  const [page, setPage] = useState(0);
  const [listByPage, setListByPage] = useState([]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [updateItem, setUpdateItem] = useState({});
  const [listPr, setListPr] = useState([]);
  const [listNhomSP, setListNhomSP] = useState([]);
  const [listNganhHang, setListNganhHang] = useState([]);
  const [nganhHangPicked, setNganhHangPicked] = useState({});
  const [nganhHangPickedTitle, setNganhHangPickedTitle] = useState("");
  const [listLoaiHinhGianHangDN, setListLoaiHinhGianHangDN] = useState([]);


  const [showModalChiTiet, setShowModalChiTiet] = useState<boolean>(false);
  const [chaoHangChiTiet, setChaoHangChiTiet] = useState([]);
  const handleCloseModalChiTiet = () => {
    setShowModalChiTiet(false);
  }

  const [reload, setReload] = useState(false);
  const makeReload = () => {
    setReload(!reload);
  }
  const handleCloseModal = () => {
    setShowModal(false);
    makeReload();
  }
  const handleCloseModalUpdate = () => {
    setShowModalUpdate(false);
    makeReload();
  }
  const getALlPr = async () => {
      if (nganhHangPickedTitle == "" || nganhHangPickedTitle == "Ngành Hàng") {
        const list = await QLChaoHangSer.getAll();
        setListPr(list);
      } else {
        // @ts-ignore
        const list = await QLChaoHangSer.getListByDepartmentId(nganhHangPicked.id);
        setListPr(list);
      }
  }
  const getAllbyPage = async () => {
    const list = await QLChaoHangSer.getAllbyPage(pageSize, page);
    setListByPage(list.content);
    setInfoPage(list)
  }
  const getALlLoaiSP = async () => {
    const list = await DanhMucNhomSPSer.getAll();
    setListNhomSP(list);
  }
  const getALlLoaiHinhGianHang = async () => {
    const list = await QLLoaiHinhGianHangDNSer.getAll();
    setListLoaiHinhGianHangDN(list);
  }
  const getALlNganhHang = async () => {
    const list = await QLNganhHangSer.getAll();
    setListNganhHang(list);
  }
  useEffect(() => {
    getALlPr();
    getAllbyPage();
    getALlLoaiSP();
    getALlLoaiHinhGianHang();
    getALlNganhHang();
  }, [reload]);
  // Checkbox ============================================================================
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const toggleCheckbox = (id) => {
    setSelectedCheckboxes((prev) => {
      if (prev.includes(id)) {
        // Nếu ID đã tồn tại trong mảng, xóa nó
        return prev.filter((checkboxId) => checkboxId !== id);
      } else {
        // Nếu ID chưa tồn tại, thêm nó vào mảng
        return [...prev, id];
      }
    });
  };
  const handleDelete = async () => {
    for (let i = 0; i < selectedCheckboxes.length; i++) {
      await QLChaoHangSer.delete(selectedCheckboxes[i])
    }
    setSelectedCheckboxes([]);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      // @ts-ignore
      checkbox.checked = false; // Bỏ chọn tất cả checkbox
    });
    makeReload();
  }
  const handleHide = async () => {
    for (let i = 0; i < selectedCheckboxes.length; i++) {
      await QLChaoHangSer.hide(selectedCheckboxes[i])
    }
    setSelectedCheckboxes([]);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      // @ts-ignore
      checkbox.checked = false; // Bỏ chọn tất cả checkbox
    });
    makeReload();
  }

  const showCheckbox = () => {
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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  // @ts-ignore
  return (
    <div>
      <div>
        <HeaderPage title={"Quản lý chào hàng"}/>
        <Button onClick={() => setShowModal(true)}>Thêm sản phẩm</Button>
        <h3 style={{ textAlign: 'center' }}>Danh sách sản phẩm</h3>
        <div style={{ display: "flex" }}>
          <Button onClick={() => showCheckbox()}>Show Checkbox</Button>
          <Button className='btn-danger' onClick={handleDelete}>
            Xóa/ Xóa nhiều
          </Button>
          <Button className='btn-warning' onClick={handleHide}>
            Ẩn / Ẩn nhiều
          </Button>
          <DropdownButton id="dropdown-basic-button"
                          title={(nganhHangPickedTitle == "") ? "Ngành Hàng" : nganhHangPickedTitle}>
            <Dropdown.Item onClick={() => {
              setNganhHangPicked({});
              setNganhHangPickedTitle("Ngành Hàng");
              makeReload();
            }}>Ngành Hàng</Dropdown.Item>
            {listNganhHang.map((i, index) => (
              <Dropdown.Item key={index} onClick={() => {
                setNganhHangPicked(i);
                setNganhHangPickedTitle(i.name);
                makeReload();
              }}>{i.name}</Dropdown.Item>
            ))}
          </DropdownButton>
          {/*<Button onClick={handleSearchByNganhHang}>Áp dụng</Button>*/}
        </div>
        <table className='table table-striped' style={{ width: '100vw' }}>
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
              <td>{(item.productGroup == null) ? "" : item.productGroup.name}</td>
              <td>{(item.sellType == null) ? "" : item.sellType.name}</td>
              <td>{item.status}</td>
              <td>{item.note}</td>
              <td>
                <Button onClick={() => {
                  setShowModalChiTiet(true);
                  setChaoHangChiTiet(item);
                }}>
                  Xem
                </Button>
              </td>
              <td>
                <Button className='btn-warning' onClick={() => {
                  setShowModalUpdate(true);
                  setUpdateItem(item);
                }}>Sửa</Button>
              </td>
              <td>
                <input
                  type='checkbox'
                  // value={t.mahd}
                  // checked={selectedRadio === `option` + index}
                  onChange={() => toggleCheckbox(item.id)}
                  // hidden={(t.is_qualified == 2) ? true : false}
                ></input>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div style={{display: "flex"}}>
        <div>
          <Pagination style={{ paddingLeft: "40px" }}>
            <Pagination.First onClick={handlePrev} />
            {infoPage && (
              <Pagination.Item>
                {page + 1}/{(infoPage == undefined ? 1 : infoPage.totalPages
              )}
              </Pagination.Item>
            )}
            <Pagination.Last onClick={handleNext} />
          </Pagination>
        </div>
        Số lượng bản ghi
        <div>
          <select
            className="my-select"
            value={pageSize}
            onChange={changePageSize}
            style={{ width: "50px" }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      <Button style={{ float: 'right' }} onClick={() => navigate('/homeadminpage')}>
        Trờ về
      </Button>
      <ChiTietChaoHangModal open={showModalChiTiet} handleClose={handleCloseModalChiTiet} product={chaoHangChiTiet} />
      <CreateChaoHangModal open={showModal} handleClose={handleCloseModal}
                           listNhomSP={listNhomSP} listLoaiHinhGianHangDN={listLoaiHinhGianHangDN} />
      <UpdateChaoHangModal open={showModalUpdate} handleClose={handleCloseModalUpdate}
                           updateItem={updateItem} listNhomSP={listNhomSP}
                           listLoaiHinhGianHangDN={listLoaiHinhGianHangDN} />
    </div>
  )
}

export default QLChaoHang;
