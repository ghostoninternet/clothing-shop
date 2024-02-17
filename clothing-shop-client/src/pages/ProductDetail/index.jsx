import { Fragment, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import PathText from "../../components/PathText";

import classNames from 'classnames/bind'
import styles from './ProductDetail.module.scss'

const cx = classNames.bind(styles)



function ProductDetail() {
    const product = {
        id: '464023',
        title: 'Áo Parka Chống UV Bỏ Túi (Họa Tiết)',
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
            'NAM XS',
            'NAM S',
            'NAM M',
            'NAM L',
            'NAM XL',
            'NAM XXL'
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
        quantity: '5',
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
            '- Những hình ảnh sản phẩm có thể bao gồm những màu không có sẵn.',
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
    
    const { productIdPath } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        searchParams.set("colorCode", product.colorCode[0]);
        searchParams.set("sizeCode", product.sizeCode[0]);
        setSearchParams(searchParams);
    }, [searchParams, setSearchParams]);

    const [imageList, setImageList] = useState([product.mainImage[0], ...product.image])


    const [displayImage, setDisplayImage] = useState(product.mainImage[0])

    

    
    const imgItemRef = useRef([])
    const prevBorderRef = useRef(0)
    const currentBorderRef = useRef(0)
    const openArrowRef = useRef([])
    const describePopper = useRef([])

    useEffect(() => {
        if (imgItemRef.current[0])
            imgItemRef.current[0].style.borderColor = 'black';
    },[])

    const handleImgClick = (index) => {
        setDisplayImage(imageList[index])
        prevBorderRef.current = currentBorderRef.current
        currentBorderRef.current = index
        imgItemRef.current[prevBorderRef.current].style.borderColor = 'transparent';
        imgItemRef.current[index].style.borderColor = 'black';
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

    return (
        <Fragment>
            {!(/^E\d{6}-000/).test(productIdPath) ?
                <div>Sản Phẩm Này Không Tồn Tại</div> :
                <div>
                    <PathText path={product.path}/>
                    <div className={'container ' + cx('card-wrapper')}>
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
                                        <p className={cx('')}>Mã sản phẩm: {product.id}</p>
                                        <p>Xin lưu ý mã số nhận diện của sản phẩm có thể có sự khác biệt, kể cả khi đó là cùng một mặt hàng</p>
                                        {product.material.map((text, index) => {
                                            return (
                                                <Fragment key={index}>
                                                    {text}
                                                    <br/>
                                                </Fragment>
                                            )
                                        })}
                                    </div>
                                    <div className={cx('separator')}></div>

                                </div>
                            </div>
                        </div>
                        <div className={cx('card-right')}>
                             
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default ProductDetail;