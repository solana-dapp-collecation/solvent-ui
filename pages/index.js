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
  const [connectButtonText, setConnectButtonText] = useState("Connect with Phantom");
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
    let truncatedAddress = publicAddress.substring(0,4);
    truncatedAddress = truncatedAddress + "..";
    let lastFewChars = publicAddress.substr(-4);
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
    <div 
    className = {styles.homePage}
    >
      <div
        className = {styles.baseComponentsContainer}
      >
        <Image
          className = {styles.solventLogo}
          priority
          src = "/logomark_neon.svg"
          height = {160}
          width = {180}
          alt = {`Solvent Protocol logo`}
        >

        </Image>

        <span
          className = {styles.solventTitle}
        >
          Solvent Protocol
        </span>

        <span
          className = {styles.previewText}
        >
          Connect your Phantom wallet and we'll drop you a sample NFT for the preview!
        </span>

        <button
          className = {styles.connectPhantomButton}
          onClick = {
            () => {
              connectPhantom();
            }
          }
        >
          {connectButtonText}
        </button>
      </div>

      <div
        className = {styles.postConnectActionContainer}
      >
        <button
          className = {styles.dropMeNFTButton}
        >
          Drop me an NFT!
        </button>

        <button
          className = {styles.previewButton}
        >
          Try out the app!
        </button>
      </div>
    </div>
  )
}
