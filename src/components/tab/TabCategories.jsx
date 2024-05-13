import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";
import {fadeIn} from '../../variants'

const TabCategories = () => {
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        const getData = async()=>{
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()
    },[])

    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-2xl md:text-5xl font-semibold text-center text-gray-800'>Job by category</h1>
                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 text-lg'>Explore diverse opportunities tailored to your lifestyle: on-site, remote, hybrid, and part-time positions available to suit your preferences</p>
                <div className='flex items-center justify-center font-medium'>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part-Time</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <motion.div 
                    variants={fadeIn("right")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.5}}
                    className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </motion.div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.filter(j=>j.job_type === 'On-Site').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.filter(j=>j.job_type === 'Remote').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.filter(j=>j.job_type === 'Hybrid').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.filter(j=>j.job_type === 'Part-Time').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};
export default TabCategories;