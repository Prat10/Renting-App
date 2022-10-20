import React, { useState } from 'react'
import './Displaycontent.css'
import { FaBed } from 'react-icons/fa'
import { MdBathtub } from 'react-icons/md'
import { TbDimensions } from 'react-icons/tb'
import './Heart.css'
import Heart from 'react-heart'
import Navbar from './Navbar'
const Displaycontent = ({ data }) => {
    const [active, setActive] = useState(false)
    return (
        <div className='displaycontent'>
            {data.map((ele) => <div className='card' key={ele?.id}>
                <img src={ele?.Image} className='home-image' />
                <div className='content'>
                    <div className='heart-class'><h3><span>${ele?.price}</span>/month</h3><div className='heart-cover'><Heart className='heart' isActive={active} onClick={() => setActive(!active)} /></div></div>
                    <h2>{ele?.houseName}</h2>
                    <p>{ele?.hAddress}</p>
                    <hr />
                    <div className='icon-holder'>
                        <div className='icons'><FaBed /></div>
                        <span>{ele?.bed}&nbsp;Beds&nbsp;</span>
                        <div className='icons'><MdBathtub /></div>
                        <span>{ele?.bathroom}&nbsp;Bathroom&nbsp;</span>
                        <div className='icons'><TbDimensions /></div>
                        <span>{ele?.area}m<sup>2</sup></span>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default Displaycontent;