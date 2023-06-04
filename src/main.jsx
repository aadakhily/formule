import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './pages/index.jsx'

import './index.css'
import 'react-perfect-scrollbar/dist/css/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
