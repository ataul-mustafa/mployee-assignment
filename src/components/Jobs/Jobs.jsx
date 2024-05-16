import React from 'react'
import JobCard from '../JobCard/JobCard'
import { jobsData } from './JobsData.js';
import Style from './Jobs.module.css'

const Jobs = () => {
    return (
        <div className={Style.jobContainer}>
            <h3>Job (44)</h3>
            {
                jobsData.map((job, i) => (
                    <div key={i}>
                        <JobCard data={job} />
                    </div>
                ))
            }
        </div>
    )
}

export default Jobs
