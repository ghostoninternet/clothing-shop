import styles from './Banner.module.scss'
import { Link } from 'react-router-dom'

function BannerWithContent({ bannerWithContent }) {
  return (
    <div className={`${styles["banner-with-content-wrapper"]}`} style={{ backgroundImage: `url(${bannerWithContent.imageUrl})` }}>
      <div className={`${styles["banner-content"]}`}>
        <div className={`${styles["banner-title"]}`}>
          {bannerWithContent.title}
        </div>
        <div className={`${styles["banner-description"]}`}>
          {bannerWithContent.description}
        </div>
        <div className={`${styles["banner-price"]}`}>
          {bannerWithContent.price}
        </div>
        <div className={`${styles["banner-note"]}`}>
          {bannerWithContent.note}
        </div>
        <div className={`${styles["banner-button"]}`}>
          <Link to={bannerWithContent.toUrl}>
            <button type='button'>
              Mua Ngay
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BannerWithContent