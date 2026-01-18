import React from 'react'
import style from './header.module.css'
import img1 from '../../assets/images/energiya.svg'
import img2 from '../../assets/images/earth.svg'
import img3 from '../../assets/images/shit.svg'


export default function Hero() {
    return (
        <div className='bg-[#394508] pt-12.5'>
            <div className='container'>
                <div className='mb-5'>
                    <h1 className='text-[54px] text-white tracking-[2px] leading-[110%]'>Money Transfers <br /> Made <span className='text-[#D2FD9C]'>Simple</span></h1>
                </div>
                <div className='mb-12.5'>
                    <p className='text-[20px] text-[#CBCBCB]'>No personal credit checks or founder guarantee.</p>
                </div>
                <div>
                    <h1 className='text-[#D2FD9C] mb-1.25'>Our offerings</h1>
                    <div className={`${style.f} flex justify-between mb-3`}>
                        <div className='py-6.25 px-38 rounded-sm flex-col items-center gap-3 bg-[#619111] flex justify-center text-center' >
                            <img src={img1} alt="" width={50} />
                            <p>Instant <br /> Productivity</p>
                        </div>
                        <div className='py-6.25 px-38 rounded-sm flex-col items-center gap-3 bg-[#619111] flex justify-center text-center' >
                            <img src={img2} alt="" width={60} />
                            <p>Instant <br /> Productivity</p>
                        </div>
                        <div className='py-6.25 px-38 rounded-sm flex-col items-center gap-3 bg-[#619111] flex justify-center text-center' >
                            <img src={img3} alt="" width={60} />
                            <p>Instant <br /> Productivity</p>
                        </div>
                    </div>
                    <div className='flex gap-3 pb-5'>
                        <a href='#' className='text-[#D2FD9C]'>Contact</a>
                        <a href='#' className='text-[#D2FD9C]'>Social</a>
                        <a href='#' className='text-[#D2FD9C]'>Address</a>
                        <a href='#' className='text-[#D2FD9C]'>Legal Terms</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
