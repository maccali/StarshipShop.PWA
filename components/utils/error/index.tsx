import React from 'react'
import { AiOutlineReload } from "react-icons/ai";
import styles from './error.module.css'

type ErrorFace = {
  message: string,
  reload?: Function,
  noImg?: boolean
}

function Error({ message, reload, noImg }: ErrorFace) {
  return (
    <>
      <div className="container-fluid">
        <div className="container ped-lr">
          <div className="row">
            <div className="col-12">
              <div className={styles.card}>
                <h2 className={styles.title}>{message}</h2>
                {noImg ?
                  <img src="/imgs/earth.svg" alt="Error Image" /> : ''}
                {reload ?
                  <div className="btn-custom">
                    <a onClick={() => reload}>
                      <AiOutlineReload className={styles.btnicon} />
                      <span>Reload</span>
                    </a>
                  </div> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error