import { Link } from 'react-router-dom'
import styles from './EventBanner.module.scss'

function EventBanner({ bannerImgUrl, bannerUrl }) {
  return (
    <Link to={bannerUrl}>
      <div className="banner-wrapper">
        <div className="banner-img">
          <img src={bannerImgUrl} alt="banner" />
        </div>
      </div>
    </Link>
  )
}

export default EventBanner