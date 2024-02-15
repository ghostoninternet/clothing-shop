import styles from './AdvertisementBanner.module.scss'
import Slider from './Slider'

function AdvertisementBanner({ isImage, toUrl, imageSrc, slides }) {
  if (isImage) return (
    <Link to={toUrl}>
      <div className="banner-wrapper">
        <div className="banner-img">
          <img src={imageSrc} alt="banner" />
        </div>
      </div>
    </Link>
  )
  return (
    <div>Slider</div>
  )
}

export default AdvertisementBanner