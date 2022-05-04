
import React, { useEffect } from 'react'

import { MdAddShoppingCart, MdOutlineEmojiPeople } from 'react-icons/md'
import { GoStar } from 'react-icons/go'

import styles from './productcontent.module.css'
import Button from '../../utils/button'

import CartHelper from '../../../helpers/CartHelper'
import Router from 'next/router'

type Capsule = {
  product: ProductFace
}

function ProductContent({
  product
}: Capsule) {

  // useEffect(() => {
  //   console.log(product)
  // })
  return (
    <>
      {product ?
        <section>
          <div className="container-fluid">
            <div className="container">
              <div className={styles.grid}>

                <div className={styles.title}>
                  <h2>{product.title}</h2>
                </div>

                <div className={styles.rate}>
                  <span className={styles.star}>
                    <GoStar /><span>{product.rating.rate}</span>
                  </span>
                  <span className={styles.count}>
                    <span>{product.rating.count}</span>
                    <span>Ratings</span>
                  </span>
                </div>

                <div className={styles.image}>
                  <img src={product.image} alt={`Image for ${product.title}`} />
                </div>

                <div className={styles.price}>
                  <p >{`$ ${product.price}`}</p>
                </div>

                <div className={styles.addtocart}>
                  <div>
                    <Button
                      title="Add To Cart"
                      action={() => {
                        CartHelper.addToCart(product)
                        Router.push("/cart")
                      }}
                      pos
                    >
                      <span>Add To Cart</span>
                      <MdAddShoppingCart />
                    </Button>
                  </div>
                </div>

                <div className={styles.description}>
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        : ''
      }
    </>
  )
}

export default ProductContent
