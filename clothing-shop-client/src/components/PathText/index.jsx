import { Link } from 'react-router-dom'

import classNames from "classnames/bind";
import styles from './PathText.module.scss'
const cx = classNames.bind(styles)

function PathText({ children, path }) {
    return ( 
        <div className="container">
            <ul className={cx('path-list')}>
                {path.map((X, index) => {
                    if (!X.link)
                        return (
                            <li className={cx('path-item')} key={index}>
                                <span className={cx('path-text')}>{X.text}</span>
                            </li>
                        )
                    return (
                        <li className={cx('path-item', 'link-item')} key={index}>
                            <Link to={X.link} className={cx('path-text')}>{X.text}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PathText;