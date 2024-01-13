import styles from '../../Header/Header.module.scss'
import classNames from 'classnames/bind'
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles)

function Language() {
    return (
        <>
            <Link to='/' className={cx('header-help-items-link')}>
                <span>English</span>
            </Link>
            <span className={cx('divider')}>|</span>
            <Link to='/' className={cx('header-help-items-link')}>
                <span className={cx('active')}>Tiếng Việt</span>
            </Link>
        </>
    )
}

export default Language;