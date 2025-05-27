import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesApp from './routes/RoutesApp'


import { ToastContainer } from 'react-toastify';

import './index.css'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesApp />
    <ToastContainer />
  </StrictMode>,
)
