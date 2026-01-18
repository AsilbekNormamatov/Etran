import React from 'react'
import style from './download.module.css'

export default function Download() {
  return (
    <div className='pb-48'>
      <div className="container">
        <div className={`${style.img} px-10 pt-92 pb-20`}>
            <h1 className='text-white text-[30px] mb-5'>Download Etran and <br /> manage everything from <br /> your phone.</h1>
            <button className='py-2.75 px-3.5 bg-[#D2FD9C] rounded-sm cursor-pointer hover:bg-[#a2c37b]'>Get started</button>
        </div>
      </div>
    </div>
  )
}
