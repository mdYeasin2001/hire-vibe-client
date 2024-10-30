import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

const tabIndexMap = {
    0: 'All',
    1: 'On-Site',
    2: 'Remote',
    3: 'Hybrid',
    4: 'Part-Time'
}

const TabCategories = () => {
    const [jobs, setJobs] = useState([])
    const [fetching, setFetching] = useState(true)
    const [activeTabIndex, setSelectedTabIndex] = useState(0)

    useEffect(() => {
        const getData = async () => {
            setFetching(true);
            setJobs([]);
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs${tabIndexMap[activeTabIndex] === 'All' ? '' : `?job_type=${tabIndexMap[activeTabIndex]}`}`)
            setJobs(data)
            setFetching(false)
        }
        getData()
    }, [activeTabIndex])

    const handleSelectTab = (index) => {
        setSelectedTabIndex(index)
    }
    console.log(activeTabIndex);

    return (
        <Tabs selectedIndex={activeTabIndex} onSelect={handleSelectTab}>
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
                        <Tab >On-Site Job</Tab>
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
                            jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                        }
                    </motion.div>
                </TabPanel>
                {!fetching && !jobs.length && <div className='text-center text-gray-600'>
                    No jobs found for this category
                </div>}
            </div>
        </Tabs>
    );
};
export default TabCategories;