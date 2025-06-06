import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import { store } from './redux/store'
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('root')! as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
