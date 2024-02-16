import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import { Fragment, useEffect, useRef, useState } from 'react';
import CartItem from '../../components/CartItem';
import PathText from '../../components/PathText';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)

function Cart() {
    useEffect(() => {
        document.title = 'GIỎ HÀNG | UNIQLO VN';
    }, []);

    const path = [
        {
            text: 'UNIQLO',
            link: '/'
        },
        {
            text: 'GIỎ HÀNG',
        },
    ]

    const cartlistFetch = [
        {
            name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
            id: '468879',
            color: '69 NAVY',
            size: 'Nam',
            price: '391.000 VND',
            img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
            quantity: '7',
        },
        {
            name: 'Áo Sơ Mi Oxford Kẻ Sọc Dáng Ôm Dài Tay',
            id: '467444',
            color: '72 PURPLE',
            size: 'Nam',
            price: '588.000 VND',
            offerPrice: '489.000 VND',
            offerTime: '09 Feb 2024 - 15 Feb 2024',
            img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/465185/item/vngoods_52_465185.jpg?width=250',
            quantity: '3',
        },
        {
            name: 'AIRism Cotton Áo Thun Dáng Rộng Tay Lỡ',
            id: '465185',
            color: '52 GREEN',
            size: 'Nam',
            price: '391.000 VND',
            offerPrice: '293.000 VND',
            offerTime: '09 Feb 2024 - 15 Feb 2024',
            img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/462369/item/vngoods_72_462369.jpg?width=250',
            quantity: '3',
        },
    ]

    let prevCompCount
    let prevTotal

    const [cartlist, setCartlist] = useState(cartlistFetch)
    const [productCount, setProductCount] = useState(cartlistFetch.length)
    const [total, setTotal] = useState(() => {
        let s = 0
        cartlistFetch.map((x) => {
            if (x.offerPrice)
                s += parseInt((x.offerPrice.replace('.','')).replace(' VND', ''))
            else
                s += parseInt((x.price.replace('.','')).replace(' VND', ''))
        })
        return s
    })

    const popperRef = useRef([])
    const updownRef = useRef([])
    const countRef = useRef([])
    const totalRef = useRef([])
    const handleUpdown = (index) => {
        if (updownRef.current[index].classList.contains(cx('chevron_updown-rotateDown'))) {
            updownRef.current[index].classList.remove(cx('chevron_updown-rotateDown'))
            updownRef.current[index].classList.add(cx('chevron_updown-rotateUp'))
            popperRef.current[index].style.display = 'block'
            return
        }
        if (updownRef.current[index].classList.contains(cx('chevron_updown-rotateUp'))) {
            updownRef.current[index].classList.remove(cx('chevron_updown-rotateUp'))
            updownRef.current[index].classList.add(cx('chevron_updown-rotateDown'))
            popperRef.current[index].style.display = 'none'
            return
        }
        updownRef.current[index].classList.add(cx('chevron_updown-rotateUp'))
        popperRef.current[index].style.display = 'block'
    }
    const handleChoseQuantity = (index) => {
        updownRef.current[index].classList.remove(cx('chevron_updown-rotateUp'))
        updownRef.current[index].classList.add(cx('chevron_updown-rotateDown'))
        popperRef.current[index].style.display = 'none'
        prevCompCount = countRef.current[index].textContent
        prevTotal = parseInt((totalRef.current[index].textContent.replace(' VND', '')).replace(/\./g,''))
    }
    const handleRemove = (index) => {
        let removeTotal = parseInt((totalRef.current[index].textContent.replace(' VND', '')).replace(/\./g,''))
        setTotal(total - removeTotal)

        let removeCompCount = countRef.current[index].textContent
        setProductCount(productCount - removeCompCount)

        const newCartlist = [...cartlist]
        newCartlist.splice(index, 1)
        setCartlist(newCartlist)
    }
    const handleCalProductCount = (value) => {
        setProductCount(productCount + value - prevCompCount)
    }
    const handleCalTotal = (value) => {
        setTotal(total + value - prevTotal)
    }

    return (
        <Fragment>
            <PathText path={path}/>
            <div className="container" style={{marginBottom: '143px'}}>
                <div className={cx('cart-title')}>GIỎ HÀNG</div>
                {!cartlist.length ?
                    <div>
                        <p className={cx('no-product-text')}>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
                        <div className={cx('pay-button-link')} style={{marginTop: '40px', marginBottom: '28px', width: '288px'}}>
                            <Link to={'/'}>
                                <div className={cx('next-button', 'no-product-next-button')}>TIẾP TỤC MUA SẮM</div>
                            </Link>
                        </div>
                    </div> :
                    <div className={cx('main-wrapper')}>
                        <div className={cx('left-container')}>
                        {cartlist.map((X, index) => {
                            return (
                                <CartItem item={X} updownRef={updownRef} popperRef={popperRef} countRef={countRef} totalRef={totalRef} refId={index} key={index} 
                                    handleUpdown={() => handleUpdown(index)}
                                    handleChoseQuantity={() => handleChoseQuantity(index)}
                                    handleRemove={() => handleRemove(index)}
                                    handleCalProductCount={handleCalProductCount}
                                    handleCalTotal={handleCalTotal}
                                />
                            )
                        })}
                        </div>
                        <div className={cx('right-container')}>
                            <div className={cx('total-wrapper')}>
                                <h2 className={cx('total-title')}>TỔNG ĐƠN HÀNG| {productCount} SẢN PHẨM</h2>
                                <div className={cx('space-between')} style={{marginBottom: '28px'}}>
                                    <p className={cx('total-text')}>Tổng cộng</p>
                                    <p className={cx('total-text')}>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"}</p>
                                </div>
                                <div className={cx('space-between')} style={{marginBottom: '9.6px'}}>
                                    <p className={cx('total-text-huge')}>TỔNG</p>
                                    <p className={cx('total-text-huge')}>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"}</p>
                                </div>
                                <div className={cx('space-between')} style={{marginBottom: '28px'}}>
                                    <p className={cx('total-text')}>Thuế giá trị gia tăng</p>
                                    <p className={cx('total-text')}>{(total*8/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"}</p>
                                </div>
                                <div className={cx('space-between')} style={{alignItems: 'end'}}>
                                    <p className={cx('total-text-huge')} style={{width: '200px',paddingRight: '15px'}}>TỔNG ĐƠN ĐẶT HÀNG</p>
                                    <p className={cx('total-text-huge')} style={{fontSize: '16px'}}>{(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND"}</p>
                                </div>
                            </div>
                            <div className={cx('coupons')}>
                                <div style={{display: 'flex'}}>
                                    <div className={cx('coupons-icon')}></div>
                                    <div className={cx('coupons-text')}>Phiếu giảm giá</div>
                                </div>
                                <div className={cx('next-arrow')}></div>
                            </div>
                            <div className={cx('gift-wrapper')}>
                                <div style={{display: 'flex'}}>
                                    <div className={cx('gift-icon')}></div>
                                    <div className={cx('coupons-text')}>Tùy chọn quà tặng</div>
                                </div>
                                <div className={cx('next-arrow')}></div>
                            </div>
                            <div className={cx('pay-wrapper')}>
                                <div style={{display: 'flex', alignItems: 'center', marginBottom: '28px'}}>
                                    <div className={cx('pay-text-wrapper')}>
                                        <span>Nhận hàng online xuyên Tết tại Cửa hàng UNIQLO cùng Click & Collect. Từ 19.01- 15.02.2024, với bất kỳ đơn hàng sử dụng dịch vụ Click & Collect (Đặt Online và Nhận hàng tại các cửa hàng) chọn nhận hàng tại tất cả cửa hàng UNIQLO trên toàn quốc, tặng mã giảm giá 100.000VND cho đơn hàng tiếp theo tại website/ứng dụng từ 1.000.000VND. Miễn phí giao hàng áp dụng cho đơn hàng giao tận nơi từ 999.000VND và tất cả các đơn nhận tại cửa hàng (Click & Collect).</span>
                                    </div>
                                    <div className={cx('pay-note-icon')}></div>
                                </div>
                                <div className={cx('pay-button-wrapper')}>
                                    <a className={cx('pay-button-link')} href="">
                                        <div className={cx('pay-button')}>THANH TOÁN</div>
                                    </a>
                                    <div className={cx('pay-button-link')} style={{marginTop: '16px'}}>
                                        <Link to={'/'}>
                                            <div className={cx('next-button')}>TIẾP TỤC MUA SẮM</div>
                                        </Link>
                                    </div>
                                    <div className={cx('pay-note')}>
                                        {(total >= 999000) ?
                                            <div className={cx('pay-note-text')}>Đủ điều kiện áp dụng miễn phí vận chuyển.</div> :
                                            <div className={cx('pay-note-text')}>Đặt mua thêm {(999000-total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} (bao gồm VAT), hoặc chọn hình thức Click & Collect, để được miễn phí giao hàng.</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Fragment>
    )
}

export default Cart;