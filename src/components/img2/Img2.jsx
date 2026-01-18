import React from 'react'
import style from './img2.module.css'
import img from '../../assets/images/Image.svg'

export default function Img2() {
  return (
    <div>
      <div className="container ">
        <div className='flex justify-center pt-45'>
            <img src={img} alt="" width={1100}/>
        </div>
      </div>
    </div>
  )
}
