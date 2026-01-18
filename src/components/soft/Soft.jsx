import React from 'react'
import style from './soft.module.css'
import img1 from '../../assets/images/Icon.svg'
import img2 from '../../assets/images/Icon2.svg'
import img3 from '../../assets/images/Icon3.svg'
import img4 from '../../assets/images/Icon4.svg'

export default function Soft() {
  return (
    <div className='pt-45 pb-20'>
      <div className="container">
        <div className='text-center mb-15'>
            <h1 className='text-[48px] text-[#394508]'>First class software</h1>
            <p className='text-[#5D5D5D]'>Get real-time insights, seamless transactions, and advanced <br /> tools to manage your wealth effortlessly.</p>
        </div>
        <div className={`${style.f} flex justify-between flex-wrap`}>
            <div className='text-center'>
                <img src={img1} alt="" width={230}/>
                <p>Safe Storage</p>
            </div>
            <div className='text-center'>
                <img src={img2} alt="" width={230}/>
                <p>Secure</p>
            </div>
            <div className='text-center'>
                <img src={img3} alt="" width={230}/>
                <p>Earn Interest</p>
            </div>
            <div className='text-center'>
                <img src={img4} alt="" width={230}/>
                <p>Family Plans</p>
            </div>
        </div>
      </div>
    </div>
  )
}
