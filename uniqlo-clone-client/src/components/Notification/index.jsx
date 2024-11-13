import classNames from "classnames/bind";
import styles from './Notification.module.scss'
const cx = classNames.bind(styles)

function Notification({ notificationsList }) {
    return ( 
        <div className={cx('fr-contents-card')}>
            <div className={cx('fr-wrapper')}>
                <div className={cx('fr-contents-card-title')}>THÔNG BÁO</div>
                {
                    notificationsList.map(notification => (
                        <a key={notification} href="" className={cx('fr-contents-card-link')}>
                            <div className={cx('fr-contents-card-content')}>
                                {notification}
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Notification;