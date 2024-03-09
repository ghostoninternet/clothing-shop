import classNames from "classnames/bind"
import styles from './SlideBlock.module.scss'
const cx = classNames.bind(styles)

function SlideBlock({ imgSrc, title, description, link }) {
    return ( 
        <a href={link} className={cx('slide-block')}>
            <div className={cx('img-block')}>
                <img src={imgSrc} alt="" className={cx('img')}/>
            </div>
            <div className={cx('title')}>
                {title}
            </div>
            <div className={cx('description')}>
                {description}
            </div>
        </a>
    )
}

export default SlideBlock;