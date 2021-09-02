import styles from './DropletWrapper.module.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function DropletWrapper() {
    return (
        <div className = {styles.tabsContainer}>
            <Tabs className = {styles.tabs} defaultIndex = {0} isFitted="true" variant="line">
                <TabList>
                    <Tab _selected={{ borderBottom: "1px solid #00f99f"  }} className = {styles.tab} > Mint Droplets</Tab>
                    <Tab _selected={{ borderBottom: "1px solid #00f99f" }} className = {styles.tab}> Redeem Droplets</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <div className = {styles.existingDropletsContainer}>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className = {styles.createDropletsContainer}>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}