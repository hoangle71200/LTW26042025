import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBooked, upQuantity, downQuantity, removeBooked, setBookeds } from '../../reduxToolkit/BookedSlice'
import { toast, ToastContainer } from 'react-toastify'
import HeaderPage from '../../page/HeaderPage.tsx'

const QLGioHang = () => {
  // const [list, setList] = useState([]);
  const [reload, setReload] = useState(true);
  // @ts-ignore
  const bookedList = useSelector(state => state.booked);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleShowPrd = () => {
    console.log(bookedList)
  }
  // const getListBooked = () => {
  //   setList(bookedList.booked)
  // }
  useEffect(() => {
    // getListBooked();
  }, [reload]);
  const makeReload = () => {
    setReload(!reload);
  }
  const handleUpItem = (item) => {
    dispatch(upQuantity(item))
    makeReload()
  }
  const handleDownItem = (item) => {
    dispatch(downQuantity(item))
    makeReload()
  }
  const handleRemoveItem = (item) => {
    dispatch(removeBooked(item))
    toast.error("Xóa thành công")
    makeReload()
  }

  return(
    <div style={{width: '100vw'}}>
      <HeaderPage title={"Quản lý giỏ hàng"}/>
      <div className="container">
        <Button onClick={() => navigate('/trangsanpham')}>Back to Trang san pham</Button>
        <table style={{width: '100%'}}>
          <thead>
            <th>Mã sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Mô tả</th>
            <th></th>
          </thead>
          <tbody>
          {bookedList.booked.map((item, index) => (
            <tr key={index}>
              <td>{item.product.id}</td>
              <td>
                <img style={{width: "100px", height:'auto'}} src={item.product.image} />
              </td>
              <td>{item.product.name}</td>
              <td>{item.product.price}</td>
              <td style={{ display: 'flex' }}>
                <Button disabled={item.quantity == 0} onClick={() => handleDownItem(item)}>-</Button>
                {item.quantity}
                <Button onClick={() => handleUpItem(item)}>+</Button>
              </td>
              <td>{item.product.price * item.quantity}</td>
              <td>{item.product.description}</td>
              <td>
                <Button onClick={() => handleRemoveItem(item)}>Xóa</Button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        <Button style={{float: 'right'}} onClick={() => navigate('/xulyttdonhang')}>Đặt hàng</Button>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default QLGioHang;