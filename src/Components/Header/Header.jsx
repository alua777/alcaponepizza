import React from 'react'
import './Header.scss'
import logo from './../../Assets/logo.jpg'
import call from './../../Assets/call.svg'

export default function Header() {
  return (
    <div className='header'>
        <img src={logo}></img>
        <div className='header_location'>
        Otročok
        </div>
        <div className='header_pages'>
            <p>Menu</p>
            <p>News</p>
            <p>Working hours</p>
        </div>
        <div className='header_buttons'>
            <div className='header_buttons_number'>
                <img src={call} alt="" />
                <p>0905 666 655</p>
            </div>
            <button className='header_buttons_order'>Order online</button>
        </div>
    </div>
  )
}
