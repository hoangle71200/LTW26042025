import { Product } from '../../Class/Product'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ColorChangeDiv from '../../supComponent/ColorChangeDiv.tsx'
import React from 'react'
import "./TrangChuSanThuongMai.css"
import QLChaoHangSer from '../../service/MemberService/QLChaoHangSer'
import DanhMucNhomSPSer from '../../service/AdminService/DanhMucNhomSPSer'
import QLLoaiHinhGianHangDNSer from '../../service/AdminService/QLLoaiHinhGianHangDNSer'
import QLNganhHangSer from '../../service/AdminService/QLNganhHangSer'
import { Button } from 'react-bootstrap'
import KitchenSinkExample from '../../supComponent/KitchenSinkExample'
import ImageAndTextExample from '../../supComponent/ImageAndTextExample'
import ImageOverlayExample from '../../supComponent/ImageOverlayExample'
import HeaderPage from '../../page/HeaderPage.tsx'

function TrangChuSanThuongMai () {
  const navigate = useNavigate();
  const [listPr, setListPr] = useState([]);
  const [listNhomSP, setListNhomSP] = useState([]);
  const [listNganhHang, setListNganhHang] = useState([]);
  const [showModalChiTiet, setShowModalChiTiet] = useState<boolean>(false);
  const [chaoHangChiTiet, setChaoHangChiTiet] = useState([]);
  const [reload, setReload] = useState(false);
  const [listLoaiHinhGianHangDN, setListLoaiHinhGianHangDN] = useState([]);

  const handleCloseModalChiTiet = () => {
    setShowModalChiTiet(false);
  }
  const makeReload = () => {
    setReload(!reload);
  }
  const getALlPr = async () => {
      const list = await QLChaoHangSer.getAll();
      setListPr(list);
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
    getALlLoaiSP();
    getALlLoaiHinhGianHang();
    getALlNganhHang();
  }, [reload]);

  const showP = () => {
    console.log(listPr);
  }

  const [color, setColor] = useState('white'); // Màu nền ban đầu
  return (
    <div className='myWrapHead'>
      <HeaderPage title={"Trang chủ sàn thương mại"}/>
      <div className='container'>
        {/*<div >*/}
        {/*  <Button onClick={showP}>Show</Button>*/}
        {/*  <KitchenSinkExample/>*/}
        {/*  <ImageAndTextExample/>*/}
        {/*  <ImageOverlayExample/>*/}
        {/*</div>*/}
        <h2>Danh mục</h2>
        <div className='category'>
          {listNganhHang.map((i, index) => (
            <div key={i.id}>
              <h5>{i.name}</h5>
              <p>{i.description}</p>
            </div>
          ))}
        </div>

        <h2>Super Sale</h2>
        <section className='category'>
          <ColorChangeDiv link={'/trangsanpham'}>
            <h5>Quản lý loại hình gian hàng – doanh nghiệp</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <ColorChangeDiv link={'/  #'}>
            <h5>Quản lý email nhận thông tin thương mại</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
          <ColorChangeDiv link={'/  #'}>
            <h5>Quản lý email nhận thông tin thương mại</h5>
            <p>Mô tả</p>
          </ColorChangeDiv>
        </section>

        <h2>Các loại sản phẩm</h2>
        <div className='productlist' id='product'>
          {listPr.map((item, index) => (
            <div key={index}>
              <KitchenSinkExample product={item}/>
            </div>
          )) }
        </div>
        <div className='offer'>
          <h5>Ưu Đãi Đặc Biệt</h5>
          <p>Giảm giá lên đến 50% cho các sản phẩm chọn lọc!</p>
        </div>
      </div>
    </div>
  )
}

export default TrangChuSanThuongMai;