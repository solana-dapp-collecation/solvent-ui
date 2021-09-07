import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import BucketWrapper from '../components/BucketWrapper/BucketWrapper';
import { useRouter } from 'next/router'
import { loadExistingBuckets } from '../lib/utils';

export async function getStaticProps() {
  const existingBuckets = await loadExistingBuckets();
  return {
    props: {
      existingBuckets: {...existingBuckets},
    }
  }
}

export default function Home(props) {

  const [isConnected, setIsConnected] = useState(false);
  const [connectButtonText, setConnectButtonText] = useState("Connect");
  const router = useRouter();

  async function preflightUtils() {
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    console.log("isPhantomInstalled: ", isPhantomInstalled);

    if(isPhantomInstalled) {
      window.solana.on("connect", async () => {
        console.log("Connected to Phantom");
        await updateConnectButton();
      });
    }
  }

  async function updateConnectButton() {
    let publicAddress = window.solana.publicKey.toString();
    let truncatedAddress = publicAddress.substring(0,3);
    truncatedAddress = truncatedAddress + "..";
    let lastFewChars = publicAddress.substr(-2);
    truncatedAddress = truncatedAddress + lastFewChars;
    setConnectButtonText(truncatedAddress);
    setIsConnected(true);

  }

  async function connectPhantom() {
    await window.solana.connect();
  }

  


  useEffect(() => {
    async function performTask() {
      await preflightUtils();
    }

    performTask();
  },[isConnected]);

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Solvent Protocol - Bringing liquidity to NFTs on Solana.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/solvent-icon.ico" />
      </Head>

      <div className = {styles.navBar}>
        <div className = {styles.navColumnOne}>
          <div 
            className = {styles.solventLogo}
            onClick = {
              () => {
                window.location.reload()
              }
            }
          >
            <Image src = "/logomark_teal.png" alt="Solvent Protocol logo" width = {30} height = {40}/>
          </div>
        </div>

        <div className = {styles.navColumnTwo}>
         
        </div>

        <div className = {styles.navColumnThree}>
          <button
            className = {styles.connectButton}
            onClick = {
              () => {
                connectPhantom();
              }
            }
          >
            {connectButtonText}
          </button>
        </div>

      </div>
      
      <div className = {styles.mainContent}>
        <BucketWrapper existingBuckets = {props.existingBuckets}/>)
      </div>
      

      <footer className={styles.footer}>
          Powered by{'  '}
          <span className={styles.logo}>
            <Image src="/solana-logo.png" alt="Vercel Logo" width={72} height={9} />
          </span>
      </footer>
    </div>
  )
}
