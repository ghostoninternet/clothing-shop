import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './CategoryDetailPage.module.scss'
import CategoryDetailPageProduct from './components/CategoryDetailPageProduct.jsx'
import { ManProduct } from '../../apis/product-data' 
import { productCategoryAndTypes } from '../../utils/constants/productCategoryAndTypes'
import PathText from '../../components/PathText'

function CategoryDetailPage() {
  const location = useLocation()
  
  const [breadcumb, setBreadcumb] = useState([])
  const [selectedTab, setSelectedTab] = useState("")
  const [pageTitle, setPageTitle] = useState("")
  const [sortByChoice, setSortByChoice] = useState('Tiêu biểu')
  const [openSortByChoice, setOpenSortByChoice] = useState(false)
  const [currentPathname, setCurrentPathname] = useState(null)
  const [productTypes, setProductTypes] = useState([])
  const [productsCategoryTitle, setProductsCategoryTitle] = useState(null)

  const refCategoryOption = useRef(new Map())
  const refCategoryOptionChoices = useRef(new Map())

  useEffect(() => {
    const pathnameElements = location.pathname.split("/")
    const customerType = pathnameElements[1]
    const products = productCategoryAndTypes.filter((product) => product.path == ("/" + customerType))

    const productTypes = products[0].type
    const productTypesArray = []
    const listsOfTypes = []
    productTypes.forEach((elementsOfOneType) => {
      elementsOfOneType.forEach((element) => {
        productTypesArray.push(element)
        element.list.forEach((l) => {
          listsOfTypes.push(l)
        })
      })
    })
    
    const pageTitle = listsOfTypes.filter((list) => list[1] === location.pathname)
    
    setBreadcumb([{text: "TRANG CHỦ UNIQLO", link: "/"}, {text: products[0].name, link: products[0].path}, {text: pageTitle[0][0]}])
    setCurrentPathname(location.pathname)
    setProductsCategoryTitle(products[0].name)
    setProductTypes(productTypesArray)
    setPageTitle(pageTitle[0][0])
    setSelectedTab(products[0].name)

  }, [location.pathname])


  const handleOpenAndCloseCategoryOption = (e, index) => {
    const outerDivElement = refCategoryOption.current.get(index)
    const spanElement = refCategoryOption.current.get(index).childNodes[1].childNodes[0]
    const choicesElement = refCategoryOptionChoices.current.get(index)

    if (choicesElement.classList.contains(`${styles["category-item-choices-wrapper"]}`)) {
      choicesElement.classList.remove(`${styles["category-item-choices-wrapper"]}`)
      choicesElement.classList.add(`${styles["category-item-choices-wrapper-hidden"]}`)
    } else {
      choicesElement.classList.add(`${styles["category-item-choices-wrapper"]}`)
      choicesElement.classList.remove(`${styles["category-item-choices-wrapper-hidden"]}`)
    }

    if (outerDivElement.style.fontWeight == "") {
      outerDivElement.style.fontWeight = "bold"
    } else {
      outerDivElement.style.fontWeight = ""
    }

    if (spanElement.classList.contains(`${styles["category-open-and-close-icon"]}`)) {
      spanElement.classList.remove(`${styles["category-open-and-close-icon"]}`)
      spanElement.classList.add(`${styles["category-open-and-close-icon-active"]}`)
    } else {
      spanElement.classList.remove(`${styles["category-open-and-close-icon-active"]}`)
      spanElement.classList.add(`${styles["category-open-and-close-icon"]}`)
    }
  }

  return productsCategoryTitle ? (
    <div className="container">
      <PathText path={breadcumb} />
      {
        console.log('🚀 ~ useEffect ~ breadcumb:', breadcumb)
      }
      <div className={`${styles["title"]}`}>
        <div className={`${styles["page-title"]}`}>
          {pageTitle}
        </div>
      </div>
      
      <div className={`${styles["tab-container"]}`}>
        <div className={`${styles["tab-items-container"]}`}>
          <div className={`${styles["tab-item-wrapper"]}`}>
            <Link to="/women/tops/tops-collections">
              <div className={`${styles["tab-item"]} ${selectedTab === "NỮ" ? styles["tab-item-active"] : ""}`}>
                Nữ
              </div>
            </Link>
          </div>
          <div className={`${styles["tab-item-wrapper"]}`}>
            <Link to="/men/tops/tops-collections">
              <div className={`${styles["tab-item"]} ${selectedTab === "NAM" ? styles["tab-item-active"] : ""}`}>
                Nam
              </div>
            </Link>
          </div>
          <div className={`${styles["tab-item-wrapper"]}`}>
            <Link to="/kids/tops/tops-collections">
              <div className={`${styles["tab-item"]} ${selectedTab === "TRẺ EM" ? styles["tab-item-active"] : ""}`}>
                Trẻ em
              </div>
            </Link>
          </div>
          <div className={`${styles["tab-item-wrapper"]}`}>
            <Link to="/baby/newborn/all-newborn">
              <div className={`${styles["tab-item"]} ${selectedTab === "TRẺ SƠ SINH" ? styles["tab-item-active"] : ""}`}>
                Trẻ sơ sinh
              </div>
            </Link>
          </div>
        </div>

        <div className={`${styles["tab-image"]}`}>
          <Link to="https://www.uniqlo.com/vn/vi/contents/feature/lifewear-collection/t-shirts/?gender=men">
            <img src="https://im.uniqlo.com/global-cms/spa/res53630278cab3180a905361b5536d87fdfr.jpg" alt="tab image" />
          </Link>
        </div>
      </div>

      <div className={`${styles["result-sort-by-container"]}`}>
        <div className={`${styles["result-container"]}`}>
          <div className={`${styles["title"]}`}>
            <div className={`${styles["result-container-title"]}`}>
              KẾT QUẢ
            </div>
          </div>
          <div className={`${styles["result"]}`}>
              268 items
          </div>
        </div>

        <div className={`${styles["sort-by-container"]}`}>
          <div className={`${styles["title"]}`}>
            <div className={`${styles["sort-by-container-title"]}`}>
              SẮP XẾP THEO 
            </div>
          </div>
          <div className={`${styles["sort-by-choices"]}`}>
            <div className={`${styles["sort-by-choices-wrapper"]}`} onClick={(e) => setOpenSortByChoice(!openSortByChoice)}>
              {sortByChoice}
              <div className={`${styles["open-close-icon-wrapper"]}`}>
                <span className={openSortByChoice ? `${styles["open-close-icon-active"]}` : `${styles["open-close-icon"]}`}></span>
              </div>
            </div>
            <div className={openSortByChoice ? `${styles["choices-wrapper"]}` : `${styles["choices-wrapper-hidden"]}`}>
              <ul>
                <li
                  key="1"
                  className={`${styles["choice-item"]} ${sortByChoice === "Tiêu biểu" ? styles["choice-item-active"] : ""}`}
                  onClick={(e) => {
                    setSortByChoice("Tiêu biểu")
                    setOpenSortByChoice(!openSortByChoice)
                  }}
                >
                  Tiêu biểu
                </li>
                <li 
                  key="2" 
                  className={`${styles["choice-item"]} ${sortByChoice === "Hàng mới về" ? styles["choice-item-active"] : ""}`} 
                  onClick={(e) => {
                    setSortByChoice("Hàng mới về")
                    setOpenSortByChoice(!openSortByChoice)
                  }}
                >
                  Hàng mới về
                </li>
                <li 
                  key="3"
                  className={`${styles["choice-item"]} ${sortByChoice === "Từ thấp đến cao" ? styles["choice-item-active"] : ""}`} 
                  onClick={(e) => {
                    setSortByChoice("Từ thấp đến cao")
                    setOpenSortByChoice(!openSortByChoice)
                  }}
                >
                  Từ thấp đến cao
                </li>
                <li 
                  key="4" 
                  className={`${styles["choice-item"]} ${sortByChoice === "Từ cao đến thấp" ? styles["choice-item-active"] : ""}`} 
                  onClick={(e) => {
                    setSortByChoice("Từ cao đến thấp")
                    setOpenSortByChoice(!openSortByChoice)
                  }}
                >
                  Từ cao đến thấp
                </li>
                <li 
                  key="5" 
                  className={`${styles["choice-item"]} ${sortByChoice === "Xếp hạng cao nhất" ? styles["choice-item-active"] : ""}`} 
                  onClick={(e) => {
                    setSortByChoice("Xếp hạng cao nhất")
                    setOpenSortByChoice(!openSortByChoice)
                  }}
                >
                  Xếp hạng cao nhất
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["category-detail-product-container"]}`}>
        <div className={`${styles["category-and-filter-sidebar-container"]}`}>
          <div className={`${styles["title"]}`}>
            <div className={`${styles["sidebar-title"]}`}>
              {productsCategoryTitle}
            </div>
          </div>

          <div className={`${styles["category-container"]}`}>
            {
              productTypes.map((type, index) => (
                <>
                  <div 
                    key={index}
                    className={`${styles["category-item-wrapper"]}`}
                    ref={(element) => refCategoryOption.current.set(index, element)}
                    onClick={(e) => handleOpenAndCloseCategoryOption(e, index)}
                    style={
                      type.list.filter((l) => l[1] === currentPathname).length != 0 ? {fontWeight: "bold"} : {}
                    }
                  >
                    {type.title}
                    <div className={`${styles["category-open-and-close-icon-wrapper"]}`}>
                      <span className={type.list.filter((l) => l[1] === currentPathname).length != 0 ? `${styles["category-open-and-close-icon-active"]}` : `${styles["category-open-and-close-icon"]}`}>
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#757575" fillRule="evenodd" d="M12 16.26l-7-6.03 1.34-1.49L12 13.62l5.66-4.88L19 10.23l-7 6.03zm48-8.52l-7 6.03 1.34 1.49L60 10.38l5.66 4.88L67 13.77l-7-6.03z"></path></svg>
                      </span>
                    </div>
                  </div>
                  <div
                    className={type.list.filter((l) => l[1] === currentPathname).length != 0 ? `${styles["category-item-choices-wrapper"]}` : `${styles["category-item-choices-wrapper-hidden"]}`}
                    ref={(element) => refCategoryOptionChoices.current.set(index, element)}
                  >
                      <ul>
                        {
                          type.list.map((item, index) => (
                            <li key={index} className={`${styles["category-item-choice"]} ${currentPathname === item[1] ? styles["category-item-choice-active"] : ""}`}><Link to={item[1]}>{item[0]}</Link></li>
                          )) 
                        }
                      </ul>
                  </div>
                </>
              ))
            }
          </div>
        </div>

        <div className={`${styles["category-product-container"]}`}>
          <CategoryDetailPageProduct products={ManProduct.limitedProduct} />
        </div>
      </div>
    </div>
  ) : (
    <div className='container'>
      Loading...
    </div>
  )
}

export default CategoryDetailPage