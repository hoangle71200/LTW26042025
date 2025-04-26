import React, { useState } from 'react'
import "./HomeAdminCss.css"
import { useNavigate } from 'react-router-dom'
import ColorChangeDiv from '../supComponent/ColorChangeDiv.tsx'


export default function HomeAdminHeader () {
  const navigate = useNavigate();
  const goUserPage = () => {
    navigate('/homeuserpage');
  }
  const goMemberPage = () => {
    navigate('/homememberpage');
  }
  const goBackToLogin = () => {
    navigate('/login');
  }
    const [color, setColor] = useState('white'); // Màu nền ban đầu
  return (
    <div className='myWrapHead'>
      <header>
        <h1>Quản trị hệ thống</h1>
        <nav>
          {/*<a href='#home'>Khóa người sử dụng</a>*/}
          {/*<a href='#products'>Gửi tin nhắn</a>*/}
          {/*<a href='#about'>Xác thực tài khoản </a>*/}
          {/*<a href='#contact'>Liên Hệ</a>*/}
          <a onClick={goUserPage}>User Page</a>
          <a onClick={goMemberPage}>Member Page</a>
          <a onClick={goBackToLogin}>Log Out</a>
        </nav>
      </header>
      <div className='container'>
        <div className='category'>
          <div>
            <h5>Khóa người sử dụng</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Gửi tin nhắn</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Xác thực tài khoản</h5>
            <p>Xác thực tài khoản và kiểm soát truy cập - ngăn chặn truy cập trái phép</p>
          </div>
          <div>
            <h5>Tạo hội nhóm</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Quản lý nhật ký hệ thống</h5>
            <p>Mô tả</p>
          </div>
        </div>
        <section className='category'>
          <div>
            <h5>Thống kê, báo cáo</h5>
            <p>Mô tả</p>
          </div>
          <ColorChangeDiv link={'/qlloaihinhgianhang'}>
            <h5>Quản lý loại hình gian hàng – doanh nghiệp</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <ColorChangeDiv link={'/  #'}>
            <h5>Quản lý email nhận thông tin thương mại</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <div>
            <h5>Quản lý tài khoản giao dịch và thanh toán trực tuyến.</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Hiển thị - phân quyền thông tin báo cáo</h5>
            <p>Mô tả</p>
          </div>
        </section>
        <section className='category'>
          <div>
            <h5>Chăm sóc khách hàng</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Kết xuất các báo cáo</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Quản lý lịch cho các dịch vụ chạy ngầm</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Lập lịch chuyển đổi và lưu trữ dữ liệu hệ thống</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Thực hiện chuyển đổi</h5>
            <p>Thực hiện chuyển đổi và lưu trữ dữ liệu kho dữ liệu trung tâm</p>
          </div>
        </section>
        <section className='category'>
          <div>
            <h5>Sao lưu phục hồi dữ liệu sàn</h5>
            <p>Mô tả</p>
          </div>
          <ColorChangeDiv link={'/qlnganhhang'}>
            <h5>Quản lý ngành hàng</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <div>
            <h5>Quản lý tư vấn hỏi đáp</h5>
            <p>Mô tả</p>
          </div>
          <div>
            <h5>Thống kê hàng hóa</h5>
            <p>Thống kê hàng hóa đăng trên sàn- số lượng thành viên - đơn hàng</p>
          </div>
          <div>
            <h5>Quản lý quảng cáo</h5>
            <p>Mô tả</p>
          </div>
        </section>
        <section className='category'>
          <div>
            <h5>Quản lý thông tin footer</h5>
            <p>Mô tả</p>
          </div>
          <ColorChangeDiv link={'/danhmucloaiSP'}>
            <h5>Danh mục loại sản phẩm</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <ColorChangeDiv link={'/danhmucnhomSP'}>
            <h5>Danh mục nhóm sảm phẩm</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <div>
            <h5>Quản lý đơn vị vận chuyển</h5>
            <p>Mô tả</p>
          </div>
          <ColorChangeDiv link={'/paymentservice'}>
            <h5>Quản lý dịch vụ thanh toán</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
        </section>
        <section className='category'>
          <div>
            <h5>Cung cấp dữ liệu cho hệ thống khác</h5>
            <p>Mô tả</p>
          </div>
        </section>

        <div className='offer'>
          <h5>Ưu Đãi Đặc Biệt</h5>
          <p>Giảm giá lên đến 50% cho các sản phẩm chọn lọc!</p>
        </div>
      </div>
    </div>
  )
};