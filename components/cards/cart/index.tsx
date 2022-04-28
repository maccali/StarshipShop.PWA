import React from 'react'

import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'

import styles from './cartcard.module.css'
import Button from '../../utils/button'

import MarvelHelper from '../../../helpers/MarvelHelper'

type CartCardFace = {
  title: string;
  imgUrl: string;
  description?: string;
  price: number;
  total: number;
  quantity: number;
  addFunction: Function;
  minusFunction: Function;
  removeFunction: Function;
}

function CartCard({
  title,
  imgUrl,
  price,
  total,
  quantity,
  addFunction,
  minusFunction,
  removeFunction,
}: CartCardFace) {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={MarvelHelper.httpsTransform(imgUrl)} alt={title} />
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.quantity}>
          <p>Quantity</p>
          <span>{quantity} Unit</span>
        </div>
        <div className={styles.price}>
          <p>Price</p>
          {price == 0 ?
            <span>Free</span>
            : <span>$ {price}</span>
          }
        </div>
        <div className={styles.total}>
          <p>Total</p>
          {total == 0 ?
            <span>Free</span>
            : <span>$ {total}</span>
          }
        </div>
        <div className={styles.ajusts}>
          <Button
            title={`Remove One ${title}`}
            action={() => minusFunction()}
            noStyle
          >
            <FiMinus />
          </Button>

          <Button
            title={`Add One ${title}`}
            action={() => addFunction()}
            noStyle
          >
            <FiPlus />
          </Button>

          <Button
            title={`Remove All ${title}`}
            action={() => removeFunction()}
            noStyle
          >
            <FiTrash2 />
          </Button>
        </div>
      </div>
    </>
  )
}

export default CartCard
