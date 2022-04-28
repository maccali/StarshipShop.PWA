import React from 'react'

// External Libs
import Head from 'next/head'

// Page Content
import CartContent from '../../components/content/cart'

function Cart() {

  return (
    <>
      <Head>
        <title>🛒 Cart</title>
      </Head>
      <main>
        <CartContent />
      </main>
    </>
  )
}

export default Cart
