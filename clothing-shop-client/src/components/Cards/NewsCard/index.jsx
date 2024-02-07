import styles from './NewsCard.module.scss'
import { Link } from 'react-router-dom'

function NewsCard({ newsUrl, newsImg, newsTitle, newsDescription}) {
  return (
    <div className="news-card-wrapper">
      <Link to={newsUrl}>
        <div className={`${styles["news-card-container"]}`}>
          <div className={`${styles["news-card-image"]}`}>
            <img src={newsImg} alt={`${newsTitle} Image`} />
          </div>
          <div className={`${styles["news-card-title"]}`}>
            {newsTitle}
          </div>
          <div className="news-card-description">
            {newsDescription}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NewsCard