import styles from './BucketWrapper.module.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import CreateBucket from '../CreateBucket/CreateBucket';

export default function BucketWrapper() {
    return (
        <div className = {styles.tabsContainer}>
            <Tabs className = {styles.tabs} defaultIndex = {0} isFitted="true" variant="line">
                <TabList>
                    <Tab _selected={{ borderBottom: "1px solid #00f99f"  }} className = {styles.tab} > Existing buckets</Tab>
                    <Tab _selected={{ borderBottom: "1px solid #00f99f" }} className = {styles.tab}> Create a bucket</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <div className = {styles.existingBucketsContainer}>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className = {styles.createBucketContainer}>
                            <CreateBucket />
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}