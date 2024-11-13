import { Link } from 'react-router-dom'
import styles from './Banner.module.scss'

function BannerImageOnly({ imageSrc, toUrl }) {
  return (
    <Link to={toUrl}>
      <div className={`${styles["banner-image-wrapper"]}`}>
        <div className={`${styles["banner-image"]}`}>
          <img src={imageSrc} alt="banner image" />
        </div>
      </div>
    </Link>
  )
}

export default BannerImageOnly