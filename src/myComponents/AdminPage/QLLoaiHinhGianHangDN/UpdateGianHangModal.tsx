import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import QLLoaiHinhGianHangDNSer from '../../service/AdminService/QLLoaiHinhGianHangDNSer'

export default function UpdateGianHangModal ({open, handleClose, updateItem}) {
  const handleCloseModal = async () => {
    handleClose();
  }
  const handleUpdate = async (value) => {
    await QLLoaiHinhGianHangDNSer.update(value);
    toast.success("Update loai hinh gian hang successfully!")
    handleClose();
  }
  return (
    <>
      <Modal show={open}>
        <Modal.Header>
          <Modal.Title>Thêm mới</Modal.Title>
        </Modal.Header>
        <Formik initialValues={updateItem} onSubmit={handleUpdate}>
          <Form>
            <Modal.Body>
              <div className='mb-3'>
                <h5>Tên loại hình gian hàng</h5>
                <Field name='name' type='text' placeholder='Nhập tên'
                       autoFocus  />
                <h5>Mô tả loại hình gian hàng</h5>
                <Field name='description' type='text' placeholder='Nhập mô tả'
                       autoFocus  />
                <h5>Ghi chú</h5>
                <Field name='note' type='text' placeholder='Nhập ghi chú'
                       autoFocus  />
                <br />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button type='submit'>Lưu</Button>
              <Button type='button' onClick={handleCloseModal}>
                Hủy
              </Button>
            </Modal.Footer>
          </Form>
        </Formik>
      </Modal>
      <ToastContainer />
    </>
  )
}