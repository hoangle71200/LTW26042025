import React, { useEffect, useState } from 'react'
import './TrangSanPham.css'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { Product } from '../../Class/Product'
import Card from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addBooked, removeBooked, setBookeds } from '../../reduxToolkit/BookedSlice'
import { toast, ToastContainer } from 'react-toastify'
import QLChaoHangSer from '../../service/MemberService/QLChaoHangSer'
import DanhMucNhomSPSer from '../../service/AdminService/DanhMucNhomSPSer'
import QLLoaiHinhGianHangDNSer from '../../service/AdminService/QLLoaiHinhGianHangDNSer'
import QLNganhHangSer from '../../service/AdminService/QLNganhHangSer'
import HeaderPage from '../../page/HeaderPage.tsx'
const TrangSanPham = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const handleAddToCart = (product) => {
    let addingProduct = {
      id: product.id,
      product: new Product(product.id, product.name, product.description,
        product.timeCreated, product.timeUpdated, product.price, product.quantity, product.image, product.video, product.note,
        product.rating, product.status, product.sellType, product.productGroup, product.productDepartment),
      quantity: 1
    };
    dispatch(addBooked(addingProduct));
    toast.success("Thêm thành công")
    console.log(product)
  }
  // const handleShowPr = () => {
  //   console.log(listPr)
  // }
  return (
    <div style={{width: '100vw'}}>
      <HeaderPage title={"Trang sản phẩm"}/>
      {/*<Button onClick={handleShowPr}>Show Pr</Button>*/}
      <div className='productdetail'>
        {listPr.map((item, index) => (
          <div key={index}>
            <Card style={{ width: '18rem', margin: '1rem 1rem 1rem 1rem' }}>
              <Card.Img variant="top" style={{ width: "200px", height: "auto" }} src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text >
                  <div style={{overflowWrap: 'break-word', height: '40px',
                    width: '172.4px', lineHeight: '20px', minHeight: '40px',
                    overflow: 'hidden', // Ẩn phần nội dung vượt quá
                    whiteSpace: 'normal', // Không cho phép xuống dòng
                    textOverflow: 'ellipsis' // Thêm dấu ba chấm
                  }}>
                    {item.description}
                  </div>
                </Card.Text>
                <Button href="#">Chi tiết</Button>
                <Button onClick={() => handleAddToCart(item)}>Add to card</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <footer>
        <p>&copy; 2024 Sàn Thương Mại Điện Tử. Tất cả quyền được bảo lưu.</p>
      </footer>
      <ToastContainer/>
    </div>
  )
}

export default TrangSanPham;