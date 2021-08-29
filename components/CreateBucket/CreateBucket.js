import styles from './CreateBucket.module.css';

export default function CreateBucket() {
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
                <button className = {styles.createBucketButton} type = "submit">Create Bucket</button>
            </form>
        </div>
    );
}