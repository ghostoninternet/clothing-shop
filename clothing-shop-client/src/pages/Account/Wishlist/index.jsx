import { Fragment, useEffect, useRef, useState } from 'react'
import PathText from '../../../components/PathText'

import classNames from 'classnames/bind'
import styles from './Wishlist.module.scss'
import WishlistItem from './components/WishlistItem'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Wishlist() {
    useEffect(() => {
        document.title = 'YÊU THÍCH | UNIQLO VN'
    }, [])

    const path = [
        {
            text: 'UNIQLO',
            link: '/'
        },
        {
            text: 'YÊU THÍCH',
        },
    ]

    const wishlist = [
        {
            name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
            id: '468879',
            color: '69 NAVY',
            size: 'Nam',
            price: '391.000 VND',
            img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
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
        },
    ]

    const [count, setCount] = useState(wishlist.length)

    const ref = useRef([])
    const modal = useRef()
    
    const handleClick = (refId) => {
        if (ref.current[refId].classList.contains(cx('resetPosition'))) {
            ref.current[refId].classList.remove(cx('resetPosition'))
            setCount(count + 1)
            return
        }

        ref.current[refId].classList.add(cx('resetPosition'))
        setCount(count - 1)
    }

    const handleClose= () => {
        modal.current.style.display = 'none'
    }

    
    return ( 
        <Fragment>
            <PathText path={path}/>
            <div className='container'>
                <div className={cx('wishlist-title')}>YÊU THÍCH</div>
                <div className={cx('wishlist-wrapper')}>
                    <div className={cx('wishlist-text')} style={{marginBottom: '20px'}}>{count} Sản phẩm</div>
                    {!count ? (
                            <Fragment>
                                <div className={cx('wishlist-heading')} style={{marginBottom: '8px'}}>
                                    KHÔNG CÓ SẢN PHẨM NÀO TRONG DANH SÁCH MONG MUỐN CỦA BẠN.
                                </div>
                                <div className={cx('wishlist-text')} style={{marginBottom: '25px'}}>Nhấn vào dấu trái tim để thêm sản phẩm vào danh sách mong muốn của bạn.</div>
                            </Fragment>
                        ) : (
                            <div className="">
                                {wishlist.map((X, index) => {
                                    return (
                                        <WishlistItem nb={wishlist.length} key={index} item={X} innerRef={ref} fnc={() => handleClick(index)} refId={index} />
                                    )
                                })}
                            </div>
                        )
                    }
                </div>
            </div>
            <div className=""></div>
            <div className={cx('modal')} ref={modal}>
                <div className={cx('modal-content')}>
                    <div className={cx('modal-heading')}>
                        <h1 className={cx('modal-heading-text')}>ĐĂNG NHẬP</h1>
                        <div className={cx('modal-close')} onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#000" fillRule="evenodd" d="M19.63 3.54L12 11.17 4.38 3.54 3 4.92l7.63 7.62L3 20.17l1.38 1.37L12 13.92l7.63 7.62L21 20.17l-7.62-7.63L21 4.92l-1.37-1.38z"></path></svg>
                        </div>
                    </div>
                    <p className={cx('modal-text')}>Nếu bạn đăng nhập, bạn cũng có thể thấy các sản phẩm mà bạn đã thêm vào danh sách mong muốn trước đó.</p>
                    <div className={cx('modal-button-frame')}>
                        <Link to={'/login'}>
                            <div className={cx('modal-button-login', 'modal-button')}>ĐĂNG NHẬP</div>
                        </Link>
                        <div className={cx('modal-button-cancel', 'modal-button')} onClick={handleClose}>HỦY</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Wishlist