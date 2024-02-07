import styles from './SpecialProductCard.module.scss'

function SpecialProductCard({ specialUrl, specialImg, specialTitle, specialDescription, specialPrice, specialNote}) {
  return (
    <div className="special-product-card-wrapper">
      <a href={specialUrl}>
        <div className={`${styles["special-product-card-container"]}`}>
          <div className={`${styles["special-product-card-image"]}`}>
            <img src={specialImg} alt={`${specialTitle} Image`} />
          </div>
          <div className={`${styles["special-product-card-title"]}`}>
            {specialTitle}
          </div>
          <div className="special-product-card-description">
            {specialDescription}
          </div>
          {
            specialNote ? (
              <>
                <div className={`${styles["special-product-card-price-red"]}`}>
                  {specialPrice}
                </div>
                <div className={`${styles["special-product-card-note"]}`}>
                  {specialNote}
                </div>
              </>
            ) : (
                <div className={`${styles["special-product-card-price"]}`}>
                  {specialPrice}
                </div>
            )
          }
        </div>
      </a>
    </div>
  )
}

export default SpecialProductCard