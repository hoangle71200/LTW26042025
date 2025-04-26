import {Button, Modal} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import { toast, ToastContainer } from 'react-toastify'
import React from 'react'
import QLChaoHangSer from '../../service/MemberService/QLChaoHangSer'
import ImageUploaderUpdate from '../../supComponent/ImageUploaderUpdate.tsx'

export default function UpdateChaoHangModal ({open, handleClose, updateItem,  listNhomSP, listLoaiHinhGianHangDN}) {
  console.log("Update chao hang")
  const handleCloseModal = async () => {
    handleClose();
  }
  const handleUpdate = async (value) => {
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
    // value.image = "src/image/" + value.imageFile[0].name;
    console.log(value)
    await QLChaoHangSer.update(value);
    toast.success("Update thành công")
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
                 <h5>Tên sản phẩm</h5>
                 <Field name='name' type='text' placeholder='Nhập tên'
                  autoFocus  />
                <h5>Mô tả sản phẩm</h5>
                <Field name='description' type='text' placeholder='Nhập mô tả'
                  autoFocus  />
                <h5>Giá</h5>
                <Field name='price' type='number' placeholder='Nhập giá'
                  autoFocus  />
                <h5>Số lượng</h5>
                <Field name='quantity' type='number' placeholder='Nhập số lượng'
                  autoFocus />
                 {/*<ImageUploaderUpdate title={"Hình ảnh"} nameTitle={"imageFile"} />*/}
                <h5>Nhóm sản phẩm</h5>
                <Field name='nhomSPId' as='select'>
                  <option value={''}>-- Choose an option --</option>
                  {listNhomSP.map((i, index) => (
                    <option key={i.id} value={i.id}>
                      {i.name}
                    </option>
                  ))}
                </Field>
                <h5>Loại hình gian hàng</h5>
                <Field name='loaiHinhGianHangId' as='select'>
                  <option value={''}>-- Choose an option --</option>
                  {listLoaiHinhGianHangDN.map((i, index) => (
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
      <ToastContainer/>
    </>
  )
}