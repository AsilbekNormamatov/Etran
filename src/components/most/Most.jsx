import React from 'react'
import style from './most.module.css'
import img1 from '../../assets/images/Benefit.svg'
import img2 from '../../assets/images/Benefit2.svg'

export default function Most() {
  return (
    <div>
        <div className="container">
            <div>
                <h1 className='text-[48px] text-center pt-30 pb-7.5'>The Most Reliable App</h1>
            </div>
            <div className={`${style.f} flex justify-between`}>
                <div>
                    <img src={img1} alt="" width={600} className='mb-7'/>
                    <h1 className='text-[#394508] font-medium'>Scale Your Team, Not Your Card Expenses</h1>
                    <p className='text-[#5D5D5D] font-medium'>Issue virtual and physical cards at no additional cost to support <br /> teams of any size.</p>
                </div>
                <div>
                    <img src={img2} alt="" width={600} className='mb-7'/>
                    <h1 className='text-[#394508] font-medium'>Effortless Paper Tracking, Mobile Convenience</h1>
                    <p className='text-[#5D5D5D] font-medium'>Get precise control—at scale—with the ability to lock any card <br /> and restrict any type of spend.</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
