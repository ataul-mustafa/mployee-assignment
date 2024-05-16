import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { LuClock8 } from "react-icons/lu";
import { CiBookmarkCheck } from "react-icons/ci";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import Style from './jobCard.module.css'
import Image from 'next/image';

const JobCard = ({data}) => {
    return (
        <div className={Style.jobCard}>
            <div className={Style.left}>
                <div className={Style.top}>
                    <div>
                        <Image src={data.logo}
                            width={50} height={50} alt={data.companyName}
                        />

                    </div>
                    <div>
                        <h2>{data.title}</h2>
                        <ul>
                            <li key={15}>{data.companyName}</li>
                            <li key={16}></li>
                            {
                                data.skills?.map((skill, i)=>(
                                    <li key={i}>{skill}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={Style.middle}>
                    <div>
                        <IoBagOutline />
                        <h3>{data.exp}</h3>
                    </div>
                    <span></span>
                    <div>
                        <LuClock8 />
                        <h3>{data.jobType}</h3>
                    </div>
                    <span></span>
                    <div>
                        <h2>Posten On</h2>
                        <h3>{data.postDate}</h3>
                    </div>
                </div>
                <ul className={Style.bottom}>
                    {
                        data.desc.map((d, i)=>(
                            <li key={i}>{d}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={Style.right}>
                <div className={Style.buttons}>
                    <button>Apply Now</button>
                    <button><CiBookmarkCheck /> Save</button>
                </div>
                <div className={Style.progressBar}>
                    <SemiCircleProgressBar
                        percentage={data.match}
                        showPercentValue={false}
                        strokeWidth={15}
                        diameter={180}
                    />
                    <div>
                        <h1>{data.match}</h1>
                        <h2>Match Score</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
