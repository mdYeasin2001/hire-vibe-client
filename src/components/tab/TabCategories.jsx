import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
const TabCategories = () => {
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
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 5</h2>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TabCategories;