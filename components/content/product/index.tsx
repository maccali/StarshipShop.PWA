
import React, { useEffect } from 'react'

import { MdAddShoppingCart } from 'react-icons/md'

import styles from './productcontent.module.css'
import Button from '../../utils/button'

import CartHelper from '../../../helpers/CartHelper'

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
                      action={() => CartHelper.addToCart(product)}
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
