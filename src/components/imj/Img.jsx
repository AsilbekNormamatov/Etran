import React from 'react'
import style from './img.module.css'
import img1 from '../../assets/images/Logo-1.svg'
import img2 from '../../assets/images/Logo-02.svg'
import img3 from '../../assets/images/Logo-3.svg'
import img4 from '../../assets/images/Logo-4.svg'
import img5 from '../../assets/images/Logo-5.svg'

export default function Img() {
    return (
        <div className='flex justify-center'>
            <div className={` container`}>
                <div className={`${style.i}`}>

                </div>
                <div className='mb-12.5'>
                    <h1 className='text-[25px] text-center font-medium tracking-[2px]'>We escalate transfer efficiency <br /> and productivity</h1>
                </div>
                <div className={`${style.k} flex justify-center gap-13 py-8.75 items-center`}>
                    <div className='flex justify-center gap-13 py-8.75 items-center'>
                        <a href=""><img src={img1} alt="" width={130} /></a>
                        <a href=""><img src={img2} alt="" width={130} /></a>
                    </div>
                    <div className='flex gap-13'>
                        <a href=""><img src={img3} alt="" width={130} /></a>
                        <a href=""><img src={img4} alt="" width={130} /></a>
                        <a href=""><img src={img5} alt="" width={130} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
