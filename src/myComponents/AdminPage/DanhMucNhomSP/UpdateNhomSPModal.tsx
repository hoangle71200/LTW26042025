import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import DanhMucNhomSPSer from '../../service/AdminService/DanhMucNhomSPSer'

export default function UpdateNhomSPModal ({open, handleClose, updateItem,  listLoaiSP}) {
  const handleCloseModal = async () => {
    handleClose();
  }
  const handleUpdate = async (value) => {
    for (let i = 0; i < listLoaiSP.length; i++) {
      if (value.loaiSPId == listLoaiSP[i].id) {
        value.productType = listLoaiSP[i];
      }
    }
    await DanhMucNhomSPSer.update(value);
    toast.success("Update Nhom SP successfully!")
    handleClose();
  }
  return (
    <>
      <Modal show={open}>
        <Modal.Header>
          <Modal.Title>Chỉnh sửa</Modal.Title>
        </Modal.Header>
        <Formik initialValues={updateItem} onSubmit={handleUpdate}>
          <Form>
            <Modal.Body>
              <div className='mb-3'>
                <h5>Tên nhóm sản phẩm</h5>
                <Field name='name' type='text' placeholder='Nhập tên'
                       autoFocus  />
                <h5>Mô tả nhóm sản phẩm</h5>
                <Field name='description' type='text' placeholder='Nhập mô tả'
                       autoFocus  />
                <h5>Loại sản phẩm</h5>
                <Field name='loaiSPId' as='select'>
                  <option value={''}>-- Choose an option --</option>
                  {listLoaiSP.map((i, index) => (
                    <option key={i.id} value={i.id}>
                      {i.name}
                    </option>
                  ))}
                </Field>
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