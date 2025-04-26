import React, { useEffect, useState } from 'react'
import './myLoginstyle.css'
// @ts-ignore
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '~/redux/reduxHook'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import UserManagementService from './service/UserManagementService'
import { login, logout } from './reduxToolkit/userSlice'
import MyCreateToken from './MyCreateToken.tsx'

interface ILoginForm {
  userName: string
  passWord: string
}

const MyLogin = () => {
  console.log("go to my login")
  const navigate = useNavigate()

  useEffect(() => {
    const isLogin = sessionStorage.getItem('isLogin')
    if (isLogin) {
      navigate('/')
    }
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [show, setShow] = useState(false)
  const handleShowPassword = () => {
    setShow(!show)
  }
  const [loginForm, setLoginForm] = useState<ILoginForm>({
    userName: '',
    passWord: ''
  })

  const dispatch = useAppDispatch()
  // @ts-ignore
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // const userData = await UserManagementService.checkLogin(data.username, data.password);
      // dispatch(login(userData))
      // if (userData.role == "ADMIN") {
      //   navigate('/homeadminpage')
      // }
      // if (userData.role == "MEMBER") {
      //   navigate('/homememberpage')
      // }
      // if (userData.role == "USER") {
      //   navigate('/homeuserpage')
      // }
      console.log(data)
      const token = await MyCreateToken.postToken(data)
      console.log(token)
    } catch (error) {
      console.log(error)
      if (error === 'Incorrect') {
        window.alert('Tên đăng nhập hoặc mật khẩu không đúng')
      } else {
        window.alert('Có lỗi xảy ra, vui lòng thử lại!')
      }
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginForm({ ...loginForm, [name]: value })
  }
  // const isLoading = useAppSelector((state) => state.login.loading)

  return (
    <div className='login-wrapper'>
      {/*<div id="header-test">*/}
      {/*  <HomeAdminHeader/>*/}
      {/*</div>*/}
      <div className='login-background'>
      </div>
      <div className='login-opacity'></div>
      <div className='login-container'>
        <form className='login-form--container' action='home' onSubmit={handleSubmit(onSubmit)}>
          <div className='login-greeting'>
            {/* <label htmlFor=''>Chào mừng đến</label> */}
            <label htmlFor='' style={{ color: '#BE1128' }}>
              {/* Hệ thống thu ngân sách nhà nước */}
              Đăng nhập
            </label>
          </div>
          {/* <label htmlFor='' className='login-label'>
            Nhập thông tin đăng nhập
          </label> */}
          <div className='login-form'>
            <input
              // name='userName'
              // value={loginForm.userName}
              // onChange={handleInputChange}
              // autoComplete='off'
              // type='text'
              {...register('username', {})}
              className='form-control login-input--user'
              id='inputEmailAddress'
              placeholder='Tên đăng nhập'
            />
            <div className='password-container'>
              <input
                // name='passWord'
                // value={loginForm.passWord}
                // onChange={handleInputChange}
                {...register('password', {})}
                autoComplete='off'
                type={show ? 'text' : 'password'}
                className='form-control'
                id='inputChoosePassword'
                placeholder='Mật khẩu'
              />
              <div onClick={() => handleShowPassword()} className='show-icon'>
                {show ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
            <div className='login-btn--wrapper'>
              <button
                type='submit'
                // disabled={isLoading}
                className='btn btn-secondary btn-login'
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default MyLogin
