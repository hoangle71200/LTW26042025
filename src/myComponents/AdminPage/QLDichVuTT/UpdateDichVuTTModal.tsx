import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import QLNganhHangSer from '../../service/AdminService/QLNganhHangSer'
import { useForm } from 'react-hook-form'
import ValidateText from '../../validate/ValidateText.tsx'

export default function UpdateDichVuTTModal ({open, handleClose, updateItem}) {
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
  const onSubmit = async (data) => {

    console.log(data)
    // await QLChaoHangSer.add(data);
    handleClose();
  }
  return (
    <>
      <Modal show={open}>
        <Modal.Header>
          <Modal.Title>Chỉnh sửa</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <div className='mb-3'>
              <ValidateText title={"Tên dịch vụ"} nameTitle={'name'} register={register} errors={errors} />
              <ValidateText title={"Mô tả"} nameTitle={'description'} register={register}
                            errors={errors} />
              <ValidateText title={"Loại dịch vụ"} nameTitle={'type'} register={register} errors={errors} />
              <ValidateText title={"Trạng thái"} nameTitle={'status'} register={register} errors={errors} />
              <ValidateText title={"Phí giao dịch"} nameTitle={'paymentPrice'} register={register} errors={errors} />
              <ValidateText title={"Thời gian giao dịch"} nameTitle={'timeLoading'} register={register}
                            errors={errors} />
              <ValidateText title={"API đầu nối"} nameTitle={'link'} register={register} errors={errors} />
              <ValidateText title={"Email liên hệ"} nameTitle={'contactEmail'} register={register} errors={errors} />
              <ValidateText title={"SĐT liên hệ"} nameTitle={'contactPhone'} register={register} errors={errors} />
              <ValidateText title={"Ghi chú"} nameTitle={'note'} register={register} errors={errors} />
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