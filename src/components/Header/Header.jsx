import React from 'react'
import Style from './Header.module.css'
import Image from 'next/image'
import logo from '@/images/logo.png'
import { FaAngleDown } from "react-icons/fa6";
import profile from '@/images/profile.jpg'

const Header = () => {
  return (
    <div className={Style.navBar}>
        <Image src={logo} height={34} width={150} alt='mployee' />
      <ul className={Style.navs}>
        <li>Resume Scan</li>
        <li className={Style.highlight}>New Launch</li>
        <li>Resume Kwyword</li>
        <li>Resume Services</li>
        <li>Career Blogs</li>
        <li>About Us</li>
        <li>
            <Image src={profile} width={30} height={30} alt='ataul' />
            <div>Ataul <FaAngleDown /> </div>
        </li>
      </ul>
    </div>
  )
}

export default Header
