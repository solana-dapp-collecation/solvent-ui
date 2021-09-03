import styles from './CreateBucket.module.css';
import { useRouter } from 'next/router';

export default function CreateBucket() {
    const router = useRouter();

    function goHome() {
        router.push(`/`);
    }

    return (
        <div className = {styles.formContainer}>
            <span className = {styles.createBucketText}>Create Solvent Bucket</span>
            <form>
                <input className = {styles.nftAddressInput} name = "nftAddress" type = "text" placeholder = "NFT address" />
                <br />
                <input className = {styles.bucketNameInput} name = "bucketName" type = "text" placeholder = "Bucket name"/>
                <br />
                <input className = {styles.bucketSymbolInput} name = "bucketSymbol" type = "text" placeholder = "Bucket symbol"/>
                <br />
                <button
                    className = {styles.createBucketButton}
                    onClick = {
                        () => {
                            goHome()
                        }
                    }
                    type = "submit"
                >Create Bucket</button>
            </form>
        </div>
    );
}