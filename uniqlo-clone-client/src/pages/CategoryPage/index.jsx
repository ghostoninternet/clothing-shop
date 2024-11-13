import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {
  ManProduct,
  WomanProduct,
  KidProduct,
  ChildProduct,
} from "../../apis/product-data"
import Button from "./components/Button"
import CategoryPageProduct from "./components/CategoryPageProduct"
import styles from "./CategoryPage.module.scss"
import BannerImageOnly from "./components/Banner/BannerImageOnly"
import BannerWithContent from "./components/Banner/BannerWithContent"
import CategoryCard from "../../components/Cards/CategoryCard"
import Notification from "../../components/Notification"
import UtilSlide from "../../components/UtilSlide"

function CategoryPage() {
  const [pageTitle, setPageTitle] = useState("");
  const [product, setProduct] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/men") {
      setPageTitle("Nam");
      setProduct(ManProduct);
    } else if (location.pathname === "/women") {
      setPageTitle("Nữ");
      setProduct(WomanProduct);
    } else if (location.pathname === "/kid") {
      setPageTitle("Trẻ Em");
      setProduct(KidProduct);
    } else {
      setPageTitle("Trẻ Sơ Sinh");
      setProduct(ChildProduct);
    }
  }, [location.pathname]);

  const notificationList = [
    "- MIỄN PHÍ giao hàng cho đơn hàng online từ 999.000 VND",
    "- Thay đổi thuế GTGT",
    "- Điều Chỉnh Giá Đặc Biệt (Online và Tất Cả Cửa Hàng)"
  ]

  return (
    <>
      {Object.keys(product).length > 0 ? (
        <div className="category-page-container container">
          <div className={`${styles["title"]}`}>
            <div className={`${styles["page-title"]}`}>{pageTitle}</div>
          </div>

          <div className={`${styles["banner-container"]}`}>
            <div className={`${styles["banner-image-container"]}`}>
              <BannerImageOnly 
                imageSrc={product.advertiseBannerWithImage[0].bannerImageUrl}
                toUrl={product.advertiseBannerWithImage[0].bannerUrl}
              />
            </div>
            <div className={`${styles["banner-with-content-container"]}`}>
              <BannerWithContent bannerWithContent={product.advertiseBannerWithContent}/>
            </div>
            <div className={`${styles["banner-image-container"]}`}>
              <BannerImageOnly 
                imageSrc={product.advertiseBannerWithImage[1].bannerImageUrl}
                toUrl={product.advertiseBannerWithImage[1].bannerUrl}
              />
            </div>
          </div>

          <div className={`${styles["hightlight-category-container"]}`}>
            <div className={`${styles["title"]}`}>Danh Mục Nổi Bật</div>
            <div className={`${styles["highlight-category-section"]}`}>
                {product.highlightCategories.map((category, index) => {
                  return (
                    <div
                      className={`${styles["highlight-category-item"]}`}
                      key={index}
                    >
                      <CategoryCard
                        categoryUrl={category.categoryUrl}
                        categoryImg={category.categoryImage}
                        categoryTitle={category.categoryName}
                      />
                    </div>
                  );
                })}
            </div>
          </div>

          <Notification notificationsList={notificationList} />

          <div className={`${styles["information-container"]}`}>
            <UtilSlide title={"CHỦ ĐỀ NỔI BẬT"} titlePosition="mid" blocks={product.news} />
          </div>
          
          {
            (location.pathname === "/men" || location.pathname === "/women")
            ? (
              <>
                <div className={`${styles["limited-products-container"]}`}>
                  <CategoryPageProduct
                    title={"KHUYẾN MÃI CÓ HẠN"}
                    specialProduct={product.specialProduct[0]}
                    products={product.limitedProduct}
                  />
                </div>
                <div className={`${styles["new-products-container"]}`}>
                  <CategoryPageProduct
                    title={"HÀNG MỚI VỀ"}
                    specialProduct={product.specialProduct[1]}
                    products={product.newProduct}
                  />
                </div>
              </>
            )
            : (
              <>
                <div>For kids</div>
              </>
            )
          }
          
          <div className={`${styles["top-news-container"]}`}>
            <UtilSlide title={"TIN TỨC NỔI BẬT"} titlePosition="mid" blocks={product.news} />
            <div>
              <Button
                buttonText={"Xem Thêm"}
                buttonUrl={"https://www.uniqlo.com/vn/vi/spl"}
              />
            </div>
          </div>

          <div className={`${styles["ut-collection-container"]}`}>
            <UtilSlide title={"Bộ Sưu Tập UT"} titlePosition="mid" blocks={product.utCollection.utCollectionItems} />
            <div>
              <Button
                buttonText={"Xem Thêm"}
                buttonUrl={product.utCollection.utCollectionUrl}
              />
            </div>
          </div>
          
          <div className={`${styles["style-hint-container"]}`}>
            <div className={`${styles["style-hint-section"]}`}>
              <div className={`${styles["title"]}`}>Gợi Ý Phong Cách</div>
              <div className={`${styles["banner-image-container"]}`}>
                <BannerImageOnly 
                  imageSrc={"https://im.uniqlo.com/global-cms/spa/res08a9b401b5fdcf2e3dc47fd377e45409fr.jpg"}
                  toUrl={"https://www.uniqlo.com/vn/vi/stylingbook/stylehint/men"}
                />
              </div>
              <div className={`${styles["button-watch-more"]}`}>
                <Button
                  buttonText={"Xem Thêm"}
                  buttonUrl={product.utCollection.utCollectionUrl}
                />
              </div>
              <div className={`${styles["banner-image-container"]}`}>
                <BannerImageOnly 
                  imageSrc={"https://im.uniqlo.com/global-cms/spa/resc3b5fcd66262e445afbadb4c89748ec3fr.jpg"}
                  toUrl={"https://www.uniqlo.com/vn/vi/stylingbook/stylehint/men"}
                />
              </div>
            </div>
            <div className={`${styles["lifewear-section"]}`}>
              <UtilSlide title={"Về LifeWear"} titlePosition="mid" blocks={product.utCollection.utCollectionItems} />
              <div>
                <Button
                  buttonText={"Xem Thêm"}
                  buttonUrl={product.utCollection.utCollectionUrl}
                />
              </div>
            </div>
            <div className={`${styles["live-station-section"]}`}>
              <UtilSlide title={"Live Station"} titlePosition="mid" blocks={product.utCollection.utCollectionItems} />
              <div>
                <Button
                  buttonText={"Xem Thêm"}
                  buttonUrl={product.utCollection.utCollectionUrl}
                />
              </div>
            </div>
          </div>
          
          <div className={`${styles["app-utils-container"]}`}>
            <UtilSlide title={"Tiện Ích Từ Ứng Dụng"} titlePosition="mid" blocks={product.utilSlideBlocks} />
            <div>
              <Button
                buttonText={"XEM THÊM VỀ ỨNG DỤNG UNIQLO"}
                buttonUrl={"https://www.uniqlo.com/vn/vi/spl/shopping-made-ec/uniqlo-app"}
              />
            </div>
          </div>

          <div className={`${styles["store-locator-container"]}`}>
            <div className={`${styles["title"]}`}>Store Locator</div>
            <Link to="https://map.uniqlo.com/vn/vi/">
                <div className={`${styles["store-locator-image"]}`}>
                  <img src="https://im.uniqlo.com/global-cms/spa/res9215c8c763aafb2f31098d85c159348dfr.jpg" alt="store locator image"/>
                </div>
            </Link>
            <div>
              <Button
                buttonText={"XEM THÊM"}
                buttonUrl={"https://map.uniqlo.com/vn/vi/"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
}

export default CategoryPage;
