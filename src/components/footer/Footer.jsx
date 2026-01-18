import React from 'react'
import style from './footer.module.css'
import img1 from '../../assets/images/Logo.svg'
import img2 from '../../assets/images/Etran.svg'

export default function Footer() {
  return (
    <div className='bg-[#EDEDED]  py-7.75'>
      <div className="container">
        <div className={`${style.f} flex justify-between items-start pr-40 mb-30`}> 
            <img src={img1} alt="" />
            <div>
                <h1 className='text-[#5D5D5D] mb-3'>Contact</h1>
                <div className='flex flex-col gap-1'>
                    <a href="#">hello@figma.com</a>
                    <a href="#">Instagram</a>
                    <a href="#">X</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </div>
        <div className={`${style.f} flex justify-between items-start pr-36`}>
            <img src={img2} alt="" />
            <div className='flex flex-col text-[#5D5D5D]'>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy</a>
            </div>
        </div>
      </div>
    </div>
  )
}
