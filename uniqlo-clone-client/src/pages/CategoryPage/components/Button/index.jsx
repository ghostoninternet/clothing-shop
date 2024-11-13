import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

function Button({ buttonText, buttonUrl}) {
  return (
    <Link to={buttonUrl}>
      <div className={`${styles["button-wrapper"]}`}>
        <div className={`${styles["button"]}`}>
          <div className={`${styles["button-text"]}`}>
            {buttonText}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Button