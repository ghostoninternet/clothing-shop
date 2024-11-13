import styles from "./CategoryDetailPageProduct.module.scss";
import ProductCard from "../../../components/Cards/ProductCard";

function CategoryDetailPageProduct({ products }) {
  return (
    <div className={`${styles["category-product-wrapper"]}`}>
      <div className={`${styles["product-items-container"]}`}>
          {products.map((product, index) => {
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
            );
          })}
        </div>
      </div>
  );
}

export default CategoryDetailPageProduct;
