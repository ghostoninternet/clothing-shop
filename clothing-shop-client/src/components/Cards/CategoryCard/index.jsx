import styles from './CategoryCard.module.scss'
import { Link } from 'react-router-dom'

function CategoryCard({categoryUrl ,categoryImg, categoryTitle}) {
  return (
    <div className="category-card-wrapper">
      <Link to={categoryUrl}>
        <div className={`${styles["category-card-container"]}`}>
          <div className={`${styles["category-card-image"]}`}>
            <img src={categoryImg} alt={`${categoryTitle} Image`} />
          </div>
          <div className={`${styles["category-card-title"]}`}>
            {categoryTitle}
          </div>
        </div>
      </Link>
    </div>
    
  )
}

export default CategoryCard