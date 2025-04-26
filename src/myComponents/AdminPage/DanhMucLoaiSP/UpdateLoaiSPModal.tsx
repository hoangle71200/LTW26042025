import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import DanhMucLoaiSPSer from '../../service/AdminService/DanhMucLoaiSPSer'
import { useForm } from 'react-hook-form'

export default function UpdateLoaiSPModal ({open, handleClose, updateItem, listNganhHang}) {
  const handleCloseModal = async () => {
    handleClose();
  }
  const handleUpdate = async (value) => {
    for (let i = 0; i < listNganhHang.length; i++) {
      if (value.nganhHangId == listNganhHang[i].id) {
        value.productDepartment = listNganhHang[i];
      }
    }
    await DanhMucLoaiSPSer.update(value);
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
                <h5>Tên loại sản phẩm</h5>
                <Field name='name' type='text' placeholder='Nhập tên'
                       autoFocus  />
                <h5>Mô tả loại sản phẩm</h5>
                <Field name='description' type='text' placeholder='Nhập mô tả'
                       autoFocus  />
                <h5>Ngành hàng</h5>
                <Field name='nganhHangId' as='select'>
                  <option value={''}>-- Choose an option --</option>
                  {listNganhHang.map((i, index) => (
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