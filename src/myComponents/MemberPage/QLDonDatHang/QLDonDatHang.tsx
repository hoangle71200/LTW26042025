import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from 'react-bootstrap'
import QLDonDatHangSer from '../../service/MemberService/QLDonDatHangSer.tsx'
import HeaderPage from '../../page/HeaderPage.tsx'

const QLDonDatHang = () => {
  const navigate = useNavigate();
  const [updateItem, setUpdateItem] = useState({});
  const [listBooking, setListBooking] = useState([]);
  const [reload, setReload] = useState(false);
  const makeReload = () => {
    setReload(!reload);
  }
  const handleCloseModalUpdate = () => {
    makeReload();
  }
  const getAllBooking = async () => {
    const list = await QLDonDatHangSer.getAll();
    setListBooking(list);
  }
  useEffect(() => {
    getAllBooking();
  }, [reload])

  const showCheckbox = () => {
    // alert("da chon " + selectedCheckboxes);
    console.log(listBooking)
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <div>
      <div>
        <HeaderPage title={"Quản lý đơn đặt hàng"}/>
        <h3 style={{ textAlign: 'center' }}>Danh sách đơn đặt hàng</h3>
        <Button onClick={() => showCheckbox()}>Show Checkbox</Button>
        <table className='table table-striped' style={{ width: '100vw' }}>
          <thead>
          <tr>
            <th>STT</th>
            <th>ID đơn hàng</th>
            <th>Tên khách đặt hàng</th>
            <th>Ngày đặt hàng</th>
            <th>Ghi chú</th>
            <th>Tổng giá đơn hàng</th>
            <th>Khuyến mãi</th>
            <th>Chỉnh sửa</th>
            <th>Chọn</th>
          </tr>
          </thead>
          <tbody>
          {listBooking.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.user.name}</td>
              <td>{item.bookingDate}</td>
              <td>{item.note}</td>
              <td>{item.totalPrice}</td>
              <td>{item.sale.name}</td>
              <td>
                <Button className='btn-warning' onClick={() => {
                  setUpdateItem(item);
                }}>Sửa</Button>
              </td>
              <td>
                <Button className='btn-warning' onClick={() => {
                  console.log(item)
                }}>Xử lý</Button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <Button style={{ float: 'right' }} onClick={() => navigate('/homeadminpage')}>
        Trờ về
      </Button>
      {/*<CreateLoaiSPModal open={showModal} handleClose={handleCloseModal} listNganhHang={listNganhHang}/>*/}
    </div>
  )
}

export default QLDonDatHang;
