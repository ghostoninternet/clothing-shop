import styles from './ProductCard.module.scss'
import { Link } from 'react-router-dom'

function ProductCard({productUrl, productImage, productColors, productGender, productSize, productTitle, productDescription, productPrice, productNewPrice, productStatus, productNote, productStar, productNumOfReviews}) {
  return (
    <div className="product-card-wrapper">
      <Link to={productUrl}>
        <div className={`${styles["product-card-container"]}`}>
          <div className={`${styles["product-image-section"]}`}>
            <div className={`${styles["product-image"]}`}>
              <img src={productImage} alt={`${productTitle} Image`} />
              <div className={`${styles["product-favorite"]}`}>
                <button className={`${styles["product-favorite-btn"]}`}>
                  <span role="img" className={`${styles["product-favorite-btn-icon"]}`}></span>
                </button>
              </div>
            </div>
          </div>

          <div className={`${styles["product-color"]}`}>
            {
              productColors.map((color, index) => (
                <div key={index} className={`${styles["product-color-item"]}`} style={{backgroundImage: `url(${color})`}}></div>
              ))
            }
          </div>

          <div className={`${styles["product-gender-and-size"]}`}>
            <div className="product-gender">
              {productGender}
            </div>
            <div className="product-size">
              {productSize}
            </div>
          </div>

          <div className={`${styles["product-title"]}`}>
            {productTitle}
          </div>

          {
            productDescription && (
              <div className={`${styles["product-description"]}`}>
                {productDescription}
              </div>
            )
          }

          {
            productStatus && (
              <div className={`${styles["product-status"]}`}>
                {productStatus}
              </div>
            )
          }

          {
            productNewPrice ? (
              <div className={`${styles["product-dual-price"]}`}>
                <div className={`${styles["product-old-price"]}`}>
                  {productPrice}
                </div>
                <div className={`${styles["product-new-price"]}`}>
                  {productNewPrice}
                </div>
              </div>
            ) : (
              <div className={`${styles["product-price"]}`}>
                {productPrice}
              </div>
            )
          }

          {
            productNote && (
              <div className={`${styles["product-note"]}`}>
                {productNote}
              </div>
            )
          }

          {
            productNumOfReviews && (
              <div className={`${styles["product-reviews"]}`}>
                <div className={`${styles["product-star"]}`}>
                  {
                    Array(productStar).fill().map((_, index) => (
                      <span key={index} className={`${styles["product-star-icon"]} ${styles["active"]}`}></span>
                    ))
                  }
                  {
                    Array(5 - productStar).fill().map((_, index) => (
                      <span key={index} className={`${styles["product-star-icon"]}`}></span>
                    ))
                  }
                </div>
                <div className="product-num-of-reviews">
                  {`(${productNumOfReviews})`}
                </div>
              </div>
            )
          }
        </div>
      </Link>
    </div>
  )
}

export default ProductCard