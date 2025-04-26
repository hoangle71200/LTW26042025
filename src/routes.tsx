import { createBrowserRouter } from 'react-router-dom'
import React from 'react'
import HomeAdminPage from './myComponents/AdminPage/HomeAdminPage'
import HomeMemberPage from './myComponents/MemberPage/HomeMemberPage'
import HomeUserPage from './myComponents/UserPage/HomeUserPage'
import QLLoaiHinhGianHangDN from './myComponents/AdminPage/QLLoaiHinhGianHangDN/QLLoaiHinhGianHangDN'
import TrangChuSanThuongMai from './myComponents/UserPage/TrangChuSanThuongMai/TrangChuSanThuongMai'
import TrangSanPham from './myComponents/UserPage/TrangSanPham/TrangSanPham'
import QLGioHang from './myComponents/MemberPage/QLGioHang/QLGioHang'
import QLChaoHang from './myComponents/MemberPage/QLChaoHang/QLChaoHang'
import DanhMucLoaiSP from './myComponents/AdminPage/DanhMucLoaiSP/DanhMucLoaiSP'
import DanhMucNhomSP from './myComponents/AdminPage/DanhMucNhomSP/DanhMucNhomSP'
import QLNganhHang from './myComponents/AdminPage/QLNganhHang/QLNganhHang'
import QLDichVuTT from './myComponents/AdminPage/QLDichVuTT/QLDichVuTT'
import XuLyTTDonHang from './myComponents/MemberPage/XuLyTTDonHang/XuLyTTDonHang.tsx'
import MyLogin from './myComponents/MyLogin'
import QLDonDatHang from './myComponents/MemberPage/QLDonDatHang/QLDonDatHang.tsx'
import QLTKSoLuongSP from './myComponents/MemberPage/QLTKSoLuongSP/QLTKSoLuongSP.tsx'
import ProtectedRoutes from './ProtectedRoutes.tsx'

export const router = createBrowserRouter([
  // {
  //   path: '*',
  //   element: <ProtectedRoutes element={<Login />} />
  // },
  {
    path: '/',
    element: <MyLogin />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/login',
    element: <MyLogin />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/homeadminpage',
    element: <HomeAdminPage />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/qlnganhhang',
    element: <QLNganhHang />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/danhmucloaiSP',
    element: <DanhMucLoaiSP />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/danhmucnhomSP',
    element: <DanhMucNhomSP />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/paymentservice',
    element: <QLDichVuTT />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/homememberpage',
    element: <HomeMemberPage />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/qlchaohang',
    element: <QLChaoHang />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/qlgiohang',
    element: <QLGioHang />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/qldondathang',
    element: <QLDonDatHang />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/xulyttdonhang',
    element: <XuLyTTDonHang />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/qltksoluongsp',
    element: <QLTKSoLuongSP />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/homeuserpage',
    element: <HomeUserPage />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/qlloaihinhgianhang',
    element: <QLLoaiHinhGianHangDN />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/trangchusanthuongmai',
    element: <TrangChuSanThuongMai />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/trangsanpham',
    element: <TrangSanPham />,
    // errorElement: <NotFoundPage />
  },
  {
    path: '/qlgiohang',
    element: <QLGioHang />,
    // errorElement: <NotFoundPage />
  }

])

export default router
