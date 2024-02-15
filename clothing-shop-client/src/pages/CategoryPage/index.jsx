import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EventBanner from "./components/Banner/EventBanner";
import CategoryCard from "../../components/Cards/CategoryCard";
import styles from "./CategoryPage.module.scss";
import {
  ManProduct,
  WomanProduct,
  KidProduct,
  ChildProduct,
} from "../../apis/product-data";
import Button from "./components/Button";
import CategoryPageProduct from "./components/CategoryPageProduct";
import Information from "./components/Information";
import Collection from "./components/Collection";

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

  return (
    <>
      {Object.keys(product).length > 0 ? (
        <div className="category-page-container container">
          <div className={`${styles["title"]}`}>
            <div className={`${styles["page-title"]}`}>{pageTitle}</div>
          </div>

          <div className={`${styles["banner-container"]}`}>
            <div className={`${styles["event-banner"]}`}>
              <EventBanner
                bannerImgUrl={
                  "https://im.uniqlo.com/global-cms/spa/res6b4eee428a8e71445abcd405b5162a72fr.jpg"
                }
                bannerUrl={"https://www.uniqlo.com/vn/vi/spl/special-events"}
              />
            </div>
            <div className={`${styles["event-banner"]}`}>
              <EventBanner
                bannerImgUrl={
                  "https://im.uniqlo.com/global-cms/spa/res34b0a46b8007fa42e4e5f77ceb4742fbfr.jpg"
                }
                bannerUrl={
                  "https://www.uniqlo.com/vn/vi/feature/sale/men?path=17246&flagCodes=discount"
                }
              />
            </div>
          </div>

          <div className={`${styles["hightlight-category-container"]}`}>
            <div className={`${styles["title"]}`}>Danh Mục Nổi Bật</div>
            <div className={`${styles["highlight-category-section"]}`}>
              <div className={`${styles["highlight-category-wrapper"]}`}>
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
          </div>

          <div className={`${styles["anouncement-container"]}`}>
            <div className={`${styles["anouncement-wrapper"]}`}>
              <div className={`${styles["anouncement-title"]}`}>THÔNG BÁO</div>
              <div className={`${styles["anouncement-items-wrapper"]}`}>
                <a href="https://faq-vn.uniqlo.com/pkb_Home_UQ_VN?id=kA32t000000kCPm&q=th%E1%BB%9Di+gian+giao+h%C3%A0ng&l=vi&fs=Search&pn=1">
                  <div className={`${styles["anouncement-item-title"]}`}>
                    - Thời gian giao hàng trong Tháng 1 & 2/2024. Xem thêm tại
                    đây!
                  </div>
                </a>
                <a href="https://faq-vn.uniqlo.com/pkb_Home_UQ_VN?id=kA32t000000kCWJ&q=L%E1%BB%8Bch+ho%E1%BA%A1t+%C4%91%E1%BB%99ng%5D&l=vi&fs=Search&pn=1">
                  <div className={`${styles["anouncement-item-title"]}`}>
                    - Lịch Hoạt Động Các Cửa Hàng UNIQLO Dịp Tết Nguyên Đán 2024
                  </div>
                </a>
                <a href="https://faq-vn.uniqlo.com/pkb_Home_UQ_VN?id=kA32t00000002FB&q=Gi%E1%BA%A3m+tr%E1%BB%AB+thu%E1%BA%BF+VAT&l=vi&fs=Search&pn=1">
                  <div className={`${styles["anouncement-item-title"]}`}>
                    - Thay đổi thuế GTGT
                  </div>
                </a>
                <a href="https://faq-vn.uniqlo.com/articles/vi/FAQ/Notice-New-Price-For-Online-and-All-Stores">
                  <div className={`${styles["anouncement-item-title"]}`}>
                    - Điều Chỉnh Giá Đặc Biệt (Online và Tất Cả Cửa Hàng)
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className={`${styles["information-container"]}`}>
            <div className={`${styles["title"]}`}>CHỦ ĐỀ NỔI BẬT</div>
            <Information information={product.news} />
          </div>

          <div className={`${styles["limited-products-container"]}`}>
            <CategoryPageProduct
              title={"KHUYẾN MÃI CÓ HẠN"}
              specialProduct={product.specialProduct[0]}
              products={product.limitedProduct}
            />
          </div>

          <div className={`${styles["limited-products-container"]}`}>
            <CategoryPageProduct
              title={"KHUYẾN MÃI CÓ HẠN"}
              specialProduct={product.specialProduct[1]}
              products={product.limitedProduct}
            />
          </div>

          <div className={`${styles["banner-container"]}`}>
            <div className={`${styles["event-banner"]}`}>
              <EventBanner
                bannerImgUrl={
                  "https://im.uniqlo.com/global-cms/spa/res4d10678ec427b70cb0de0480f6089973fr.jpg"
                }
                bannerUrl={"https://www.uniqlo.com/vn/vi/spl/coming-soon/men"}
              />
            </div>
          </div>

          <div className={`${styles["top-news-container"]}`}>
            <div className={`${styles["title"]}`}>TIN TỨC NỔI BẬT</div>
            <div className={`${styles["information-container"]}`}>
              <Information information={product.news} />
            </div>
            <div>
              <Button
                buttonText={"Xem Thêm"}
                buttonUrl={"https://www.uniqlo.com/vn/vi/spl"}
              />
            </div>
          </div>
          
          <div className={`${styles["collection-container"]}`}>
            <Collection
              utCollection={product.utCollection.utCollectionItems}
              utUrl={product.utCollection.utCollectionUrl}
            />
          </div>
        </div>
      ) : (
        <div>No Data</div>
      )}
    </>
  );
}

export default CategoryPage;
