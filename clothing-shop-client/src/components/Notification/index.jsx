import classNames from "classnames/bind";
import styles from './Notification.module.scss'
const cx = classNames.bind(styles)

function Notification({ children }) {
    return ( 
        <div className={cx('fr-contents-card')}>
            <div className={cx('fr-wrapper')}>
                <div className={cx('fr-contents-card-title')}>THÔNG BÁO</div>
                <a href="" className={cx('fr-contents-card-link')}>
                    <div className={cx('fr-contents-card-content')}>
                        - Thời gian giao hàng trong Tháng 1 & 2/2024. Xem thêm tại đây!
                    </div>
                </a>
                <a href="" className={cx('fr-contents-card-link')}>
                    <div className={cx('fr-contents-card-content')}>
                        - Thay đổi thuế GTGT
                    </div>
                </a>
                <a href="" className={cx('fr-contents-card-link')}>
                    <div className={cx('fr-contents-card-content')}>
                        - Điều Chỉnh Giá Đặc Biệt (Online và Tất Cả Cửa Hàng)
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Notification;