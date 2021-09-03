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
    console.log("props: ", props.projectInfo)
    return(
        <div className = {styles.mainContainer}>
            <div className={styles.backToHome}>
                <Link href="/">
                    <span>← Back to home</span>
                </Link>
            </div>
            <div className = {styles.headerContainer}>
                <span className = {styles.headerTitle} >{props.projectInfo.name}</span>
            </div>
            <div
                className = {styles.solventInventoryText}
            >
                Solvent Inventory
            </div>
            <div className = {styles.mainBodyContainer}>
                <div className = {styles.nftAssetsContainer}>
                    
                    {
                        props.projectInfo.assets.map((row,i) => {
                            return (
                                <NFTAsset key = {i} assetInfo = {row} dropletId = {props.projectInfo.dropletId} dropletPrice = {props.projectInfo.dropletPrice}/>
                            );
                        })
                    }
                </div>
                {
                    props.projectInfo.id === "auroryproject"
                    ?
                        <div className = {styles.mintAssetContainer}>
                            <div className = {styles.mintAssetForm}>
                                <span className = {styles.mintAssetFormTitle}>MINT {props.projectInfo.dropletId}</span>
                                <span className = {styles.mintAssetFormText}>You own: Aurorian #10001</span>
                                <span className = {styles.mintAssetFormText}>You&apos;ll receive: {props.projectInfo.dropletPrice + " " + props.projectInfo.dropletId}</span>
                                <button disabled = {true} className = {styles.mintAssetFormButton}>MINT {props.projectInfo.dropletId}</button>
                            </div>
                            <div className = {styles.redeemAssetForm}>
                                <span className = {styles.redeemAssetFormTitle}>Redeem {props.projectInfo.dropletId}</span>
                                <span className = {styles.redeemAssetFormText}>You don&apos;t own any {props.projectInfo.dropletId}</span>
                                <button disabled = {true} className = {styles.redeemAssetFormButton}>Redeem {props.projectInfo.dropletId} on Serum</button>
                            </div>
                        </div>
                    :
                        props.projectInfo.id === "degenapeacademy"
                        ?
                            <div className = {styles.mintAssetContainer}>
                                <div className = {styles.mintAssetForm}>
                                    <span className = {styles.mintAssetFormTitle}>MINT {props.projectInfo.dropletId}</span>
                                    <span className = {styles.mintAssetFormText}>You don&apos;t own any NFTs of this project</span>
                                    <span className = {styles.mintAssetFormText}>You&apos;ll receive: - </span>
                                    <button disabled = {true} className = {styles.mintAssetFormButton}>MINT {props.projectInfo.dropletId}</button>
                                </div>
                                <div className = {styles.redeemAssetForm}>
                                    <span className = {styles.redeemAssetFormTitle}>Redeem {props.projectInfo.dropletId}</span>
                                    <span className = {styles.redeemAssetFormText}>You own 11.42 {props.projectInfo.dropletId}</span>
                                    <button disabled = {true} className = {styles.redeemAssetFormButton}>Redeem {props.projectInfo.dropletId} on Serum</button>
                                </div>
                            </div>
                        :
                            <div className = {styles.mintAssetContainer}>
                                <div className = {styles.mintAssetForm}>
                                    <span className = {styles.mintAssetFormTitle}>MINT {props.projectInfo.dropletId}</span>
                                    <span className = {styles.mintAssetFormText}>You don&apos;t own any NFT&apos;s of this project</span>
                                    <span className = {styles.mintAssetFormText}>You&apos;ll receive: - </span>
                                    <button disabled = {true} className = {styles.mintAssetFormButton}>MINT {props.projectInfo.dropletId}</button>
                                </div>
                                <div className = {styles.redeemAssetForm}>
                                    <span className = {styles.redeemAssetFormTitle}>Redeem {props.projectInfo.dropletId}</span>
                                    <span className = {styles.redeemAssetFormText}>You own 0 {props.projectInfo.dropletId}</span>
                                    <button disabled = {true} className = {styles.redeemAssetFormButton}>Redeem {props.projectInfo.dropletId} on Serum</button>
                                </div>
                            </div>

                }
            </div>

        </div>
    )
}