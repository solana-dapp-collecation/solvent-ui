import { loadAssets } from '../../lib/utils';
import NFTAsset from '../../components/NFTAsset/NFTAsset';
import styles from '../../styles/NFTProject.module.css';
import Link from 'next/link'

export async function getServerSideProps(context) {
    const {id} = context.query;

    const projectInfo = await loadAssets(id);

    return {
      props: {
        projectInfo: {...projectInfo},
      }
    }
  }

export default function NFTProject(props) {
    return(
        <div className = {styles.mainContainer}>
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
            <div className = {styles.headerContainer}>
                <span className = {styles.headerTitle} >{props.projectInfo.name}</span>
            </div>
            <div className = {styles.nftAssetsContainer}>
                {
                    props.projectInfo.assets.map((row,i) => {
                        return (
                            <NFTAsset key = {i} assetInfo = {row} />
                        );
                    })
                }
            </div>
        </div>
    )
}