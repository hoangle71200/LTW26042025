
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store.tsx'
import MyLogin from './myComponents/MyLogin.tsx'

const App = () => {
  console.log("come to app")
  const user = useSelector((state: RootState) => state.user.userLogged)
  console.log(user)
  console.log("go")
  return <RouterProvider router={router} />
}

export default App

// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
//
// const Layout = () => {
//   return (
//     <div>
//       <h1>Header</h1>
//       <Outlet /> {/* Vị trí để hiển thị các route con */}
//       <footer>Footer</footer>
//     </div>
//   );
// };
//
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
//
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} /> {/* Route con cho Home */}
//           <Route path="about" element={<About />} /> {/* Route con cho About */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };
//
// export default App;