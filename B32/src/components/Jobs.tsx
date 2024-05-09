import { useState } from "react"
import Job from "./Job";

interface Job{
    id: string,
    name: string,
    status: boolean
}
export default function Jobs() {
    const [jobs, setJobs] = useState<Job[] | null>(() =>{
        const localJob = localStorage.getItem('jobs');
        if(localJob) return JSON.parse(localJob) as Job[];
        return null
    })
    console.log(jobs);
  return (
    <>
        {jobs? jobs.map(e =>{
            return (
                <Job job={e}></Job>
            )
        }) : ''}
    </>
  )
}
