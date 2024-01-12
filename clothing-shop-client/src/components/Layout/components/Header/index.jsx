import styles from './Header.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Header() {
    return <h2 className={cx('wrapper')}>Header</h2>
}

export default Header;