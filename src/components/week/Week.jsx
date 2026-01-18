import React from 'react'
import style from './week.module.css'
import img1 from '../../assets/images/2x.svg'
import img2 from '../../assets/images/Vector.svg'
import img3 from '../../assets/images/Vector-1.svg'
import img4 from '../../assets/images/bir.svg'

export default function Week() {
    return (
        <div className='pt-32'>
            <div className="container">
                <div className='text-center'>
                    <h1 className='text-[48px] text-[#394508]'>Get More Done In A Week</h1>
                    <p>Maximize your productivity with smarter tools designed to streamline <br /> your workflow to automate tasks, stay organized</p>
                </div>
                <div className='flex flex-wrap gap-7'>
                    <div className={`${style.t} flex justify-between pt-10 gap-7`}>
                        <div className={`${style.g} bg-[#D2FD9C] pt-17.5 pb-15 px-21 flex flex-col items-center gap-7.5 w-150 rounded-[10px] justify-end`}>
                            <img src={img1} alt="" />
                            <p className='text-[16px]'>Double Your Productivity</p>
                        </div>
                        <div className={`${style.g} bg-[#D2FD9C] pt-17.5 pb-15 px-21 flex flex-col items-center gap-7.5 w-150 rounded-[10px] justify-end`}>
                            <img src={img2} alt="" />
                            <p className='text-[16px]'>Efficiency Increase Per Transfer</p>
                        </div>
                    </div>
                    <div className={`${style.t} flex justify-between gap-7`}>
                        <div className={`${style.g} bg-[#D2FD9C] pt-12.5 pb-15 px-21 flex flex-col items-center gap-7.5 w-150 rounded-[10px] justify-end`}>
                            <img src={img3} alt="" />
                            <p className='text-[16px]'>Centralize Your Finances</p>
                        </div>
                        <div className={`${style.g} bg-[#D2FD9C] pt-12.5 pb-15 px-21 flex flex-col items-center gap-7.5 w-150 rounded-[10px] justify-end`}>
                            <img src={img4} alt="" />
                            <p className='text-[16px]'>More Activity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
