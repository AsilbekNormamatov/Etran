import React from 'react'
import style from '../header/header.module.css'
import img from '../../assets/images/Logo-2.svg'

function Header() {
  return (
    <div className='bg-[#394508]'>
    <div className={`${style.f} container flex justify-between items-start`}>
      <div className=''>
        <img src={img} alt="" />
      </div>
      <div>
        <button className='py-2.75 px-3.5 bg-[#D2FD9C] rounded-sm cursor-pointer hover:bg-[#a2c37b]'>Get started</button>
      </div>
    </div>
    </div>
  )
}

export default Header
