import {Button, Modal} from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import QLNganhHangSer from '../../service/AdminService/QLNganhHangSer'
import ValidateText from '../../validate/ValidateText.tsx'
import { useForm } from 'react-hook-form'

export default function CreateNganhHangModal ({open, handleClose}) {
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
    await QLNganhHangSer.add(value);
    toast.success("Create Nganh hang successfully!")
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
              <ValidateText title={'Tên ngành hàng'} nameTitle={'name'} register={register} errors={errors} />
              <ValidateText title={'Mô tả ngành hàng'} nameTitle={'description'} register={register} errors={errors} />
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