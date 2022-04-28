import React, { ReactNode } from 'react'

import Head from 'next/head'

import styles from './errorpage.module.css'

type ErrorPageFace = {
  statusCode: Number,
  title: string,
  message: string,
  children: ReactNode,
}

function ErrorPage({
  statusCode,
  message,
  title,
  children
}: ErrorPageFace) {
  return (
    <>
      <Head>
        <title>❌ {title}</title>
      </Head>
      <main>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.card}>
                  <div className={styles.text}>
                    <h1 className="mt-5">{statusCode}</h1>
                    <h2 className="mt-3">{message}</h2>
                    <div className="mt-5">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ErrorPage
