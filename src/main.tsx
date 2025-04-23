import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>OLA  MUNDO</h1>

    <br />
    <br />

    <p className='text_present_1'>Text present 1</p>
    <br />

    <p className='text_present_2'>Text present 2</p>
    <br />

    <p className='text_present_3'>Text present 3</p>
    <br />

    <p className='text_present_4'>Text present 4</p>
    <br />

    <p className='text_present_4_bold'>Text present 4 bold</p>
    <br />

    <p className='text_present_5'>Text present 5</p>
    <br />

    <p className='text_present_5_bold'>Text present 5 bold</p>
    <br />

  </StrictMode>,
)
