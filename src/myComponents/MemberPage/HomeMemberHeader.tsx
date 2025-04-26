import React from 'react'
import "./HomeMemberCss.css"
import ColorChangeDiv from '../supComponent/ColorChangeDiv.tsx'
import { useNavigate } from 'react-router-dom'


export default function HomeMemberHeader () {
  const navigate = useNavigate();
  const goUserPage = () => {
    navigate('/homeuserpage');
  }
  const goAdminPage = () => {
    navigate('/homeadminpage');
  }
  const goBackToLogin = () => {
    navigate('/login');
  }
  return (
    <div className='myWrapHead'>
      <header>
        <h1>Thành viên</h1>
        <nav>
          {/*<a href="#home">Khóa người sử dụng</a>*/}
          {/*<a href="#products">Sản Phẩm</a>*/}
          {/*<a href="#about">Giới Thiệu</a>*/}
          {/*<a href="#contact">Liên Hệ</a>*/}
          <a onClick={goUserPage}>User Page</a>
          <a onClick={goAdminPage}>Admin Page</a>
          <a onClick={goBackToLogin}>Log Out</a>
        </nav>
      </header>
      <div className='container'>
        <div className='category'>
          <ColorChangeDiv link={'/qlchaohang'}>
            <h5>Quản lý chào hàng</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <ColorChangeDiv link={'/qlgiohang'}>
            <h5>Quản lý giỏ hàng</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <div>
            <h5>Quản lý đơn đặt hàng</h5>
            <p>Mô tả</p>
          </div>
          <ColorChangeDiv link={'/xulyttdonhang'}>
            <h5>Xử lý thông tin đơn hàng</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <ColorChangeDiv link={'/qlvideodn'}>
            <h5>Quản lý video doanh nghiệp</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
        </div>
        <section className='category'>
          <ColorChangeDiv link={'/qltksoluongsp'}>
            <h5>Quản lý thống kê số lượng sản phẩm</h5>
            <p>Quản lý thống kê báo cáo số lượng sản phẩm đăng trên gian hàng</p>
          </ColorChangeDiv>
          <div>
            <h5>Share sản phẩm</h5>
            <p>
              Cho phép share sản phẩm - bài viết lên mạng xã hội để tăng lượt view mua hàng - dịch vụ cho doanh nghiệp
            </p>
          </div>
          <div>
            <h5>Bán hàng đa kênh </h5>
            <p>
              Để giúp doanh nghiệp có cổng portal phục vụ việc đẩy hàng lên bán trên các Sàn TMĐT lớn như Tiki-Lazada-
              Shoppee
            </p>
          </div>
          <div>
            <h5>Chức năng Quản lý hồ sơ công ty</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Quản lý thông tin tài khoản trên gian hàng</h5>
            <p>Mô tả</p>
          </div>
        </section>
        <section className='category'>
          <div>
            <h5>Quản lý ngành hàng trên gian hàng</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Quản trị chủ đề</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Quản trị chuyên tin</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Quản trị tin tức</h5>
            <p>Mô tả</p>
          </div>
        </section>
      </div>
    </div>
  )
};