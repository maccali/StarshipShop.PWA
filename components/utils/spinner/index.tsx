import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import styles from './spinner.module.css'


const Spinner = () => (
  <div className={styles.cont}>
    <MoonLoader
      size={120}
      color={"#000"}
      loading={true}
    />
  </div>
)

export default Spinner