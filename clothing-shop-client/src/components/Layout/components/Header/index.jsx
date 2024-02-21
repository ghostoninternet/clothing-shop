import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react';


import Language from './Language'
import IconButton from '../../../IconButton'
import { SearchIcon, UserIcon, HeartIcon, CartIcon } from '../../../SvgIcon'
import { Logo } from '../../../SvgIcon'

const cx = classNames.bind(styles)

function Header() {
    const headerIcon = [
        {
            icon: SearchIcon,
        },
        {
            icon: UserIcon,
            link: '/login'
        },
        {
            icon: HeartIcon,
            link: '/wishlist'
        },
        {
            icon: CartIcon,
            link: '/cart'
        },
    ]
    const headerSegmentation = [
        {
            name: "NỮ",
            path: "/women",
            type: [
                [
                    {
                        title: "Áo",
                        list: [
                            ["Tất Cả Áo", "/women/tops/tops-collections"], 
                            ["Áo Thun", "/women/tops/t-shirts"],
                            ["Bra Tops", "/women/tops/bra-tops"], 
                            ["Áo Sơ Mi & Áo Kiểu", "/women/tops/sweatshirts-and-hoodies"],
                            ["Áo Thun In Họa Tiết", "/women/tops/ut-graphic-tees"],
                            ["Áo Nỉ & Áo Hoodie", "/women/tops/sweatshirts-and-hoodies"],
                            ["Áo Len", "/women/tops/sweaters"],
                            ["Áo Cardigan", "/women/tops/cardigans"],
                            ["PEACE FOR ALL", "/women/tops/peace-for-all"]
                        ]
                    },
                    {
                        title: "SPORT UTILITY WEAR",
                        list: [["Sport Utility Wear", "/women/sport-utility-wear/sport-utility-wear"]]
                    },
                    {
                        title: "ĐỒ BẦU",
                        list: [
                            ["Đồ Bầu", "/women/maternity/maternity"],
                            ["Quần", "/women/maternity/pants"],
                            ["Đồ Mặc Trong", "/women/maternity/innerwear"]
                        ]
                    },
                ],
                [
                    {
                        title: "ĐỒ MẶC NGOÀI",
                        list: [
                            ["Tất Cả Đồ Mặc Ngoài", "/women/outerwear/outerwear-collections"],
                            ["Áo Blouson & Áo Parka", "/women/outerwear/blouson"],
                            ["Áo Khoác & Áo Blazer", "/women/outerwear/jackets"],
                            ["Áo Choàng Dáng Dài", "/women/outerwear/coats"],
                            ["Áo Khoác Siêu Nhẹ & PUFFTECH", "/women/outerwear/ultra-light-down"]
                        ]
                    },
                    {
                        title: "ĐỒ MẶC TRONG & ĐỒ LÓT",
                        list: [
                            ["Tất Cả Đồ Mặc Trong & Đồ Lót", "/women/innerwear/innerwear-collections"],
                            ["Áo Bra", "/women/innerwear/bra"],
                            ["Bra Tops", "/women/innerwear/bratop"],
                            ["AIRism Đồ Mặc Trong", "/women/innerwear/airism"],
                            ["Đồ Lót", "/women/innerwear/underwear"],
                            ["Quần Leggings và Quần Tất", "/women/innerwear/leggings-and-tights"],
                            ["Tất", "/women/innerwear/socks"],
                            ["HEATTECH Đồ Mặc Trong & Quần Lót Giữ Nhiệt", "/women/innerwear/heattech"]
                        ]
                    },
                ],
                [
                    {
                        title: "QUẦN",
                        list: [
                            ["Tất Cả Quần", "/women/bottoms/bottoms-collections"],
                            ["Quần Short", "/women/bottoms/shorts"],
                            ["Quần Jeans", "/women/bottoms/jeans"],
                            ["Quần Easy Pants", "/women/bottoms/casual-pants"],
                            ["Quần Ống Rộng", "/women/bottoms/wide-pants"],
                            ["Quần Dài Đến Mắt Cá & Quần Lửng", "/women/bottoms/ankle-pants-and-cropped-pants"],
                            ["Quần Nỉ", "/women/bottoms/sweat-pants"], 
                            ["Quần Legging", "/women/bottoms/leggings-pants"], 
                            ["Quần Tây", "/women/bottoms/trousers"]
                        ]
                    },
                    {
                        title: "ĐỒ MẶC NHÀ",
                        list: [
                            ["Tất Cả Đồ Mặc Nhà", "/women/loungewear-and-homewear/loungewear-collections"],
                            ["Quần Easy & Relaxed", "/women/loungewear-and-homewear/easy-and-relaxed-pants"],
                            ["Đồ Mặc Nhà & Pyjama", "/women/loungewear-and-homewear/loungewear"],
                            ["Dép Đi Trong Nhà", "/women/loungewear-and-homewear/room-shoes"]
                        ]
                    },
                ],
                [
                    {
                        title: "ĐẦM & CHÂN VÁY",
                        list: [
                            ["Đầm & Jumpsuit", "/women/dresses-and-jumpsuits/dresses-and-jumpsuits"],
                            ["CHÂN VÁY", "/women/dresses-and-jumpsuits/skirts"]
                        ]
                    },
                    {
                        title: "PHỤ KIỆN",
                        list: [
                            ["Tất Cả Phụ Kiện", "/women/accessories/accessories-collections"],
                            ["Túi", "/women/accessories/bags"],
                            ["Giày & Sandals", "/women/accessories/shoes-and-boots"],
                            ["Kính Mát", "/women/accessories/fashion-glasses"],
                            ["Mũ & Mũ Lưỡi Trai", "/women/accessories/hats"],
                            ["Thắt Lưng", "/women/accessories/belts"],
                            ["Ô", "/women/accessories/umbrellas"],
                            ["Khăn Choàng & Khăn Quàng Cổ", "/women/accessories/scarves"],
                            ["Găng Tay", "/women/accessories/gloves"],
                            ["Khác", "/women/accessories/others"]
                        ]
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
                        list: [
                            ["Tất Cả Áo", "/men/tops/tops-collections"],
                            ["Áo Polo", "/men/tops/polo-shirts"],
                            ["Áo Thun", "/men/tops/t-shirts"],
                            ["Áo Thun In Họa Tiết", "/men/tops/ut-graphic-tees"],
                            ["Áo Sơ Mi Công Sở", "/men/tops/dress-shirts"],
                            ["Áo Sơ Mi Casual", "/men/tops/casual-shirts"],
                            ["Áo Nỉ & Hoodie", "/men/tops/sweatshirts-and-hoodies"],
                            ["Áo Len & Cardigan", "/men/tops/sweaters"],
                            ["PEACE FOR ALL", "/men/tops/peace-for-all"]
                        ]
                    },
                    {
                        title: "SPORT UTILITY WEAR",
                        list: [["Sport Utility Wear", "/men/sport-utility-wear/sport-utility-wear"]]
                    },
                ],
                [
                    {
                        title: "ĐỒ MẶC NGOÀI",
                        list: [
                            ["Tất Cả Đồ Mặc Ngoài", "/men/outerwear/outerwear-collections"],
                            ["Áo Blouson & Áo Parka", "/men/outerwear/blouson-and-parkas"],
                            ["Áo Khoác Miracle Air", "/men/outerwear/airsense-jackets"],
                            ["Áo Khoác & Áo Blazer", "/men/outerwear/jackets"],
                            ["Áo Choàng Dáng Dài", "/men/outerwear/coats"],
                            ["Áo Khoác Siêu Nhẹ & PUFFTECH", "/men/outerwear/ultra-light-down"]
                        ]
                    },
                    {
                        title: "ĐỒ MẶC TRONG & ĐỒ LÓT",
                        list: [
                            ["Tất Cả Đồ Mặc Trong & Đồ Lót", "/men/innerwear/innerwear-collections"],
                            ["AIRism Đồ Mặc Trong", "/men/innerwear/airism"], 
                            ["Quần Lót Boxer & Brief", "/men/innerwear/underwear"],
                            ["Tất", "/men/innerwear/socks"], 
                            ["HEATTECH Đồ Mặc Trong & Quần Lót Giữ Nhiệt", "/men/innerwear/heattech"], 
                            ["Quần Leggings và Quần Tất", "/men/innerwear/leggings-and-tights"]
                        ]
                    },
                ],
                [
                    {
                        title: "QUẦN",
                        list: [
                            ["Tất Cả Quần", "/men/bottoms/bottoms-collections"],
                            ["Quần Short", "/men/bottoms/shorts"],
                            ["Quần Jean & Quần Jean Màu", "/men/bottoms/jeans"],
                            ["Quần Dài Đến Mắt Cá", "/men/bottoms/ankle-pants"],
                            ["Quần Miracle Air", "/men/bottoms/airsense-pants"],
                            ["Quần Casual", "/men/bottoms/easy-pants"],
                            ["Quần Dài Dáng Rộng", "/men/bottoms/wide-leg-pants"],
                            ["Quần Chino", "/men/bottoms/chinos"],
                            ["Quần Nỉ", "/men/bottoms/sweat-pants"],
                            ["Quần Tây", "/men/bottoms/trousers"]
                        ]
                    },
                    {
                        title: "ĐỒ MẶC NHÀ",
                        list: [
                            ["Tất Cả Đồ Mặc Nhà", "/men/loungewear-and-homewear/loungewear-collections"],
                            ["Đồ Mặc Nhà & Pyjama", "/men/loungewear-and-homewear/loungewear"],
                            ["Quần Easy & Relaxed", "/men/loungewear-and-homewear/easy-and-relaxed-pants"],
                            ["Dép Đi Trong Nhà", "/men/loungewear-and-homewear/room-shoes"]
                        ]
                    },
                ],
                [
                    {
                        title: "PHỤ KIỆN",
                        list: [
                            ["Tất Cả Phụ Kiện", "/men/accessories/accessories-collections"],
                            ["Túi", "/men/accessories/bags"],
                            ["Kính Mát", "/men/accessories/fashion-glasses"],
                            ["Mũ & Mũ Lưỡi Trai", "/men/accessories/hats-and-caps"],
                            ["Thắt Lưng", "/men/accessories/belts"],
                            ["Ô", "/men/accessories/umbrellas"],
                            ["Khăn Choàng & Khăn Quàng Cổ", "/men/accessories/scarves"],
                            ["Găng Tay", "/men/accessories/gloves"],
                            ["Khác", "/men/accessories/others"]
                        ]
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
                        list: [
                            ["Tất Cả Áo", "/kids/tops/tops-collections"], 
                            ["Áo Thun In Họa Tiết", "/kids/tops/ut-graphic-tees"],
                            ["Áo Thun + Áo Polo", "/kids/tops/t-shirts"],
                            ["Áo Nỉ & Hoodie", "/kids/tops/sweatshirts-and-hoodies"],
                            ["Áo Sơ Mi & Áo Kiểu", "/kids/tops/shirts-and-blouses"],
                            ["Áo Len & Áo Cardigan", "/kids/tops/sweaters-and-cardigans"]
                        ]
                    },
                    {
                        title: "SPORT UTILITY WEAR",
                        list: [["Sport Utility Wear", "/kids/sport-utility-wear/sport-utility-wear"]]
                    },
                ],
                [
                    {
                        title: "ĐỒ MẶC NGOÀI",
                        list: [
                            ["Tất Cả Đồ Mặc Ngoài", "/kids/outerwear/outerwear-collections"],
                            ["Áo Blouson & Áo Parka", "/kids/outerwear/blouson-and-parkas"],
                            ["Áo Khoác", "/kids/outerwear/jackets-and-coats"]
                        ]
                    },
                    {
                        title: "ĐỒ MẶC TRONG & ĐỒ LÓT",
                        list: [
                            ["Tất Cả Đồ Mặc Trong & Đồ Lót", "/kids/innerwear/innerwear-collections"],
                            ["AIRism Đồ Mặc Trong", "/kids/innerwear/airism"],
                            ["Đồ Lót", "/kids/innerwear/underwear"],
                            ["Áo Bra và Bra Tops", "/kids/innerwear/bras-and-bra-top"],
                            ["Tất", "/kids/innerwear/socks"],
                            ["HEATTECH Đồ Mặc Trong & Quần Lót Giữ Nhiệt", "/kids/innerwear/heattech"]
                        ]
                    },
                ],
                [
                    {
                        title: "QUẦN",
                        list: [
                            ["Tất Cả Quần", "/kids/bottoms/bottoms-collections"],
                            ["Quần Short", "/kids/bottoms/shorts"],
                            ["Quần Dài", "/kids/bottoms/pants"]
                        ]
                    },
                    {
                        title: "ĐỒ MẶC NHÀ",
                        list: [["Đồ Mặc Nhà & Pyjama", "/kids/loungewear-and-homewear/loungewear"]]
                    },
                ],
                [
                    {
                        title: "ĐẦM & CHÂN VÁY",
                        list: [
                            ["Đầm", "/kids/dresses-and-jumpsuits/dresses-and-jumpsuits"], 
                            ["Chân Váy", "/kids/dresses-and-jumpsuits/skirts"]
                        ]
                    },
                    {
                        title: "PHỤ KIỆN",
                        list: [["Tất Cả Phụ Kiện", "/kids/accessories/accessories-collections"]]
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
                        list: [
                            ["Tất Cả Đồ Trẻ Sơ Sinh", "/baby/newborn/all-newborn"], 
                            ["Đồ Liền Mảnh", "/baby/newborn/one-pieces"], 
                            ["Bodysuit", "/baby/newborn/bodysuits"],
                            ["Áo Thun In Họa Tiết", "/baby/newborn/ut-graphic-tees"], 
                            ["Tất", "/baby/newborn/socks"]
                        ]
                    },
                ],
                [
                    {
                        title: "TRẺ NHỎ (6 THÁNG - 5 NĂM)",
                        list: [
                            ["All Toddlers", "/baby/toddler/all-toddlers"], 
                            ["Đồ Mặc Nhà & Pyjama", "/baby/toddler/pajamas"],
                            ["Quần Dài & Quần Legging", "/baby/toddler/bottoms"],
                            ["Áo", "/baby/toddler/tops"],
                            ["Áo Thun In Họa Tiết", "/baby/toddler/ut-graphic-tees"],
                            ["Đồ Mặc Ngoài", "/baby/toddler/outerwear"],
                            ["Tất", "/baby/toddler/socks"],
                            ["Phụ Kiện", "/baby/toddler/accessories"]
                        ]
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
        <Fragment>
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
            <header className={cx('header')}>
                <div className={cx('header-menu-wrapper')}>
                        <div className='container'>
                            <div className={cx('header-left')}>
                                <div className={cx('header-logo')}>
                                    <Link to='/' className={cx('header-logo-link')}>
                                        <Logo></Logo>
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
                                                                                <Link to={Z[1]} className={cx('popper-text-content')} key={indexZ}>
                                                                                    {Z[0]}
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
                                                <IconButton to={X.link}>
                                                    <X.icon/>
                                                </IconButton>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;