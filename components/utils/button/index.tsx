import React, { ReactNode, useRef, useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

import styles from './button.module.css'

type ButtonFace = {
  title: string;
  children: ReactNode;
  href?: string;
  action?: Function;
  load?: Boolean;
  pos?: Boolean;
  iconOnly?: Boolean;
  textOnly?: Boolean;
  noStyle?: Boolean
}

function Button({
  title,
  children,
  href,
  action,
  pos,
  iconOnly,
  textOnly,
  noStyle,
  load
}: ButtonFace) {

  const ref = useRef(null);
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  function hrefReplace(href: string) {
    window.location.href = href;
  }

  useEffect(() => {
    ref.current ? setWidth(ref.current.offsetWidth) : 0;
    ref.current ? setHeight(ref.current.offsetHeight) : 0;
  }, [ref.current]);

  if (load) {
    return (
      <>
        <div
          className={styles.load}
          style={{
            width: Number(width),
            height: Number(height)
          }}
        >
          <ClipLoader size={23} color="#00d6b4" />
        </div>
      </>
    )
  }

  if (noStyle) {
    if (href) {
      return (
        <a
          title={title}
          className={styles.taglink}
          href={href}
        >
          {children}
        </a>
      )
    } else {
      return (
        <a
          title={title}
          className={styles.taglink}
          onClick={() => (action) ? action() : ''}
        >
          {children}
        </a>
      )
    }
  } else {
    return (
      <>
        <button
          title={title}
          ref={ref}
          className={`
            ${styles.btn} 
            ${pos ? styles.pos : styles.pre}
            ${iconOnly ? styles.icon : ''}
            ${textOnly ? styles.text : ''}
            `}
          onClick={() => (href) ? hrefReplace(href) : (action) ? action() : ''}>
          {children}
        </button>
      </>
    )
  }
}

export default Button
