import React from 'react'
import "./HomeUserCss.css"
import ColorChangeDiv from '../supComponent/ColorChangeDiv.tsx'
import { useNavigate } from 'react-router-dom'


export default function HomeUserHeader () {
  const navigate = useNavigate();
  const goAdminPage = () => {
    navigate('/homeadminpage');
  }
  const goMemberPage = () => {
    navigate('/homememberpage');
  }
  const goBackToLogin = () => {
    navigate('/login');
  }
  return (
    <div className="myWrapHead">
      <header>
        <h1>Người sử dụng</h1>
        <nav>
          {/*<a href="#home">Khóa người sử dụng</a>*/}
          {/*<a href="#products">Sản Phẩm</a>*/}
          {/*<a href="#about">Giới Thiệu</a>*/}
          {/*<a href="#contact">Liên Hệ</a>*/}
          <a onClick={goAdminPage}>Admin Page</a>
          <a onClick={goMemberPage}>Member Page</a>
          <a onClick={goBackToLogin}>Log Out</a>
        </nav>
      </header>
      <div className='container'>
        <div className='category'>
          <div onClick={() => alert("khoa nguoi sd")}>
            <h5>Thông tin phiên bản</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Xem thông báo</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Tương tác với thông báo</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Bình luận thông báo</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Thống kê tương tác với thông báo</h5>
            <p>Mô tả</p>
          </div>
        </div>
        <section className='category'>
          <div>
            <h5>Xem danh sách tin nhắn</h5>
            <p>Mô tả</p>
          </div>
          <ColorChangeDiv link={'/trangchusanthuongmai'}>
            <h5>Trang chủ sàn tương mại</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <ColorChangeDiv link={'/trangsanpham'}>
            <h5>Trang sản phẩm </h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <div>
            <h5>Thanh toán</h5>
            <p>Mô tả</p>
          </div>
        </section>
      </div>
    </div>
  )
};