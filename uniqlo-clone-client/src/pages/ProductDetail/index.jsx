import { Fragment, useEffect, useRef, useState } from "react" 
import { useParams, useSearchParams } from "react-router-dom" 

import classNames from 'classnames/bind'
import PathText from "../../components/PathText"
import styles from './ProductDetail.module.scss'

const cx = classNames.bind(styles)

function ProductDetail() {
    const product = {
        id: '464023',
        title: 'Áo Parka Chống UV Bỏ Túi (Họa Tiết)',
        price: '980.000 VND',
        // limitedPrice: '1.275.000 VND',
        // limitedDate: 'from ... to ...'
        colorCode: [
            'COL09',
            'COL32',
            'COL67',
        ],
        colorName: [
            '09 BLACK',
            '32 BEIGE',
            '67 BLUE',
        ],
        colorImage: [
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/chip/goods_09_464023_chip.jpg',
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/chip/goods_32_464023_chip.jpg',
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/chip/goods_67_464023_chip.jpg',
        ],
        sizeCode: [
            'SMA002',
            'SMA003',
            'SMA004',
            'SMA005',
            'SMA006',
            'SMA007',
        ],
        sizeName: [
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],
        mainImage: [
            'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/464023/item/vngoods_09_464023.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/464023/item/vngoods_32_464023.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/464023/item/vngoods_67_464023.jpg?width=750',
        ],
        evaluateStar: '4',
        evaluateQuantity: '1',
        image: [
            'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/464023/sub/vngoods_464023_sub7.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/sub/goods_464023_sub13.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/sub/goods_464023_sub14.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/sub/goods_464023_sub17.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/sub/goods_464023_sub18.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/sub/goods_464023_sub19.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464023/sub/goods_464023_sub20.jpg?width=750',
            'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/464023/sub/vngoods_464023_sub28.jpg?width=750',
        ],
        note: 'Sản phẩm được làm từ chất liệu tái chế',
        description: 'Chống nắng trên mọi chuyến đi. Vải có kết cấu sắc nét, có lớp bề mặt chống bám nước. Với chỉ số chống nắng UPF50+.',
        quantity: [
            ['5', '12', '0', '9', '6', '3'],
            ['5', '7', '0', '9', '6', '3'],
            ['5', '7', '0', '9', '6', '3'],
        ],
        overview: [
            '- Chất liệu vải có kết cấu sắc nét, phù hợp cho các hoạt động ngoài trời hoặc phong cách giản dị.',
            '- Với công nghệ UV Protection (Chống tia UV).',
            '- Lớp bề mặt chống bám nước. * Vải được phủ một chất chống bám nước nên hiệu quả kéo dài hơn. Sự kết thúc không phải là vĩnh viễn.',
            '- Thiết kế có thể bỏ túi.',
            '- Kiểu dáng hình hộp vừa vặn thoải mái ở cơ thể, vai và tay áo.',
            '- Túi đựng gắn vào một vòng ở bên trong bên trái.',
            '- Mẫu kẻ carô nhỏ.',
            '- Hoàn hảo để mặc thường ngày và các hoạt động nhẹ nhàng ngoài trời như cắm trại. *Sản phẩm không có khả năng kháng hoặc chống cháy. Hãy thận trọng nếu có ngọn lửa gần đó.',
        ],
        material: [
            'VẢI',
            'Thân: 86% Nylon, 14% Polyeste ( 40% Sử Dụng Sợi Nylon Tái Chế ), ( 14% Sử Dụng Sợi Polyeste Tái Chế )/ Vải Túi: 100% Polyeste',
            'HƯỚNG DẪN GIẶT',
            'Giặt máy nước lạnh, giặt nhẹ, Không giặt khô, Không sấy khô',
        ],
        path: [
            {
                text: 'UNIQLO',
                link: '/'
            },
            {
                text: 'NAM',
                link: '/men'
            },
            {
                text: 'ĐỒ MẶC NGOÀI',
            },
            {
                text: 'ÁO BLOUSON & ÁO PARKA',
                link: '#'
            },
            {
                text: 'Áo Parka Chống UV Bỏ Túi (Họa Tiết)'
            }
        ],
    }
    
    const { productId } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        searchParams.set("colorCode", product.colorCode[0]) 
        searchParams.set("sizeCode", product.sizeCode[0]) 
        setSearchParams(searchParams)
    }, []) 

    const [imageList, setImageList] = useState([product.mainImage[0], ...product.image])
    const [buyCount, setBuyCount] = useState(1)

    const [displayImage, setDisplayImage] = useState(product.mainImage[0])

    const imgItemRef = useRef([])
    const prevBorderRef = useRef(0)
    const currentBorderRef = useRef(0)
    const prevColorRef = useRef(0)
    const currentColorRef = useRef(0)
    const prevSizeRef = useRef(0)
    const currentSizeRef = useRef(0)
    const sizeRef = useRef([])
    const openArrowRef = useRef([])
    const describePopper = useRef([])
    const colorRef = useRef([])
    const buyCountArrowRef = useRef()
    const buyCountPopperRef = useRef()

    useEffect(() => {
        if (imgItemRef.current[0])
            imgItemRef.current[0].style.borderColor = 'black' 
        if (colorRef.current[0])
            colorRef.current[0].style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px #1f1a1a'
        if (sizeRef.current[0] && parseInt(product.quantity[0][0]) != 0) {
            sizeRef.current[0].style.borderColor = 'rgba(0, 0, 0, 0)'
            sizeRef.current[0].style.backgroundColor = 'rgb(40, 25, 25)'
            sizeRef.current[0].style.color = 'rgb(255, 255, 255)'
            sizeRef.current[0].style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px #1f1a1a'
        }
    },[])

    const handleImgClick = (index) => {
        setDisplayImage(imageList[index])
        prevBorderRef.current = currentBorderRef.current
        currentBorderRef.current = index
        imgItemRef.current[prevBorderRef.current].style.borderColor = 'transparent' 
        imgItemRef.current[index].style.borderColor = 'black' 
    }

    const handleNextSlide = () => {
        if (currentBorderRef.current == imageList.length - 1)
            handleImgClick(0)
        else
            handleImgClick(currentBorderRef.current + 1)
    }

    const handlePrevSlide = () => {
        if (!currentBorderRef.current)
            handleImgClick(imageList.length - 1)
        else
            handleImgClick(currentBorderRef.current - 1)
    }

    const hadleOpenArrow = (index) => {
        if (openArrowRef.current[index].classList.contains(cx('chevron_updown-rotateDown'))) {
            openArrowRef.current[index].classList.remove(cx('chevron_updown-rotateDown'))
            openArrowRef.current[index].classList.add(cx('chevron_updown-rotateUp'))
            describePopper.current[index].style.display = 'block'
            return
        }
        if (openArrowRef.current[index].classList.contains(cx('chevron_updown-rotateUp'))) {
            openArrowRef.current[index].classList.remove(cx('chevron_updown-rotateUp'))
            openArrowRef.current[index].classList.add(cx('chevron_updown-rotateDown'))
            describePopper.current[index].style.display = 'none'
            return
        }
        describePopper.current[index].style.display = 'block'
        openArrowRef.current[index].classList.add(cx('chevron_updown-rotateUp'))
    }

    const handleBuyCountArrowClick = () => {
        if (buyCountArrowRef.current.classList.contains(cx('chevron_updown-rotateDown'))) {
            buyCountArrowRef.current.classList.remove(cx('chevron_updown-rotateDown'))
            buyCountArrowRef.current.classList.add(cx('chevron_updown-rotateUp'))
            buyCountPopperRef.current.style.display = 'block'
            return
        }
        if (buyCountArrowRef.current.classList.contains(cx('chevron_updown-rotateUp'))) {
            buyCountArrowRef.current.classList.remove(cx('chevron_updown-rotateUp'))
            buyCountArrowRef.current.classList.add(cx('chevron_updown-rotateDown'))
            buyCountPopperRef.current.style.display = 'none'
            return
        }
        buyCountPopperRef.current.style.display = 'block'
        buyCountArrowRef.current.classList.add(cx('chevron_updown-rotateUp'))
    }

    const handleBuyCountClick = (index) => {
        setBuyCount(index+1)
        handleBuyCountArrowClick()
    }

    const handleColorClick = (index) => {
        prevColorRef.current = currentColorRef.current
        currentColorRef.current = index
        colorRef.current[prevColorRef.current].style.boxShadow = 'none'
        colorRef.current[index].style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px #1f1a1a'
        searchParams.set("colorCode", product.colorCode[index])
        setSearchParams(searchParams)
        let newImageList = [product.mainImage[index], ...product.image]
        setImageList(newImageList)
        prevBorderRef.current = currentBorderRef.current
        currentBorderRef.current = 0 
        imgItemRef.current[prevBorderRef.current].style.borderColor = 'transparent'
        imgItemRef.current[0].style.borderColor = 'black'
        setDisplayImage(product.mainImage[index])
        setBuyCount(1)
    }

    const handleSizeClick = (index) => {
        prevSizeRef.current = currentSizeRef.current
        currentSizeRef.current = index
        
        sizeRef.current[prevSizeRef.current].style.borderColor = 'rgb(219, 214, 214)'
        sizeRef.current[prevSizeRef.current].style.backgroundColor = 'rgb(255, 255, 255)'
        sizeRef.current[prevSizeRef.current].style.color = 'rgb(27, 27, 27)'
        sizeRef.current[prevSizeRef.current].style.boxShadow = 'none'

        sizeRef.current[index].style.borderColor = 'rgb(219, 214, 214)'
        sizeRef.current[index].style.backgroundColor = 'rgb(40, 25, 25)'
        sizeRef.current[index].style.color = 'rgb(255, 255, 255)'
        sizeRef.current[index].style.boxShadow = '0 0 0 2px #fff, 0 0 0 4px #1f1a1a'

        searchParams.set("sizeCode", product.sizeCode[index])
        setSearchParams(searchParams)
        setBuyCount(1)
    }

    return (
        <Fragment>
            {!(/^E\d{6}-000/).test(productId) ?
                <div>Sản Phẩm Này Không Tồn Tại</div> :
                <div>
                    <PathText path={product.path}/>
                    <div className={'container ' + cx('card-wrapper')} style={{marginBottom: '88px'}}>
                        <div>
                            <div className={cx('card-left')}>
                                <div>
                                    <div className={cx('space-between')}>
                                        <div className={cx('img-list', 'no-select')}>
                                            {imageList.map((img, index) => {
                                                return (
                                                    <div className={cx('img-item-wrapper')} key={index} ref={el => imgItemRef.current[index] = el} onClick={() => handleImgClick(index)}>
                                                        <img src={img} alt="" className={cx('img-item')}/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <div className={cx('main-img', 'no-select')}>
                                                <img src={displayImage} alt="" style={{width: '519px'}}/>
                                                <div className={cx('next-button')} onClick={() => handleNextSlide()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="currentColor" fillRule="evenodd" d="M16.26 12l-6.03 7-1.49-1.34L13.62 12 8.74 6.34 10.23 5l6.03 7z"></path></svg>
                                                </div>
                                                <div className={cx('prev-button')} onClick={() => handlePrevSlide()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="currentColor" fillRule="evenodd" d="M7.74 12l6.03 7 1.49-1.34L10.38 12l4.88-5.66L13.77 5l-6.03 7z"></path></svg>
                                                </div>
                                            </div>
                                            <div className={cx('img-index-wrapper')}>
                                                {currentBorderRef.current+1}/{imageList.length}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginTop: '40px'}}>
                                    <div className={cx('space-between')}>
                                        <div className={cx('describe')}>MÔ TẢ</div>
                                        <div style={{marginBottom: '20px'}}>
                                            <div className={cx('describe-code-text')}>Mã sản phẩm:</div>
                                            <div className={cx('describe-code-text')}>{product.id}</div>
                                        </div>
                                    </div>
                                    <div className={cx('separator')}></div>

                                    <div className={cx('describe-item-wrapper')}>
                                        <div className={cx('space-between')} style={{width: '100%'}}>
                                            <div className={cx('describe-title')}>Tổng quan</div>
                                            <div className={cx('open-arrow')} 
                                                ref={el => openArrowRef.current[0] = el}
                                                onClick={() => hadleOpenArrow(0)}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('describe-popper')} ref={el => describePopper.current[0] = el}>
                                        {product.overview.map((text, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    {text}
                                                    <br/>
                                                </Fragment>
                                            )
                                        })}
                                    </div>
                                    <div className={cx('separator')}></div>

                                    <div className={cx('describe-item-wrapper')}>
                                        <div className={cx('space-between')} style={{width: '100%'}}>
                                            <div className={cx('describe-title')}>Chất liệu</div>
                                            <div className={cx('open-arrow')} 
                                                ref={el => openArrowRef.current[1] = el}
                                                onClick={() => hadleOpenArrow(1)}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('describe-popper')} ref={el => describePopper.current[1] = el}>
                                        <p className={cx('describe-popper-product-code')}>Mã sản phẩm: {product.id}</p>
                                        <p className={cx('describe-popper-product-note')}>Xin lưu ý mã số nhận diện của sản phẩm có thể có sự khác biệt, kể cả khi đó là cùng một mặt hàng.</p>
                                        {product.material.map((text, index) => {
                                            return (
                                                <div key={index} className={cx('product-material-text')}>
                                                    {text}
                                                    <br/>
                                                </div>
                                            )
                                        })}
                                        <p className={cx('last-note')}>- Những hình ảnh sản phẩm có thể bao gồm những màu không có sẵn.</p>
                                    </div>
                                    <div className={cx('separator')}></div>
                                    <div className={cx('describe-item-wrapper')} style={{cursor: 'pointer'}}>
                                        <div className={cx('space-between')} style={{width: '100%'}}>
                                            <div className={cx('describe-title')}>Chính sách hoàn trả</div>
                                            <div className={cx('open-arrow', 'last-open-arrow')}/>
                                        </div>
                                    </div>
                                    <div className={cx('separator')} style={{marginBottom: '88px'}}></div>
                                    <div style={{display: 'flex', alignItems: 'flex-start'}} className={cx('left-evaluate')}>
                                        <div className={cx('describe')} style={{marginRight: '20px'}}>ĐÁNH GIÁ</div>
                                        {[...Array(parseInt(product.evaluateStar))].map((x, i) => {
                                            return (
                                                <div className={cx('star', 'css-select-star')} key={i}></div>    
                                            )
                                        })}
                                        {parseInt(product.evaluateStar) == 5 ?
                                            <Fragment></Fragment> :
                                            <div className={cx('empty-star', 'css-select-star')}></div>
                                        }
                                        <div className={cx('evaluate-count')}>({product.evaluateQuantity})</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('card-right')}>
                            <div className={cx('right-product-name')}>{product.title}</div>
                            <div className={cx('space-between')}>
                                {!product.limitedPrice ?
                                    <div>
                                        <div className={cx('main-price')}>{product.price}</div>
                                        <div className={cx('product-note')}>{product.note}</div>
                                    </div> :
                                    <div>
                                        <div className={cx('old-price')}>{product.price}</div>
                                        <div className={cx('limited-price')}>{product.limitedPrice}</div>
                                        <div className={cx('sale-text')}>Sale</div>
                                    </div>
                                }
                                <div className={cx('main-evaluate')}>
                                    {[...Array(parseInt(product.evaluateStar))].map((x, i) => {
                                        return (
                                            <div className={cx('star', 'css-select-star')} key={i}></div>    
                                        )
                                    })}
                                    {parseInt(product.evaluateStar) == 5 ?
                                        <Fragment></Fragment> :
                                        <div className={cx('empty-star', 'css-select-star')}></div>
                                    }
                                    <div className={cx('evaluate-count')}>({product.evaluateQuantity})</div>
                                </div>
                            </div>

                            <div className={cx('main-description')}>{product.description}</div>
                            <div className={cx('main-separator')}></div>
                            <div className={cx('color-text')}>MÀU SẮC: {product.colorName[currentColorRef.current]}</div>
                            <div className={cx('color-list')}>
                                {product.colorImage.map((x, i) => {
                                    return (
                                        <div className={cx('color-item-wrapper')} key={i}
                                            ref={el => colorRef.current[i] = el}
                                            onClick={() => handleColorClick(i)}
                                        >
                                            <span className={cx('color-item')} style={{backgroundImage: `url(${x})`}}></span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className={cx('space-between')}>
                                <div className={cx('color-text')}>KÍCH CỠ: {product.path[1].text} {product.sizeName[currentSizeRef.current]}</div>
                                <div className={cx('size-table-wrapper')}>
                                    <span className={cx('size-table-icon')}></span>
                                    <div className={cx('color-text', 'size-table-text')}>BẢNG KÍCH THƯỚC</div>
                                </div>
                            </div>
                            <div className={cx('color-list', 'size-list')}>
                                {product.sizeName.map((x, i) => {
                                    return (
                                        parseInt(product.quantity[currentColorRef.current][i]) ?
                                            <div className={cx('color-item-wrapper', 'size-item')} key={i}
                                                ref={el => sizeRef.current[i] = el}
                                                onClick={() => handleSizeClick(i)}
                                            >
                                                <span className={cx('size-text', 'no-select')}>{x}</span>
                                            </div> :
                                            <div className={cx('color-item-wrapper', 'size-item', 'sold-out-size')} key={i}
                                                ref={el => sizeRef.current[i] = el}
                                            >
                                                <span className={cx('size-text', 'no-select')}>{x}</span>
                                            </div>
                                    )
                                })}
                            </div>
                            <div className={cx('dimensions-by-height')}>KÍCH THƯỚC THEO CHIỀU CAO</div>
                            <div className={cx('oder-count-text')}>SỐ LƯỢNG</div>
                            <div className={cx('oder-popper-wrapper')}>
                                <span className={cx('product-nb-value')}>{buyCount}</span>
                                <div className={cx('open-arrow')}
                                    ref={buyCountArrowRef}
                                    onClick={() => handleBuyCountArrowClick()}
                                />
                                <div className={cx('product-nb-popper')}
                                    ref={buyCountPopperRef}
                                >
                                    {[...Array(parseInt(product.quantity[currentColorRef.current][currentSizeRef.current]))].map((x, i) => (
                                        <div className={cx('product-nb-popper-value')} key={i}
                                            onClick={() => handleBuyCountClick(i)}
                                        >
                                            {i+1}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className={cx('quantity-note')}>
                                {parseInt(product.quantity[currentColorRef.current][currentSizeRef.current]) >= 10 ? 
                                    'Còn hàng' :
                                    'Còn ít hàng'
                                }
                            </p>
                            <button className={cx('add-to-cart')}>THÊM VÀO GIỎ HÀNG</button>
                            <div className={cx('space-between')} style={{marginTop: '20px'}}>
                                <div className={cx('add-to-wishlist')}>THÊM VÀO DANH SÁCH MONG MUỐN</div>
                                <div className={cx('add-to-wishlist')}>TÌM SẢN PHẨM CÒN HÀNG TRONG CỬA HÀNG</div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default ProductDetail 