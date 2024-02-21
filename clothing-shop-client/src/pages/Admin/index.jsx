import classNames from 'classnames/bind'
import styles from './Admin.module.scss'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Logo } from '../../components/SvgIcon';
import { Fragment, useEffect, useRef } from 'react';

import {CalendarIcon, ClothesIcon, LocationIcon, RevenueIcon, UserIcon} from './icon/sideBarIcon'
import Revenue from './components/revenue/index,';
import Product from './components/Product';
import Customer from './components/Customer';
const cx = classNames.bind(styles)


function Admin() {
    const navigate = useNavigate()

    useEffect(() => {
        document.title = 'ADMIN | UNIQLO'
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()
    
    useEffect(() => {
        if (!searchParams.get('q')) {
            searchParams.set("q", sideBarItems[0].title);
            searchParams.set("filter", sideBarItems[0].popperItem[0]);
            setSearchParams(searchParams);
            popperRef.current[0].style.display = 'block'
            sideBarTitleRef.current[0].classList.add(cx('bold-text'))
            chevronRef.current[0].classList.add(cx('chevron_updown-rotateUp'))
            prevPopperItemIndex.current = 0
            popperItemRef.current[0].classList.add(cx('bold-text'))
        }

    }, []);

    const chevronRef = useRef([])
    const popperRef = useRef([])
    const sideBarTitleRef = useRef([])
    const popperItemRef = useRef([])
    const prevPopperItemIndex = useRef(-1)
    const adminPopperRef = useRef()
    const handleChevronClick = (index) => {
        if (chevronRef.current[index].classList.contains(cx('chevron_updown-rotateDown'))) {
            chevronRef.current[index].classList.remove(cx('chevron_updown-rotateDown'))
            chevronRef.current[index].classList.add(cx('chevron_updown-rotateUp'))
            popperRef.current[index].style.display = 'block'
            sideBarTitleRef.current[index].classList.add(cx('bold-text'))
            return
        }
        if (chevronRef.current[index].classList.contains(cx('chevron_updown-rotateUp'))) {
            chevronRef.current[index].classList.remove(cx('chevron_updown-rotateUp'))
            chevronRef.current[index].classList.add(cx('chevron_updown-rotateDown'))
            popperRef.current[index].style.display = 'none'
            sideBarTitleRef.current[index].classList.remove(cx('bold-text'))
            return
        }
        popperRef.current[index].style.display = 'block'
        sideBarTitleRef.current[index].classList.add(cx('bold-text'))
        chevronRef.current[index].classList.add(cx('chevron_updown-rotateUp'))
    }

    const handlePopperItem = (i, id, arrayId) => {
        if (prevPopperItemIndex.current != -1) {
            popperItemRef.current[prevPopperItemIndex.current].classList.remove(cx('bold-text'))
        }
        prevPopperItemIndex.current = id
        popperItemRef.current[id].classList.add(cx('bold-text'))

        const sideBarTitle = document.getElementsByClassName(cx('side-bar-item-heading'))
        let index = 0
        Array.prototype.forEach.call(sideBarTitle, function(el) {
            if (el.classList.contains(cx('bold-text'))) {
                el.classList.remove(cx('bold-text'))
                if (i != index) {
                    chevronRef.current[index].classList.remove(cx('chevron_updown-rotateUp'))
                    chevronRef.current[index].classList.add(cx('chevron_updown-rotateDown'))
                }
            }
            index++
        });

        const Popper = document.getElementsByClassName(cx('side-bar-item-popper'))
        index = 0
        Array.prototype.forEach.call(Popper, function(el) {
            if (i != index) {
                if (el.style.display == 'block') {
                    el.style.display = 'none'
                }
            }
            index++
        });
        sideBarTitleRef.current[i].classList.add(cx('bold-text'))

        searchParams.set("q", sideBarItems[i].title);
        searchParams.set("filter", sideBarItems[i].popperItem[arrayId]);
        setSearchParams(searchParams);
    }

    const handleAdminClick = () => {
        if (adminPopperRef.current.style.display == 'block')
            adminPopperRef.current.style.display = 'none'
        else
            adminPopperRef.current.style.display = 'block'
    }

    const handleAdminPopper = () => {
        // navigate('/')
    }

    const sideBarItems = [
        {
            title: 'Doanh Thu',
            icon: RevenueIcon,
            popperItem: [
                'Theo Ngày',
                'Theo Tháng',
                'Theo Năm',
            ],
            popperItemIndex: [
                0,
                1,
                2,
            ],
        },
        {
            title: 'Sản Phẩm',
            icon: ClothesIcon,
            popperItem: [
                'Nam',
                'Nữ',
                'Trẻ Em',
                'Trẻ Sơ Sinh',
            ],
            popperItemIndex: [
                3,
                4,
                5,
                6,
            ],
        },
        {
            title: 'Khách Hàng',
            icon: UserIcon,
            popperItem: [
                'Nam',
                'Nữ',
            ],
            popperItemIndex: [
                7,
                8,
                9,
            ],
        },
        {
            title: 'Lịch',
            icon: CalendarIcon,
            popperItem: [
                'Sự Kiện',
            ],
            popperItemIndex: [
                10,
            ],
        },
        {
            title: 'Hệ Thống Cửa Hàng',
            icon: LocationIcon,
            popperItem: [
                'Hà Nội',
                'Hải Phòng',
                'Đà Nẵng',
                'TP. Hồ Chí Minh',
            ],
            popperItemIndex: [
                11,
                12,
                13,
            ],
        },
    ]

    let ContentComp = Revenue
    let q = searchParams.get('q')
    let filter = searchParams.get('filter')
    switch (q) {
        case 'Doanh Thu':
            ContentComp = Revenue   
            break;
        case 'Sản Phẩm':
            ContentComp = Product
            break;
        case 'Khách Hàng':
            ContentComp = Customer
            break;
        default:
            break;
    }


    return ( 
        <Fragment>
                <div className={cx('header', 'space-between')} style={{alignItems: 'flex-end'}}>
                    <div className={cx('header-right')}>
                        <div className={cx('header-search')}>
                            <input type="text" className={cx('header-search-input')} placeholder='Search'/>
                            <div className={cx('search-icon-wrapper')}>
                                <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill='#999' d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                            </div>
                        </div>
                        <div className={cx('header-update')}>Cập Nhật</div>
                        <div className={cx('header-admin', 'no-select')} onClick={() => handleAdminClick()}>
                            <div className={cx('admin-popper')} ref={adminPopperRef} onClick={() => handleAdminPopper()}>Đăng Xuất</div>
                        </div>
                    </div>
                </div>
                <div className={cx('side-bar', 'no-select')}>
                    <div className={cx('logo-wrapper', 'center')}>
                        <div style={{display: 'flex'}}>
                            <Logo />
                        </div>
                    </div>
                    <div className={cx('side-bar-content')}>
                        {sideBarItems.map((x, i) => {
                            return (
                                <div className={cx('side-bar-item-wrapper')} key={i}>
                                    <div className={cx('space-between', 'side-bar-item-header')} onClick={() => handleChevronClick(i)}>
                                        <div className={cx('flex')}>
                                            <div className={cx('side-bar-item-logo')}>
                                                <x.icon />
                                            </div>
                                            <div className={cx('side-bar-item-heading')}
                                                ref={el => sideBarTitleRef.current[i] = el}
                                            >
                                                {x.title}
                                            </div>
                                        </div>
                                        <div className={cx('chevron_updown')} ref={el => chevronRef.current[i] = el}/>
                                    </div>

                                    <div className={cx('side-bar-item-popper')} ref={el => popperRef.current[i] = el}>
                                        {x.popperItem.map((y, id) => {
                                            return (
                                                <div className={cx('popper-item')} key={id}
                                                    ref={el => popperItemRef.current[x.popperItemIndex[id]] = el}
                                                    onClick={() => handlePopperItem(i, x.popperItemIndex[id], id)}
                                                >
                                                    {y}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className={cx('content-component-wrapper')}>
                    <ContentComp query={q} filter={filter}/>
                </div>
        </Fragment>

    )
}

export default Admin;