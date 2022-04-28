import React, { ReactNode } from 'react'
import { AiOutlinePlus } from "react-icons/ai"

import styles from './pagination.module.css'

type PaginationFace = {
  children: ReactNode,
  action: Function
}

function Pagination({ children, action }: PaginationFace) {

  return (
    <>
      <div className={styles.cont}>
        <div className={styles.card}>
          <div className={styles.line}>
            <div className={styles.divinput}>
              <label aria-label="Type a page">
                {children}
              </label>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.line}>
              <a aria-label="Other pag" onClick={() => action()}>
                <div className={styles.btn}>
                  <AiOutlinePlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagination