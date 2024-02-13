import Head from 'next/head'
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import { useEffect, useState} from 'react'
import Card from '@/components/Card'

export default function Home() {


  return (
    <>
      <Head>
        <title>Midterm</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={`${styles.main}`}>

   <Card/>  

      </main>
      <Footer/>
    </>
  )
  }
  
 