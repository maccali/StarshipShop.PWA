import React from 'react'

// External Libs
import Head from 'next/head'

// Page Content
import HomeContent from '../components/content/home'

function Home() {

  return (
    <>
      <Head>
        <title>🕹 Home</title>
      </Head>
      <main>
        <HomeContent />
      </main>
    </>
  )
}

export default Home
