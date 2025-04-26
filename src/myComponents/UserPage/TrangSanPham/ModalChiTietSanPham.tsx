import { useForm } from 'react-hook-form'
import DanhMucLoaiSPSer from '../../service/AdminService/DanhMucLoaiSPSer.tsx'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import ValidateText from '../../validate/ValidateText.tsx'
import ValidateSelect from '../../validate/ValidateSelect.tsx'
import { ToastContainer } from 'react-toastify'
import React, { useState } from 'react'

export default function ModalChiTietSanPham ({open, handleClose, showItem}) {
  const [listCmt, setListCmt] = useState([]);
  const handleCloseModal = async () => {
    handleClose();
  }
  const handleShowComment = () => {

  }
  return (
    <>
      <Modal show={open}>
        <Modal.Header>
          <Modal.Title>Chi tiết sản phẩm: {showItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <Row>
              <Col xs={6}></Col>
              <Col xs={6}>
                <div>
                  <table>
                    <tr>
                      <td>
                        <h5>Tên sản phẩm: </h5>
                      </td>
                      <td>{showItem.name}</td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Mô tả sản phẩm: </h5>
                      </td>
                      <td>{showItem.description}</td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Giá: </h5>
                      </td>
                      <td>{showItem.price}</td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Số lượng còn lại: </h5>
                      </td>
                      <td>{showItem.quantity}</td>
                    </tr>
                    <tr>
                      <td>
                        <h5>Trạng thái: </h5>
                      </td>
                      <td>{showItem.status}</td>
                    </tr>
                  </table>
                </div>
                <div>
                  <h2>Rate: {showItem.rating}</h2>
                  {listCmt.map((item, index) => (
                    <div>
                      <h6>{item.user.name}: {item.rateStar}</h6>
                      <p>{item.userComment}</p>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Lưu</Button>
          <Button type='button' onClick={handleCloseModal}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}