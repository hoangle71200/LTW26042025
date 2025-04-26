import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function FooterPage () {
  const navigate = useNavigate();
  return (
    <div>
      <footer>
        <p>&copy; 2024 Sàn Thương Mại Điện Tử. Tất cả quyền được bảo lưu.</p>
      </footer>
    </div>
  )
}