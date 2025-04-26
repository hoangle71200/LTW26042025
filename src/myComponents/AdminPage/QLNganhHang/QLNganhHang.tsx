import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from 'react-bootstrap'
import QLNganhHangSer from '../../service/AdminService/QLNganhHangSer'
import CreateNganhHangModal from './CreateNganhHangModal'
import UpdateNganhHangModal from './UpdateNganhHangModal'
import HeaderPage from '../../page/HeaderPage.tsx'

const QLNganhHang = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);
  const [updateItem, setUpdateItem] = useState({});
  const [listPr, setListPr] = useState([]);
  const [reload, setReload] = useState(false);
  const makeReload = () => {
    setReload(!reload);
  }
  const handleCloseModal = () => {
    setShowModal(false);
    makeReload();
  }
  const handleCloseModalUpdate = () => {
    setShowModalUpdate(false);
    makeReload();
  }
  const getALlPr = async () => {
    const list = await QLNganhHangSer.getAll();
    setListPr(list);
  }
  useEffect(() => {
    getALlPr();
  }, [reload])
  // Checkbox ============================================================================
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const toggleCheckbox = (id) => {
    setSelectedCheckboxes((prev) => {
      if (prev.includes(id)) {
        // Nếu ID đã tồn tại trong mảng, xóa nó
        return prev.filter((checkboxId) => checkboxId !== id);
      } else {
        // Nếu ID chưa tồn tại, thêm nó vào mảng
        return [...prev, id];
      }
    });
  };
  const handleDelete = async () => {
    for (let i = 0; i < selectedCheckboxes.length; i++) {
      await QLNganhHangSer.delete(selectedCheckboxes[i])
    }
    setSelectedCheckboxes([]);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      // @ts-ignore
      checkbox.checked = false; // Bỏ chọn tất cả checkbox
    });
    makeReload();
  }

  const showCheckbox = () => {
    alert("da chon " + selectedCheckboxes);
    // alert(showModal)
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <div>
      <div>
        <HeaderPage title={"Quản lý ngành hàng"}/>
        <Button onClick={() => setShowModal(true)}>Thêm ngành hàng</Button>

        <h3 style={{ textAlign: 'center' }}>Danh sách ngành hàng</h3>
        <Button onClick={() => showCheckbox()}>Show Checkbox</Button>
        <Button className='btn-danger' onClick={handleDelete}>
          Xóa/ Xóa nhiều
        </Button>
        <table className='table table-striped' style={{ width: '100vw' }}>
          <thead>
          <tr>
            <th>STT</th>
            <th>Tên nhóm sản phẩm</th>
            <th>Mô tả</th>
            <th>Ghi chú</th>
            <th>Chỉnh sửa</th>
            <th>Chọn</th>
          </tr>
          </thead>
          <tbody>
          {listPr.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.note}</td>
              <td>
                <Button className='btn-warning' onClick={() => {
                  setShowModalUpdate(true);
                  setUpdateItem(item);
                }}>Sửa</Button>
              </td>
              <td>
                <input
                  type='checkbox'
                  // value={t.mahd}
                  // checked={selectedRadio === `option` + index}
                  onChange={() => toggleCheckbox(item.id)}
                  // hidden={(t.is_qualified == 2) ? true : false}
                ></input>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <Button style={{ float: 'right' }} onClick={() => navigate('/homeadminpage')}>
        Trờ về
      </Button>
      <CreateNganhHangModal open={showModal} handleClose={handleCloseModal}/>
      <UpdateNganhHangModal open={showModalUpdate} handleClose={handleCloseModalUpdate} updateItem={updateItem} />
    </div>
  )
}

export default QLNganhHang;
