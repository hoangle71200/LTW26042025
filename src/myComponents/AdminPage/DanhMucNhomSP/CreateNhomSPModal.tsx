import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import DanhMucNhomSPSer from '../../service/AdminService/DanhMucNhomSPSer'
import ValidateText from '../../validate/ValidateText'
import ValidateSelect from '../../validate/ValidateSelect'
import { useForm } from 'react-hook-form'

export default function CreateNhomSPModal ({open, handleClose, listLoaiSP}) {
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
    for (let i = 0; i < listLoaiSP.length; i++) {
      if (value.loaiSPId == listLoaiSP[i].id) {
        value.productType = listLoaiSP[i];
      }
    }
    await DanhMucNhomSPSer.add(value);
    toast.success("Create Nhom SP successfully!")
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
              <ValidateText title={'Tên nhóm sản phẩm'} nameTitle={'name'} register={register} errors={errors} />
              <ValidateText
                title={'Mô tả nhóm sản phẩm'}
                nameTitle={'description'}
                register={register}
                errors={errors}
              />
              <ValidateSelect
                title={'Loại sản phẩm'}
                nameTitle={'loaiSPId'}
                list={listLoaiSP}
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