import { Fragment, useState, useRef } from "react";

import newYearImg from '../../assets/img/homePageImg/newYear.jpg'
import newYearVoucher from '../../assets/img/homePageImg/newYearVoucher.jpg'
import newIn from '../../assets/img/homePageImg/newIn.jpg'

import app from '../../assets/img/homePageImg/utilSlide/app.jpg'
import click from '../../assets/img/homePageImg/utilSlide/click.jpg'
import qr from '../../assets/img/homePageImg/utilSlide/qr.jpg'
import size from '../../assets/img/homePageImg/utilSlide/size.jpg'

import UtilSlide from "../../components/UtilSlide";
import Notification from "../../components/Notification";

import classNames from 'classnames/bind'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

function Home() {
    let id = 0;
    const ref = [useRef(), useRef(), useRef()]
    const slideImg = [
        {
            src: newYearImg,
            ref: ref[0],
            link: 'https://www.uniqlo.com/vn/vi/special-feature/tet'
        },
        {
            src: newYearVoucher,
            ref: ref[1],
            link: 'https://www.uniqlo.com/vn/vi/special-feature/tet'
        },
        {
            src: newIn,
            ref: ref[2],
            link: 'https://www.uniqlo.com/vn/vi/feature/new/women?path=17011&flagCodes=salesStart%20newSKU'
        },
    ]

    const [activeId, setActiveId] = useState(0)

    const handlePrev = () => {
        if (id == 0) {
            ref[id].current.classList.remove(cx('slider-active'))
            ref[slideImg.length - 1].current.classList.add(cx('slider-active'))
            id = slideImg.length - 1
            return
        }
        ref[id].current.classList.remove(cx('slider-active'))
        ref[id-1].current.classList.add(cx('slider-active'))
        id--
    }

    const handleNext = () => {
        if (id == slideImg.length - 1) {
            ref[id].current.classList.remove(cx('slider-active'))
            ref[0].current.classList.add(cx('slider-active'))
            id = 0
            return
        }
        ref[id].current.classList.remove(cx('slider-active'))
        ref[id+1].current.classList.add(cx('slider-active'))
        id++
    }

    const utilSlideBlocks = [
        {
            imgSrc: app,
            title: 'WELCOME COUPON',
            description: 'Tải ứng dụng và đăng ký tài khoản ngay để nhận MÃ GIẢM GIÁ 100.000VND áp dụng cho đơn hàng đầu tiên từ 1.000.000VND.',
            link: 'https://apps.apple.com/vn/app/uniqlo-vn/id1564895546?mt=8'
        },
        {
            imgSrc: click,
            title: 'CLICK & COLLECT (Đặt Online & Nhận xuyên tết tại cửa hàng)',
            description: 'Nhận 01 Mã Giảm Giá 100.000VND* khi sử dụng dịch vụ Click & Collect. *Áp dụng cho đơn hàng online tiếp theo từ 1.000.000VND.',
            link: 'https://www.uniqlo.com/vn/vi/spl/shopping-made-ec/click-&-collect'
        },
        {
            imgSrc: qr,
            title: 'QUÉT MÃ VẠCH SẢN PHẨM',
            description: 'Quét mã vạch trên sản phẩm để dễ dàng kiểm tra xem sản phẩm còn hàng online hay trong cửa hàng.',
            link: 'https://www.uniqlo.com/vn/vi/special-feature/app'
        },
        {
            imgSrc: size,
            title: 'EXTRA SIZE',
            description: 'Thêm các lựa chọn kích cỡ phù hợp nhất với bạn, từ XS đến XXL, chỉ có duy nhất tại cửa hàng online.',
            link: 'https://www.uniqlo.com/vn/vi/special-feature/extra-size/women'
        }
    ]
    
    return (
        <Fragment>
            <div className={cx('slider')}>
                <div className={cx('list-img')}>
                    <img src={slideImg[0].src} className={cx('slider-img', 'slider-active')} ref={ref[0]}/>
                    <img src={slideImg[1].src} className={cx('slider-img')} ref={ref[1]}/>
                    <img src={slideImg[2].src} className={cx('slider-img')} ref={ref[2]}/>
                </div>
                <a href={slideImg[activeId].link} className={cx('slider-overlay')} onClick={()=>{setActiveId(id)}}></a>
                <div className={cx('prev-icon')} onClick={handlePrev}></div>
                <div className={cx('next-icon')} onClick={handleNext}></div>
            </div>
            <div className="container">
                <Notification></Notification>
                <UtilSlide title={'TIỆN ÍCH ỨNG DỤNG UNIQLO'} blocks={utilSlideBlocks}>
                </UtilSlide>
                <a href="https://www.uniqlo.com/vn/vi/special-feature/app" className={cx('more')}>XEM THÊM</a>
                <div className={cx('info')}>
                    <div className={cx('info-title')}>THÔNG TIN</div>
                    <div className={cx('info-content')}>
                        <a href="https://www.uniqlo.com/feature/shopping-guide/vn/vi/" className={cx('info-content-text')}>Hướng Dẫn Mua Sắm</a>
                        <a href="https://www.uniqlo.com/vn/vi/spl/shopping-made-ec/bulk-orders" className={cx('info-content-text')}>Đặt Hàng Số Lượng Lớn</a>
                        <a href="https://www.stylehint.com/vn/vi/about_app?shortlink=vl9hb715&c=STYLEHINTLAUNCH_STOREASSET&pid=QR_code&af_xp=qr&source_caller=ui" className={cx('info-content-text')}>Style Hint</a>
                        <a href="https://www.uniqlo.com/vn/vi/special-feature/app" className={cx('info-content-text')}>APP</a>
                        <a href="https://www.uniqlo.com/vn/vi/member/e-news/subscription" className={cx('info-content-text')}>Đăng Ký Bản Tin Điện Tử</a>
                        <a href="https://www.uniqlo.com/vn/vi/information/press-release" className={cx('info-content-text')}>Tin Tức Uniqlo</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;