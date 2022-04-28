
import React, { useEffect } from 'react'

import { MdAddShoppingCart } from 'react-icons/md'

import styles from './productcontent.module.css'
import Button from '../../utils/button'

import CartHelper from '../../../helpers/CartHelper'
import MarvelHelper from '../../../helpers/MarvelHelper'

type Capsule = {
  product: ComicFace
}

function ProductContent({
  product
}: Capsule) {

  useEffect(() => {
    console.log(product)
  })
  return (
    <>
      {product ?
        <section>
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <h2 className={styles.title}>
                  {product.title}
                </h2>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className={styles.img}>
                    <img src={MarvelHelper.httpsTransform(`${product.thumbnail.path}.${product.thumbnail.extension}`)} alt={`Image for ${product.title}`} />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className={styles.pricerelations}>

                    <p className={styles.price}>
                      {product.prices[0].price === 0 ? 'Free' :
                        `$ ${product.prices[0].price}`
                      }
                    </p>

                    <div className={styles.addtocart}>
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
                </div>
                {product.description ?
                  <div className={styles.description}>
                    <p>
                      {product.description}
                    </p>
                  </div>
                  : ''}
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
