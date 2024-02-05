import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState } from 'react';


import Language from './Language'
import IconButton from '../../../IconButton'
import { SearchIcon, UserIcon, HeartIcon, CartIcon } from '../../../SvgIcon'

const cx = classNames.bind(styles)

function Header() {
    const headerIcon = [SearchIcon, UserIcon, HeartIcon, CartIcon]
    const headerSegmentation = [
        {
            name: "NỮ",
            path: "/women",
            type: [
                [
                    {
                        title: "Áo",
                        list: ["Tất Cả Áo", "Áo Thun", "Bra Tops", "Áo Sơ Mi & Áo Kiểu",
                                "Áo Thun In Họa Tiết", "Áo Nỉ & Áo Hoodie", "Áo Len",
                                "Áo Cardigan", "PEACE FOR ALL"]
                    },
                    {
                        title: "SPORT UTILITY WEAR",
                        list: ["Sport Utility Wear"]
                    },
                    {
                        title: "ĐỒ BẦU",
                        list: ["Đồ Bầu", "Quần", "Đồ Mặc Trong"]
                    },
                ],
                [
                    {
                        title: "ĐỒ MẶC NGOÀI",
                        list: ["Tất Cả Đồ Mặc Ngoài", "Áo Blouson & Áo Parka", "Áo Khoác & Áo Blazer",
                                "Áo Choàng Dáng Dài", "Áo Khoác Siêu Nhẹ & PUFFTECH"]
                    },
                    {
                        title: "ĐỒ MẶC TRONG & ĐỒ LÓT",
                        list: ["Tất Cả Đồ Mặc Trong & Đồ Lót", "Áo Bra", "Bra Tops",
                                "AIRism Đồ Mặc Trong", "Đồ Lót", "Quần Leggings và Quần Tất",
                                "Tất", "HEATTECH Đồ Mặc Trong & Quần Lót Giữ Nhiệt"]
                    },
                ],
                [
                    {
                        title: "QUẦN",
                        list: ["Tất Cả Quần", "Quần Short", "Quần Jeans",
                                "Quần Easy Pants", "Quần Ống Rộng", "Quần Dài Đến Mắt Cá & Quần Lửng",
                                "Quần Nỉ", "Quần Legging", "Quần Tây"]
                    },
                    {
                        title: "ĐỒ MẶC NHÀ",
                        list: ["Tất Cả Đồ Mặc Nhà", "Quần Easy & Relaxed",
                                "Đồ Mặc Nhà & Pyjama", "Dép Đi Trong Nhà"]
                    },
                ],
                [
                    {
                        title: "ĐẦM & CHÂN VÁY",
                        list: ["Đầm & Jumpsuit", "CHÂN VÁY"]
                    },
                    {
                        title: "PHỤ KIỆN",
                        list: ["Tất Cả Phụ Kiện", "Túi", "Giày & Sandals", "Kính Mát",
                                "Mũ & Mũ Lưỡi Trai", "Thắt Lưng", "Ô",
                                "Khăn Choàng & Khăn Quàng Cổ", "Găng Tay", "Khác"]
                    },
                ],
            ],
            review: [
                {
                    title: "Nổi Bật",
                    list: ["Hàng Mới Về", "Khuyến Mãi Có Hạn", "Giá Mới",
                            "Sắp Ra Mắt", "Tin Tức Nổi Bật", "Áo Thun UT",
                            "STYLING BOOK", "Về LifeWear", "UNIQLO LIVE STATION",
                            "PEACE FOR ALL"],
                },
                {
                    title: "Bộ Sưu Tập Đặc Biệt",
                    list: ["UNIQLO : C", "Uniqlo and Princesse tam tam", "Bộ Sưu Tập Đặc Biệt"],
                },
                {
                    title: "Trình Duyệt",
                    list: ["Tất Cả Đồ Nữ"],
                },
            ]
        },
        {
            name: "NAM",
            path: "/men",
            type: [
                [
                    {
                        title: "Áo",
                        list: ["Tất Cả Áo", "Áo Polo", "Áo Thun", "Áo Thun In Họa Tiết",
                                "Áo Sơ Mi Công Sở", "Áo Sơ Mi Casual", "Áo Nỉ & Hoodie",
                                "Áo Len & Cardigan", "PEACE FOR ALL"]
                    },
                    {
                        title: "SPORT UTILITY WEAR",
                        list: ["Sport Utility Wear"]
                    },
                ],
                [
                    {
                        title: "ĐỒ MẶC NGOÀI",
                        list: ["Tất Cả Đồ Mặc Ngoài", "Áo Blouson & Áo Parka", "Áo Khoác Miracle Air",
                                "Áo Khoác & Áo Blazer", "Áo Choàng Dáng Dài", "Áo Khoác Siêu Nhẹ & PUFFTECH"]
                    },
                    {
                        title: "ĐỒ MẶC TRONG & ĐỒ LÓT",
                        list: ["Tất Cả Đồ Mặc Trong & Đồ Lót", "AIRism Đồ Mặc Trong", "Quần Lót Boxer & Brief",
                                "Tất", "HEATTECH Đồ Mặc Trong & Quần Lót Giữ Nhiệt", "Quần Leggings và Quần Tất"]
                    },
                ],
                [
                    {
                        title: "QUẦN",
                        list: ["Tất Cả Quần", "Quần Short", "Quần Jean & Quần Jean Màu",
                                "Quần Dài Đến Mắt Cá", "Quần Miracle Air", "Quần Casual",
                                "Quần Dài Dáng Rộng", "Quần Chino", "Quần Nỉ", "Quần Tây"]
                    },
                    {
                        title: "ĐỒ MẶC NHÀ",
                        list: ["Tất Cả Đồ Mặc Nhà", "Đồ Mặc Nhà & Pyjama",
                                "Quần Easy & Relaxed", "Dép Đi Trong Nhà"]
                    },
                ],
                [
                    {
                        title: "PHỤ KIỆN",
                        list: ["Tất Cả Phụ Kiện", "Túi", "Kính Mát", "Mũ & Mũ Lưỡi Trai",
                                "Thắt Lưng", "Ô", "Khăn Choàng & Khăn Quàng Cổ",
                                "Găng Tay", "Khác"]
                    },
                ],
            ],
            review: [
                {
                    title: "Nổi Bật",
                    list: ["Hàng Mới Về", "Khuyến Mãi Có Hạn", "Giá Mới",
                            "Sắp Ra Mắt", "Tin Tức Nổi Bật", "Áo Thun UT",
                            "STYLING BOOK", "Về LifeWear", "UNIQLO LIVE STATION",
                            "PEACE FOR ALL"],
                },
                {
                    title: "Bộ Sưu Tập Đặc Biệt",
                    list: ["Bộ Sưu Tập Đặc Biệt"],
                },
                {
                    title: "Trình Duyệt",
                    list: ["Tất Cả Đồ Nam"],
                },
            ]
        },
        {
            name: "TRẺ EM",
            path: "/kid",
            type: [
                [
                    {
                        title: "Áo",
                        list: ["Tất Cả Áo", "Áo Thun In Họa Tiết", "Áo Thun + Áo Polo", "Áo Nỉ & Hoodie",
                                "Áo Sơ Mi & Áo Kiểu", "Áo Len & Áo Cardigan"]
                    },
                    {
                        title: "SPORT UTILITY WEAR",
                        list: ["Sport Utility Wear"]
                    },
                ],
                [
                    {
                        title: "ĐỒ MẶC NGOÀI",
                        list: ["Tất Cả Đồ Mặc Ngoài", "Áo Blouson & Áo Parka", "Áo Khoác"]
                    },
                    {
                        title: "ĐỒ MẶC TRONG & ĐỒ LÓT",
                        list: ["Tất Cả Đồ Mặc Trong & Đồ Lót", "AIRism Đồ Mặc Trong", "Đồ Lót",
                                "Áo Bra và Bra Tops", "Tất", "HEATTECH Đồ Mặc Trong & Quần Lót Giữ Nhiệt",]
                    },
                ],
                [
                    {
                        title: "QUẦN",
                        list: ["Tất Cả Quần", "Quần Short", "Quần Dài"]
                    },
                    {
                        title: "ĐỒ MẶC NHÀ",
                        list: ["Đồ Mặc Nhà & Pyjama"]
                    },
                ],
                [
                    {
                        title: "ĐẦM & CHÂN VÁY",
                        list: ["Đầm", "Chân Váy"]
                    },
                    {
                        title: "PHỤ KIỆN",
                        list: ["Tất Cả Phụ Kiện"]
                    },
                ],
            ],
            review: [
                {
                    title: "Nổi Bật",
                    list: ["Hàng Mới Về", "Khuyến Mãi Có Hạn", "Giá Mới",
                            "Sắp Ra Mắt", "Tin Tức Nổi Bật", "Áo Thun UT",
                            "STYLING BOOK", "Về LifeWear", "UNIQLO LIVE STATION",
                            "PEACE FOR ALL"],
                },
                {
                    title: "Bộ Sưu Tập Đặc Biệt",
                    list: ["Bộ Sưu Tập Đặc Biệt"],
                },
                {
                    title: "Trình Duyệt",
                    list: ["Tất Cả Đồ Trẻ Em"],
                },
            ]
        },
        {
            name: "TRẺ SƠ SINH",
            path: "/baby",
            type: [
                [
                    {
                        title: "TRẺ SƠ SINH (0-1 NĂM)",
                        list: ["Tất Cả Đồ Trẻ Sơ Sinh", "Đồ Liền Mảnh", "Bodysuit",
                                "Áo Thun In Họa Tiết", "Tất"]
                    },
                ],
                [
                    {
                        title: "TRẺ NHỎ (6 THÁNG - 5 NĂM)",
                        list: ["All Toddlers", "Đồ Mặc Nhà & Pyjama", "Quần Dài & Quần Legging",
                                "Áo", "Áo Thun In Họa Tiết", "Đồ Mặc Ngoài", "Tất", "Phụ Kiện"]
                    },
                ]
            ],
            review: [
                {
                    title: "Nổi Bật",
                    list: ["Hàng Mới Về", "Khuyến Mãi Có Hạn", "Giá Mới",
                            "Sắp Ra Mắt", "Tin Tức Nổi Bật", "Áo Thun UT",
                            "STYLING BOOK", "Về LifeWear", "UNIQLO LIVE STATION",
                            "PEACE FOR ALL"],
                },
                {
                    title: "Bộ Sưu Tập Đặc Biệt",
                    list: ["Bộ Sưu Tập Đặc Biệt"],
                },
                {
                    title: "Trình Duyệt",
                    list: ["Tất Cả Đồ Trẻ Sơ Sinh"],
                },
            ]
        },
    ]

    const [current, setCurrent] = useState(0);
    
    
    return (
        <header className={cx('header')}>
           <div className={cx('header-help-wrapper')}>
                <div className='container'>
                    <div className={cx('header-help')}>
                            <ul className={cx('header-help-list')}>
                                <li className={cx('header-help-items')}>
                                    <Link to='/' className={cx('header-help-items-link')}>Trợ giúp</Link>
                                </li>
                                <li className={cx('header-help-items')}>
                                    <Link to='/' className={cx('header-help-items-link')}>Hệ thống cửa hàng</Link>
                                </li>
                                <li className={cx('header-help-items')}>
                                    <Language></Language>
                                </li>
                            </ul>
                        </div>
                </div>
           </div>

           <div className={cx('header-menu-wrapper')}>
                <div className='container'>
                    <div className={cx('header-left')}>
                        <div className={cx('header-logo')}>
                            <Link to='/' className={cx('header-logo-link')}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 40" width="90" height="40" role="img" aria-label="ユニクロ｜UNIQLO">
                                    <title>ユニクロ｜UNIQLO</title>
                                    <path fill="red" d="M50 0h40v40H50zM0 0h40v40H0z">
                                    </path>
                                    <g fill="#fff">
                                        <path d="M79.48 5.47h2.53v12.64h-2.53zM63.47 13.9a4.21 4.21 0 0 1-8.42 0V5.47h2.53v8.43a1.68 1.68 0 1 0 3.36 0V5.47h2.53zM75.26 34.53h-8.42V21.89h2.53V32h5.89v2.53zM75.26 18.11h-2.53l-3.36-7.22v7.22h-2.53V5.47h2.53l3.36 7.22V5.47h2.53v12.64zM59.26 21.89a4.21 4.21 0 0 0-4.21 4.22v4.21a4.21 4.21 0 0 0 4.21 4.21 4.34 4.34 0 0 0 .82-.07l.86 2.6h2.53l-1.25-3.75a4.2 4.2 0 0 0 1.25-3v-4.2a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 1 1-3.36 0v-4.21a1.68 1.68 0 1 1 3.36 0zM80.74 21.89a4.22 4.22 0 0 0-4.22 4.22v4.21a4.21 4.21 0 0 0 8.42 0v-4.21a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 0 1-3.37 0v-4.21a1.68 1.68 0 0 1 3.37 0z">
                                        </path>
                                        <g>
                                            <path d="M22.74 15.16H34.1v2.52H22.74zM24 5.47h8.84V8H24zM14.74 5.47H7.15V8h5.06v7.16H5.9v2.52h11.36v-2.52h-2.52V5.47zM22.74 22.31v12.22H34.1V22.31zM31.57 32h-6.31v-7.16h6.31zM7.15 22.31l-1.28 6.12h2.52l.76-3.59h5.07L12.73 32H5.14l-.51 2.53h10.11l2.52-12.22H7.15z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        <div className={cx('header-segmentation')}>
                            <ul className={cx('header-segmentation-list')}>
                                {headerSegmentation.map((X, index) => (
                                    <li className={cx('header-segmentation-item')} key={index}
                                        onMouseMove={() => setCurrent(index)}>
                                        <Link to={X.path} className={cx('header-segmentation-link')}>
                                            <span className={cx('header-segmentation-text')}>{X.name}</span>
                                        </Link>
                                    </li>
                                ))}
                                <div className={cx('header-popper')}>
                                    <div className='container'>
                                        <div className={cx('popper-wrapper')}>
                                            <div className={cx('popper-left')}>
                                                {headerSegmentation[current].type.map((X, index) => (
                                                    <div className={cx('popper-left-block')} key={index}>
                                                        <div className={cx('segmentation-title')}>
                                                            {X.map((Y, indexY) => (
                                                                <div className={cx('left-type')} key={indexY}>
                                                                    <div className={cx('segmentation-title')}>{Y.title}</div>
                                                                    {Y.list.map((Z, indexZ) => (
                                                                        <Link className={cx('popper-text-content')} key={indexZ}>
                                                                            {Z}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                                    
                                            </div>
                                            <div className={cx('separator')}></div>
                                            <div className={cx('popper-right')}>
                                                {headerSegmentation[current].review.map((X, index) => (
                                                    <div className={cx('popper-right-block')} key={index}>
                                                        <div className={cx('segmentation-title')}>{X.title}</div>
                                                        <div className={cx('popper-right-content')}>
                                                        {X.list.map((Y, indexY) => (
                                                            <Link className={cx('popper-text-content')} key={indexY}>
                                                                {Y}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        
                    </div>
                    <div className={cx('header-right')}>
                        <div className={cx('header-btns')}>
                            <ul className={cx('header-btns-list')}>
                                {headerIcon.map((X, index) => (
                                    <li className={cx('header-btns-item')} key={index}>
                                        <IconButton>
                                            <X/>
                                        </IconButton>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
           </div>
        </header>
    )
}

export default Header;