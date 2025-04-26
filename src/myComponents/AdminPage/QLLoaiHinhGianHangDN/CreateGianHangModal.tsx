import {Button, Modal} from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import QLLoaiHinhGianHangDNSer from '../../service/AdminService/QLLoaiHinhGianHangDNSer'
import ValidateText from '../../validate/ValidateText.tsx'
import ValidateSelect from '../../validate/ValidateSelect.tsx'
import { useForm } from 'react-hook-form'


export default function CreateGianHangModal ({open, handleClose}) {
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
    await QLLoaiHinhGianHangDNSer.add(value);
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
              <ValidateText title={'Tên loại gian hàng'} nameTitle={'name'} register={register} errors={errors} />
              <ValidateText
                title={'Mô tả loại gian hàng'}
                nameTitle={'description'}
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