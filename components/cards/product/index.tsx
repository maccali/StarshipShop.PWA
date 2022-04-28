import styles from './productcard.module.css'

import MarvelHelper from '../../../helpers/MarvelHelper'

type ProductCardFace = {
  title: string;
  imgUrl: string;
  description?: string;
  price: number;
}

function ProductCard({
  title,
  imgUrl,
  price,
}: ProductCardFace) {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.img}>
          <img src={MarvelHelper.httpsTransform(imgUrl)} alt={title} />
        </div>
        <div className={styles.price}>
          {price == 0 ?
            <p>Free</p>
            : <p>${price}</p>
          }
        </div>
      </div>
    </>
  )
}

export default ProductCard
