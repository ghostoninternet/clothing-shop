import classNames from "classnames/bind";
import styles from './CartItem.module.scss'
import { Fragment, useRef, useState } from "react";
const cx = classNames.bind(styles)

function CartItem( {item, updownRef, popperRef, countRef, totalRef, refId, handleUpdown, handleChoseQuantity, handleRemove, handleCalProductCount, handleCalTotal} ) {
    const handleChose = (i) => {
        handleChoseQuantity()
        item.buyCount = i
        handleCalProductCount(i)
        handleCalTotal(item.offerPrice ?
            (i*parseInt((item.offerPrice.replace(/\./g,'')).replace(' VND', ''))) :
            (i*parseInt((item.price.replace(/\./g,'')).replace(' VND', '')))
        )
    }
 
    return (
        <Fragment>
            <div className={cx('product-wrapper')}>
                <div className={cx('img-wrapper')}>
                    <img src={item.img} alt="" className={cx('product-img')}/>
                </div>
                <div className={cx('info-wrapper')}>
                    <div className={cx('product-info')}>
                        <div className={cx('product-info-name')}>{item.name}</div>
                        <div className={cx('product-info-id')}>Mã sản phẩm: {item.id}</div>
                        <div className={cx('product-info-color')}>Màu sắc: {item.color}</div>
                        <div className={cx('product-info-size')}>Kích cỡ: {item.size}</div>
                        {item.offerPrice ?
                            <div className={cx('limited-wrapper')}>
                                <div className={cx('limited-time')}>Limited Offer Từ {item.offerTime}</div>
                                <div className={cx('limited-price')}>{item.offerPrice}</div>
                            </div> :
                            <div className={cx('price-wrapper')}>{item.price}</div>
                        }
                        <div className={cx('product-nb-text')}>SỐ LƯỢNG</div>
                        <div className={cx('product-footer-wrapper')}>
                            <div className={cx('product-nb')}>
                                <span className={cx('product-nb-value')} ref={(element) => countRef.current[refId] = element}>{item.buyCount ? item.buyCount : 1}</span>
                                <div className={cx('chevron_updown')} ref={(element) => updownRef.current[refId] = element} onClick={handleUpdown}></div>
                                <div className={cx('product-nb-popper')} ref={(element) => popperRef.current[refId] = element}>
                                    {[...Array(parseInt(item.quantity))].map((x, i) => (
                                        <div className={cx('product-nb-popper-value')} onClick={() => handleChose(i+1)} key={i}>{i+1}</div>
                                    ))}
                                </div>
                            </div>
                            <div className={cx('product-total-wrapper')}>
                                <span className={cx('product-total-text')}>TỔNG: </span>
                                {item.offerPrice ?
                                    <span ref={(element) => totalRef.current[refId] = element} className={cx('product-total-value')} style={{color: 'rgb(255, 0, 0)'}}>{((item.buyCount ? item.buyCount : 1)*parseInt((item.offerPrice.replace(/\./g,'')).replace(' VND', ''))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"}</span> :
                                    <span ref={(element) => totalRef.current[refId] = element} className={cx('product-total-value')}>{((item.buyCount ? item.buyCount : 1)*parseInt((item.price.replace(/\./g,'')).replace(' VND', ''))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"}</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={cx('remove-product')} onClick={handleRemove}></div>
                </div>
            </div>
        </Fragment>
    )
}

export default CartItem;