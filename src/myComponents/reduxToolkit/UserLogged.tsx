// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addUser, removeUser, setUsers, updateUser } from './userSlice'
//
//
// export default function UserLogged() {
//   const [id, setId] = useState<string>('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [userAdd, setUserAdd] = useState({});
//   // @ts-ignore
//   const user = useSelector(state => state.user);
//   const dispatch = useDispatch();
//   const handleAddUser = () => {
//     const newUser = {
//       id,
//       username,
//       email,
//       password,
//     }
//     dispatch(addUser(newUser));
//     // setUserAdd(newUser);
//   };
//   //
//   // const handleUpdateUser = (user) => {
//   //   dispatch(updateUser({ id: user.id, changes: user }));
//   // };
//   //
//   // const handleRemoveUser = (userId) => {
//   //   dispatch(removeUser(userId));
//   // };
//   //
//   // const handleSetUsers = (users) => {
//   //   dispatch(setUsers(users));
//   // };
//   const show = () => {
//     console.log(user)
//   }
//   return (
//     <div>
//       <button onClick={show}>Show</button>
//       <div>
//         <label htmlFor="username">ID người dùng:</label>
//         <input
//           type="text"
//           id="id"
//           name="id"
//           value={id}
//           onChange={(e) => {
//             setId(e.target.value)
//           }}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="username">Tên người dùng:</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value)
//           }}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value)
//           }}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Mật khẩu:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value)
//           }}
//           required
//         />
//       </div>
//       <button type="button" onClick={handleAddUser}>Đăng ký</button>
//     </div>
//   )
// }