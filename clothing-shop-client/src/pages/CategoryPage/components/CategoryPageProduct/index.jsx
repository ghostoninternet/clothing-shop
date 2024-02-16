import styles from './CategoryPageProduct.module.scss'
import SpecialProductCard from '../../../../components/Cards/SpecialProductCard'
import ProductCard from '../../../../components/Cards/ProductCard'
import Button from '../Button'

function CategoryPageProduct({title, specialProduct, products}) {
  return (
    <div className={`${styles["category-page-product-wrapper"]}`}>
      <div className={`${styles["title"]}`}>
        {title}
      </div>
      <div className={`${styles["product-section-container"]}`}>
        <div className={`${styles["special-product-container"]}`}>
          <SpecialProductCard
            specialImg={specialProduct.specialImage}
            specialUrl={specialProduct.specialUrl}
            specialTitle={specialProduct.specialTitle}
            specialDescription={specialProduct.specialDescription}
            specialPrice={specialProduct.specialPrice}
            specialNote={specialProduct?.specialNote}
          />
        </div>
        <div className={`${styles["product-items-container"]}`}>
          <div className={`${styles["product-items"]}`}>
            {
              products.map((product, index) => {
                return (
                  <div className={`${styles["product-item"]}`} key={index}>
                    <ProductCard
                      productUrl={product.productUrl}
                      productImage={product.productImage}
                      productColors={product.productColors}
                      productGender={product.productGender}
                      productSize={product.productSize}
                      productTitle={product.productTitle}
                      productDescription={product?.productDescription}
                      productPrice={product.productPrice}
                      productNewPrice={product?.productNewPrice}
                      productStatus={product?.productStatus}
                      productNote={product?.productNote}
                      productStar={parseInt(product.productStar)}
                      productNumOfReviews={product.productNumOfReviews}
                    />
                  </div>
                )
              })
            }
          </div>  
        </div>
      </div>
      <div className='category-page-product-button'>
        <Button buttonText={"XEM THÊM"} buttonUrl={"https://www.uniqlo.com/vn/vi/feature/limited-offers/men?path=17246&flagCodes=limitedOffer"} />
      </div>
    </div>
  )
}

export default CategoryPageProduct