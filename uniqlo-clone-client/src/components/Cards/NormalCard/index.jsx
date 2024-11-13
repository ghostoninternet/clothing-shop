import styles from './NormalCard.module.scss'
import { Link } from 'react-router-dom'

function NormalCard({ url, image, title, description}) {
  return (
    <div className="card-wrapper">
      <Link to={url}>
        <div className={`${styles["card-container"]}`}>
          <div className={`${styles["card-image"]}`}>
            <img src={image} alt={`${title} Image`} />
          </div>
          <div className={`${styles["card-title"]}`}>
            {title}
          </div>
          <div className="card-description">
            {description}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NormalCard