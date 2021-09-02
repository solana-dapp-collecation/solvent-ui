import styles from './Bucket.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Bucket(props) {

    const router = useRouter();

    function goToBucket(props) {
        router.push(`/bucket/${props.bucketInfo.id}`);
    }

    return (
        
        <div 
            className = {styles.mainContainer}
            onClick = {() => {
                goToBucket(props)
                }
            }
        >
            <Image 
                    priority
                    src = {props.bucketInfo.photo}
                    className = {styles.borderCircle}
                    height = {200}
                    width = {200}
                    alt = {`${props.bucketInfo.name}'s photo`}
                />
            <p className = {styles.bucketName} >{props.bucketInfo.name}</p>
            <p className = {styles.bucketDropletID} >{props.bucketInfo.dropletId}</p>
        </div>
    );
}