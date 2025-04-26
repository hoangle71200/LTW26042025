import React, { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ValidateText from '../../validate/ValidateText.tsx'
import ValidateSelect from '../../validate/ValidateSelect.tsx'
import { useForm } from 'react-hook-form'
import ValidateNumber from '../../validate/ValidateNumber.tsx'
import ValidateEmail from '../../validate/ValidateEmail.tsx'
import QLDonDatHangSer from '../../service/MemberService/QLDonDatHangSer.tsx'
import { Simulate } from 'react-dom/test-utils'
import QLGioHangSer from '../../service/MemberService/QLGioHangSer.tsx'
import HeaderPage from '../../page/HeaderPage.tsx'


export default function XuLyTTDonHang() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    criteriaMode: "all"
  });
  const navigate = useNavigate();
  const [listBooked, setListBooked] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [reload, setReload] = useState(true);
  // @ts-ignore
  const bookedList = useSelector(state => state.booked);
  // @ts-ignore
  const user = useSelector((state) => state.user.userLogged)
  const getListBooked = () => {
    setListBooked(bookedList.booked)
    let myTotal = 0;
    for (let i = 0; i < bookedList.booked.length; i++) {
      myTotal += bookedList.booked[i].product.price*bookedList.booked[i].quantity;
    }
    setTotalPrice(myTotal);
  }
  useEffect(() => {
    getListBooked();
  }, [reload]);
  const makeReload = () => {
    setReload(!reload);
  }
  const onSubmit = async (value) => {
    value.user = user;
    value.totalPrice = totalPrice;
    const booking = await QLDonDatHangSer.add(value);
    for (let i = 0; i < listBooked.length; i++) {
      const addBooked = {
        product: listBooked[i].product,
        quantity: listBooked[i].quantity,
        totalPrice: listBooked[i].product.price*listBooked[i].quantity,
        booking: booking
      };
      console.log(addBooked);
      QLGioHangSer.add(addBooked);
    }
    makeReload();
  }
  const showUser = () => {
    console.log(user)
  }
  return (
    <div style={{ width: '100vw' }}>
      <HeaderPage title={"Xử lý thông tin đơn hàng"}/>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div>
              <Row>
                <Col xs={6}>
                  <div id="khachdatTitle">
                    <h4>Thông tin khách đặt hàng</h4>
                  </div>
                  <table>
                    <tr>
                      <td><h5>Họ và tên:</h5></td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td><h5>Giới tính:</h5></td>
                      <td>{user.gender}</td>
                    </tr>
                    <tr>
                      <td><h5>Địa chỉ:</h5></td>
                      <td>{user.address}</td>
                    </tr>
                    <tr>
                      <td><h5>Email:</h5></td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td><h5>Số điện thoại:</h5></td>
                      <td>{user.phone}</td>
                    </tr>
                    <tr>
                      <td><h5>Quyền hạn:</h5></td>
                      <td>{user.role}</td>
                    </tr>
                  </table>
                </Col>
                <Col xs={6}>
                  <div id="khachnhanTitle">
                    <h4>Thông tin khách nhận hàng</h4>
                  </div>
                  <div>
                    <Row>
                      <Col xs={6}>
                        <ValidateText title={'Tên khách hàng'} nameTitle={'name'} register={register} errors={errors} />
                        <ValidateText title={'Địa chỉ'} nameTitle={'address'} register={register} errors={errors} />
                        <ValidateNumber title={'Số điện thoại'} nameTitle={'phone'} register={register} errors={errors} />
                      </Col>
                      <Col>
                        <ValidateEmail title={'Email'} nameTitle={'email'} register={register} errors={errors} />
                        <ValidateText title={'Ghi chú'} nameTitle={'note'} register={register} errors={errors} />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="container">
            <div id='khachnhanTitle'>
              <h4>Thông tin sản phẩm</h4>
            </div>
            <div>
              <Row>
                <table style={{ width: '100%' }}>
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
                  {listBooked.map((item, index) => (
                    <tr key={index}>
                      <td>{item.product.id}</td>
                      <td>
                        <img style={{ width: '100px', height: 'auto' }} src={item.product.image} />
                      </td>
                      <td>{item.product.name}</td>
                      <td>{item.product.price}</td>
                      <td>{item.quantity}</td>
                      <td>{item.product.price * item.quantity}</td>
                      <td>{item.product.description}</td>
                      <td></td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </Row>
            </div>
          </div>
          <div className='container'>
            <h5 style={{ float: 'right' }}>Tổng giá: {totalPrice}</h5>
            <Button style={{ float: 'left' }} type="submit">
              Hoàn thành
            </Button>
          </div>
        </form>
      </div>
      <Button style={{ float: 'right' }} onClick={() => navigate('/qlgiohang')}>
        Back
      </Button>
    </div>
  )
}