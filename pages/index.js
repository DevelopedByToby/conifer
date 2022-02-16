import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site kit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header></Header>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome to conifer!
        </h1>
    <div className={styles.imageContainer}>
      <Image src="/conifer.png" alt="Evergreen tree" width="100%" height="100%" layout="responsive" objectFit="contain" />
    </div>

        <p className={styles.description}>
          Navigate to <code>pages/index.js</code> to edit this page.
        </p>

          
        
        </main>
    </div>
  )
}
