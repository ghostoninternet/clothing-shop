import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import CategoryCard from "../../components/Cards/CategoryCard"
import {
  ManProduct,
  WomanProduct,
  KidProduct,
  ChildProduct,
} from "../../apis/product-data"
import Information from "./components/Information"
import Button from "./components/Button"
import CategoryPageProduct from "./components/CategoryPageProduct"
import styles from "./CategoryPage.module.scss"
import BannerImageOnly from "./components/Banner/BannerImageOnly"
import BannerWithContent from "./components/Banner/BannerWithContent"

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

          <div className={`${styles["anouncement-container"]}`}>
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

          <div className={`${styles["information-container"]}`}>
            <div className={`${styles["title"]}`}>CHỦ ĐỀ NỔI BẬT</div>
            <Information information={product.news} />
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

          <div className={`${styles["ut-collection-container"]}`}>
            <div className={`${styles["title"]}`}>Bộ Sưu Tập UT</div>
            <div className={`${styles["information-container"]}`}>
              <Information information={product.utCollection.utCollectionItems} />
            </div>
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
              <div className={`${styles["title"]}`}>Về LifeWear</div>
              <div className={`${styles["information-container"]}`}>
                <Information information={product.utCollection.utCollectionItems} />
              </div>
              <div>
                <Button
                  buttonText={"Xem Thêm"}
                  buttonUrl={product.utCollection.utCollectionUrl}
                />
              </div>
            </div>
            <div className={`${styles["live-station-section"]}`}>
              <div className={`${styles["title"]}`}>Live Station</div>
              <div className={`${styles["information-container"]}`}>
                <Information information={product.utCollection.utCollectionItems} />
              </div>
              <div>
                <Button
                  buttonText={"Xem Thêm"}
                  buttonUrl={product.utCollection.utCollectionUrl}
                />
              </div>
            </div>
          </div>
          
          <div className={`${styles["app-utils-container"]}`}>
            <div className={`${styles["title"]}`}>Tiện Ích Từ Ứng Dụng</div>
            <div className={`${styles["information-container"]}`}>
              <Information information={product.utilSlideBlocks} />
            </div>
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
