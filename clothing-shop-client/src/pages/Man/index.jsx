import { ManProduct } from "../../apis/product-data";
import CategoryCard from "../../components/Cards/CategoryCard";
import NewsCard from "../../components/Cards/NewsCard";
import ProductCard from "../../components/Cards/ProductCard";
import SpecialProductCard from "../../components/Cards/SpecialProductCard";
import styles from "./Man.module.scss";

function Man() {
  return (
    <div className="container">
      <div className={`${styles["page-container"]}`}>
        <div className={`${styles["page-title"]} ${styles["title"]}`}>Nam</div>

        <div className="banner">
          <div className={`${styles["banner-event"]}`}>
            <img
              src="https://im.uniqlo.com/global-cms/spa/res6b4eee428a8e71445abcd405b5162a72fr.jpg"
              alt="banner-event"
            />
          </div>
          <div className={`${styles["banner-event"]}`}>
            <img
              src="https://im.uniqlo.com/global-cms/spa/res34b0a46b8007fa42e4e5f77ceb4742fbfr.jpg"
              alt="banner-event"
            />
          </div>
        </div>

        <div className={`${styles["product-category"]}`}>
          <div className={`${styles["category-title"]} ${styles["title"]}`}>
            DANH MỤC NỔI BẬT
          </div>
          <div className={`${styles["category-items"]}`}>
            {ManProduct.manCategories.map((category, index) => {
              return (
                <div className={`${styles["category-item"]}`}>
                  <CategoryCard
                    categoryImg={category.categoryImage}
                    categoryTitle={category.categoryName}
                    categoryUrl={category.categoryUrl}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={`${styles["page-news"]}`}>
          <div className={`${styles["page-news-title"]} ${styles["title"]}`}>
            Chủ Đề Nổi Bật
          </div>
          <div className={`${styles["news-items"]}`}>
            {ManProduct.manNews.map((news, index) => {
              return (
                <div className={`${styles["news-item"]}`}>
                  <NewsCard
                    newsImg={news.newsImage}
                    newsTitle={news.newsTitle}
                    newsDescription={news.newsDescription}
                    newsUrl={news.newsUrl}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className={`${styles["limited-product"]}`}>
          <div className={`${styles["product-page-title"]} ${styles["title"]}`}>
            KHUYẾN MÃI CÓ HẠN
          </div>
          <div className={`${styles["product-container"]}`}>
            <div className={`${styles["special-product-container"]}`}>
              <div className={`${styles["special-product-item"]}`}>
                <SpecialProductCard
                  specialUrl={ManProduct.manSpecialProduct[0].specialUrl}
                  specialImg={ManProduct.manSpecialProduct[0].specialImage}
                  specialTitle={ManProduct.manSpecialProduct[0].specialTitle}
                  specialDescription={
                    ManProduct.manSpecialProduct[0].specialDescription
                  }
                  specialPrice={ManProduct.manSpecialProduct[0].specialPrice}
                  specialNote={ManProduct.manSpecialProduct[0].specialNote}
                />
              </div>
            </div>
            <div className={`${styles["product-items-container"]}`}>
              {ManProduct.manLimitedProduct.map((product, index) => {
                return (
                  <div className={`${styles["product-item"]}`}>
                    <ProductCard
                      productUrl={product.productUrl}
                      productImage={product.productImage}
                      productColors={product.productColors}
                      productGender={product.productGender}
                      productSize={product.productSize}
                      productTitle={product.productTitle}
                      productDescription={product.productDescription}
                      productPrice={product.productPrice}
                      productNewPrice={product.productNewPrice}
                      productNote={product.productNote}
                      productStar={Math.floor(product.productStar)}
                      productNumOfReviews={product.productNumOfReviews}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Man;
