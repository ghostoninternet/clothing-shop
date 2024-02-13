import classNames from "classnames/bind";
import styles from './WishlistItem.module.scss'
import { Link } from 'react-router-dom'
import { Fragment } from "react";

const cx = classNames.bind(styles)

function WishlistItem( {nb, item ,innerRef, fnc, refId} ) {
    return (
        <Fragment>
            <div className={cx('wishlistItem-wrapper')}>
                <Link to={''}>
                    <div className={cx('wishlistItem-container')}>
                        <div className={cx('img-wrapper')}>
                            <div className={cx('wishlist-heartIcon')} onClick={fnc} ref={(element) => innerRef.current[refId] = element}></div>
                            <img className={cx('img')} src={item.img} alt="" />
                        </div>
                        <div className={cx('info-wrapper')}>
                            <div className={cx('info-heading')}>{item.name}</div>
                            <div className={cx('info-id')}>Mã sản phẩm: {item.id}</div>
                            <div className={cx('info-text')}>Màu sắc: {item.color}</div>
                            <div className={cx('info-text')}>Kích cỡ: {item.size}</div>
                            {!item.offerPrice ?
                                <div className={cx('info-price')}>{item.price}</div> :
                                <div className={cx('info-offerPrice-content')}>
                                    <div className={cx('info-offerPrice')}>
                                        <div className={cx('original-price')}>{item.price}</div>
                                        <div className={cx('limited-price')}>{item.offerPrice}</div>
                                        <div className={cx('price-flag')}>Limited Offer Từ {item.offerTime}</div>
                                    </div>
                                </div>
                            }
                            
                        </div>
                    </div>
                </Link>
            </div>
            {(nb-1 == refId) ? <Fragment /> : <div className={cx('separator')}></div>}
        </Fragment>
        
        
    )
}

export default WishlistItem;