import styles from './NFTAsset.module.css';
import Image from 'next/image';


export default function NFTAsset(props) {
    return (
        
        <div 
            className = {styles.mainContainer}
        >
            <Image 
                    priority
                    src = {props.assetInfo.photo}
                    className = {styles.borderCircle}
                    height = {180}
                    width = {160}
                    alt = {`${props.assetInfo.name}'s photo`}
                />
            <span className = {styles.assetName} >{props.assetInfo.name}</span>
            <span className = {styles.assetDropletPriceInfo} >{props.assetInfo.dropletPrice + " " + props.assetInfo.dropletId}</span>
        </div>
    );
}