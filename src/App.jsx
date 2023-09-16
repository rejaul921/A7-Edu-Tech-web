import { useState } from 'react'
import Home from './components/home/home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
    <h3 className='text-2xl text-center font-semibold my-8'>Course Registration</h3>
    <Home></Home>
    <ToastContainer />
    </>
  )
}

export default App
