import React from 'react'
import { BsSignIntersectionSide } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";
import { CiBookmarkCheck } from "react-icons/ci";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import proIcon from '@/images/pro.png'
import Image from 'next/image';
import Style from './SideBar.module.css'

const SideBar = () => {
    return (
        <div className={Style.sideBar}>
            <ul>
                <li>
                    <BsSignIntersectionSide />
                    <h3>Job Recommendation Tool</h3>
                </li>
                <li>
                    <BsCardChecklist />
                    <h3>History</h3>
                </li>
                <li className={Style.list}>
                    <label htmlFor='jobs'>
                        <CiBookmarkCheck />
                        <h3>Saved Jobs</h3>
                    </label>
                    <ul>
                        <li>UI/UX Designer</li>
                        <li>Web Developer</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </li>
                <li>
                    <RiMoneyDollarBoxLine />
                    <h3>Plans <span> (Current: Free)</span></h3>
                </li>
                <li>
                    <IoPeopleSharp />
                    <h3>Manage Profiles</h3>
                </li>
            </ul>
            <div>
                <ul>
                    <li>Help & Support</li>
                    <li>
                        <IoSettingsOutline />
                        <h3>Settings</h3>
                    </li>
                    <li>
                        <BsQuestionSquare />
                        <h3>Help Center</h3>
                    </li>
                </ul>
                <div>
                    <h4>Current Plan: Free</h4>
                    <button>
                        <div className={Style.icon}> <Image src={proIcon} width={26} height={26} alt='random' /> </div>
                        <div className={Style.proText}>
                            <h3>Upgrade to Pro</h3>
                            <h4>Get all features</h4>
                        </div>
                        <div>{'>'}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideBar
