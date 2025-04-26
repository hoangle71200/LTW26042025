import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import DanhMucLoaiSPSer from '../../service/AdminService/DanhMucLoaiSPSer'
import ValidateText from '../../validate/ValidateText.tsx'
import ValidateSelect from '../../validate/ValidateSelect.tsx'
import { useForm } from 'react-hook-form'

export default function CreateLoaiSPModal ({open, handleClose, listNganhHang}) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    criteriaMode: "all"
  });
  const handleCloseModal = async () => {
    reset();
    handleClose();
  }
  const onSubmit = async (value) => {
    for (let i = 0; i < listNganhHang.length; i++) {
      if (value.nganhHangId == listNganhHang[i].id) {
        value.productDepartment = listNganhHang[i];
      }
    }
    await DanhMucLoaiSPSer.add(value);
    handleClose();
  }
  return (
    <>
      <Modal show={open}>
        <Modal.Header>
          <Modal.Title>Thêm mới</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className='mb-3'>
              <ValidateText title={'Tên loại sản phẩm'} nameTitle={'name'} register={register} errors={errors} />
              <ValidateText
                title={'Mô tả loại sản phẩm'}
                nameTitle={'description'}
                register={register}
                errors={errors}
              />
              <ValidateSelect
                title={'Ngành hàng'}
                nameTitle={'nganhHangId'}
                list={listNganhHang}
                register={register}
                errors={errors}
              />
              <h5>Ghi chú</h5>
              <input {...register('note')} placeholder={'note'} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit'>Lưu</Button>
            <Button type='button' onClick={handleCloseModal}>
              Hủy
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <ToastContainer />
    </>
  )
}