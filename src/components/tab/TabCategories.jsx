import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

const TabCategories = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data)
        }
        getData()
    }, [])

    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2, y: { type: "spring", stiffness: 60 }, opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className='text-2xl md:text-5xl font-semibold text-center text-gray-800'>Job by category</motion.h1>
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2, y: { type: "spring", stiffness: 60 }, opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className='max-w-2xl mx-auto my-6 text-center text-gray-500 text-lg'>Explore diverse opportunities tailored to your lifestyle: on-site, remote, hybrid, and part-time positions available to suit your preferences</motion.p>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2, y: { type: "spring", stiffness: 60 }, opacity: { duration: 0.2 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className='flex items-center justify-center font-medium'>
                    <TabList>
                        <Tab>All</Tab>
                        <Tab>On-Site Job</Tab>
                        <Tab>Remote Job</Tab>
                        <Tab>Hybrid</Tab>
                        <Tab>Part-Time</Tab>
                    </TabList>
                </motion.div>
                <TabPanel>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </motion.div>
                </TabPanel>
                <TabPanel>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.filter(j => j.job_type === 'On-Site').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </motion.div>
                </TabPanel>
                <TabPanel>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.filter(j => j.job_type === 'Remote').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </motion.div>
                </TabPanel>
                <TabPanel>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 1,
                        }}
                        className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.filter(j => j.job_type === 'Hybrid').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </motion.div>
                </TabPanel>
                <TabPanel>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            y: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.2 },
                            ease: "easeIn",
                            duration: 1,
                        }} 
                        className='grid grid-cols-1 lg:grid-cols-2  gap-8 my-10'>
                        {
                            jobs.filter(j => j.job_type === 'Part-Time').map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </motion.div>
                </TabPanel>
            </div>
        </Tabs>
    );
};
export default TabCategories;