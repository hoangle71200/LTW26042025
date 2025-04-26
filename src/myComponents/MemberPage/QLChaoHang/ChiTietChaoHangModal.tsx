import { Button, Col, Modal, Row } from 'react-bootstrap'
import React from 'react'


export default function ChiTietChaoHangModal ({open, handleClose, product}) {

  const handleCloseModal = async () => {
    handleClose();
  }
  return (
    <>
      <Modal show={open}>
        <Modal.Header>
          <Modal.Title>Chi tiết sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <Col xs={4}>
                <img style={{ width: '150px', height: '100x' }} src={product.image} />
              </Col>
              <Col xs={8}>
                <p>Tên: {product.name}</p>
                <p>Giá: {product.price}</p>
                <p>Số lượng: {product.quantity}</p>
                <p>Đánh giá: {product.rating}</p>
                <p>Trạng thái: {(product.status == "offline") ? "Offline" : "Online"}</p>
                <p>Nhóm sản phẩm: {product.productGroup == null ? '' : product.productGroup.name}</p>
                <p>Loại hình bán hàng: {product.sellType == null ? '' : product.sellType.name}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p>Mô tả: {product.description}</p>
                <p>Ngày thêm vào: {product.timeCreated}</p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type='button' onClick={handleCloseModal}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}