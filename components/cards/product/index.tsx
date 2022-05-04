import styles from './productcard.module.css'

import { GoStar } from 'react-icons/go'
import { MdOutlineEmojiPeople } from 'react-icons/md'

type Rating = {
  rate: number
  count: number
}

type ProductCardFace = {
  title: string;
  imgUrl: string;
  description?: string;
  price: number;
  rating: Rating;
}

function ProductCard({
  title,
  imgUrl,
  price,
  rating,
}: ProductCardFace) {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.img}>
          <img src={imgUrl} alt={title} />
        </div>
        <div className={styles.botton}>

          <div className={styles.price}>
            {price == 0 ?
              <p>Free</p>
              : <p>${price}</p>
            }
          </div>
          <div className={styles.rate}>
            <span className={styles.star}>
              <GoStar /><span>{rating.rate}</span>
            </span>
            <span>/</span>
            <span className={styles.count}>
              <span>{rating.count}</span><MdOutlineEmojiPeople />
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
