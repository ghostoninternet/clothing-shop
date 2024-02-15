import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import { Fragment, useEffect, useRef, useState } from 'react';
import CartItem from '../../components/CartItem';
import PathText from '../../components/PathText';
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

    const [cartlist, setCartlist] = useState(cartlistFetch)
    const [productCount, setProductCount] = useState(cartlistFetch.length)
    const [total, setTotal] = useState(() => {
        let s = 0
        cartlistFetch.map((x, i) => {
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
    }
    const handleRemove = (index) => {
        const newCartlist = [...cartlist]
        newCartlist.splice(index, 1)
        setCartlist(newCartlist)
        
    }
    const handleCalProductCount = (value) => {
        setProductCount(productCount + value - prevCompCount)
    }
    return (
        <Fragment>
            <PathText path={path}/>
            <div className="container" style={{marginBottom: '143px'}}>
                <div className={cx('cart-title')}>GIỎ HÀNG</div>
                <div className={cx('main-wrapper')}>
                    <div className={cx('left-container')}>
                    {cartlist.map((X, index) => {
                        return (
                            <CartItem item={X} updownRef={updownRef} popperRef={popperRef} countRef={countRef} refId={index} key={index} 
                                handleUpdown={() => handleUpdown(index)}
                                handleChoseQuantity={() => handleChoseQuantity(index)}
                                handleRemove={() => handleRemove(index)}
                                handleCalProductCount={handleCalProductCount}
                            />
                        )
                    })}
                    </div>
                    <div className={cx('right-container')}>
                        <div className={cx('total-wrapper')}>
                            <h2 className={cx('total-title')}>TỔNG ĐƠN HÀNG| {productCount} SẢN PHẨM</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;