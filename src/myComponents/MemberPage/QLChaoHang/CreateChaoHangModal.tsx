import {Button, Modal} from "react-bootstrap";
import { Field, Form, Formik } from 'formik'
import {useState} from "react";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import QLChaoHangSer from '../../service/MemberService/QLChaoHangSer'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import ValidateText from '../../validate/ValidateText.tsx'
import ValidateSelect from '../../validate/ValidateSelect.tsx'
import ImageUploader from '../../supComponent/ImageUploader.tsx'

export default function CreateChaoHangModal ({open, handleClose, listNhomSP, listLoaiHinhGianHangDN}) {
  console.log("Create chao hang")
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
    for (let i = 0; i < listNhomSP.length; i++) {
      if (value.nhomSPId == listNhomSP[i].id) {
        value.productGroup = listNhomSP[i];
      }
    }
    for (let i = 0; i < listLoaiHinhGianHangDN.length; i++) {
      if (value.loaiHinhGianHangId == listLoaiHinhGianHangDN[i].id) {
        value.sellType = listLoaiHinhGianHangDN[i];
      }
    }
    value.image = "src/image/" + value.imageFile[0].name;
      console.log(value)
      await QLChaoHangSer.add(value);
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
              <ValidateText title={'Tên sản phẩm'} nameTitle={'name'} register={register} errors={errors} />
              <ValidateText title={'Mô tả sản phẩm'} nameTitle={'description'} register={register} errors={errors} />
              <ValidateText title={'Giá'} nameTitle={'price'} register={register} errors={errors} />
              <ValidateText title={'Số lượng'} nameTitle={'quantity'} register={register} errors={errors} />
              <ImageUploader title={'Hình ảnh'} nameTitle={'imageFile'} register={register}/>
              <ValidateSelect
                title={'Nhóm sản phẩm'}
                nameTitle={'nhomSPId'}
                list={listNhomSP}
                register={register}
                errors={errors}
              />
              <ValidateSelect
                title={'Loại hình gian hàng'}
                nameTitle={'loaiHinhGianHangId'}
                list={listLoaiHinhGianHangDN}
                register={register}
                errors={errors}
              />
              <h5>Ghi chú</h5>
              <input
                {...register('note')}
                placeholder={'note'}
              />
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
    </>
  )
};