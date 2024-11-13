import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import { useRef, useState } from 'react'

const cx = classNames.bind(styles)

function Product({ query, filter }) {
    let dataIndex = 0
    if (filter) {
        switch (filter) {
            case 'Nam':
                dataIndex = 0
                break;
            case 'Nữ':
                dataIndex = 1
                break;
            case 'Trẻ Em':
                dataIndex = 2
                break;
            case 'Trẻ Sơ Sinh':
                dataIndex = 3
                break;
            default:
                break;
        }
    }

    const dataFetch = [
        [
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                limitedPrice: '289.000 VND',
                limitedTime: '09 Feb 2024 - 15 Feb 2024',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
        ],
        [
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ Nữ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                limitedPrice: '289.000 VND',
                limitedTime: '09 Feb 2024 - 15 Feb 2024',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
        ],
        [
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ Trẻ Em',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                limitedPrice: '289.000 VND',
                limitedTime: '09 Feb 2024 - 15 Feb 2024',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
        ],
        [
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ Trẻ Sơ Sinh',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                limitedPrice: '289.000 VND',
                limitedTime: '09 Feb 2024 - 15 Feb 2024',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
            {
                img: 'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/468879/item/vngoods_69_468879.jpg?width=750',
                name: 'Áo Thun Dáng Rộng Kẻ Sọc Cổ Tròn Tay Lỡ',
                id: '468879',
                color: '69 NAVY',
                size: 'Nam',
                price: '391.000 VND',
                quantity: '4',
                sold: '3',
                revenue: '391.000 VND',
            },
        ],
    ]

    const [data, setData] = useState(dataFetch)
    const [newProduct, setNewProduct] = useState({})
    const addLimitedPopperRef = useRef([])
    const addNewLimitedPopperRef = useRef()
    const addLimitedTimeRef = useRef([])
    const addNewLimitedTimeRef = useRef()
    const addLimitedPriceRef = useRef([])
    const addNewLimitedPriceRef = useRef()
    const addNewLimitedButtonRef = useRef()
    const newProductRef = useRef()


    const handleNameChange = (e, s, i) => {
        let newData = [...data]
        newData[dataIndex][i][s] = e.target.value
        setData(newData)
    }

    const handleNewChange = (e, s) => {
        let temp = newProduct
        temp[s] = e.target.value
        setNewProduct(temp)
    }

    const handleRemoveLimited = (i) => {
        let newData = [...data]
        delete newData[dataIndex][i].limitedPrice
        delete newData[dataIndex][i].limitedTime
        setData(newData)
    }

    const handleRemoveNewLimited = () => {

    }

    const handleAddLimited = (i) => {
        let newData = [...data]
        newData[dataIndex][i].limitedPrice = addLimitedPriceRef.current[i].value
        newData[dataIndex][i].limitedTime = addLimitedTimeRef.current[i].value
        setData(newData)
    }

    const handleAddNewLimited = () => {
        let temp = newProduct
        temp.limitedPrice = addNewLimitedPriceRef.current.value
        temp.limitedTime = addNewLimitedTimeRef.current.value
        setNewProduct(temp)
    }

    const handleAddNewLimitedButton = () => {
        addNewLimitedButtonRef.current.style.display = 'none'
        addNewLimitedPopperRef.current.style.display = 'block'
    }

    const handleAddLimitedButton = (i) => {
        addLimitedPopperRef.current[i].style.display = 'block'
    }

    const handleRemoveProduct = (i) => {
        let newData = [...data]
        newData[dataIndex].splice(i, 1)

        setData(newData)
    }

    const handleRemoveNewProduct = () => {
        newProductRef.current.style.display = 'none'
    }

    const handleAddNewProduct = () => {
        let temp = [...data]
        temp[dataIndex].unshift(newProduct)
        newProductRef.current.style.display = 'none'
        setNewProduct({})
        setData(temp)
        // add to database

        //
    }
    return ( 
        <div className={cx('product-component-wrapper')}>
            <div className={cx('add-product-button')} onClick={() => newProductRef.current.style.display = 'flex'}>THÊM SẢN PHẨM</div>


            <div className={cx('product-wrapper')} ref={newProductRef} style={{display: 'none', marginBottom: '28px'}}>
                <div className={cx('img-wrapper')}>
                    <img src={newProduct.img} alt="" className={cx('product-img')}/>
                    <div className={cx('image-upload-wrapper')}>
                        <input type="file" accept='image/*' id={cx('upload-main-image')}/>
                        <label htmlFor={cx('upload-main-image')} className={cx('upload-main-image-lable')}>Upload Image</label>
                    </div>
                </div>
                <div className={cx('info-wrapper')}>
                    <div className={cx('product-info')}>
                        <div style={{display: 'flex'}}>
                            <div className={cx('product-info-name')} style={{width: '52px'}}>Tên: </div>
                            <input type="text" className={cx('product-info-name')} value={newProduct.name} onChange={(e) => handleNewChange(e, 'name')}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className={cx('product-info-id')} style={{width: '130px'}}>Mã sản phẩm:</div>
                            <input type="text" className={cx('product-info-id')} value={newProduct.id} onChange={(e) => handleNewChange(e, 'id')}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className={cx('product-info-color')} style={{width: '78px'}}>Màu sắc:</div>
                            <input type="text" className={cx('product-info-color')} value={newProduct.color} onChange={(e) => handleNewChange(e, 'color')}/>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className={cx('product-info-size')} style={{width: '78px', marginBottom: '0'}}>Kích cỡ:</div>
                            <input type="text" style={{marginBottom: '0'}} className={cx('product-info-size')} value={newProduct.size} onChange={(e) => handleNewChange(e, 'size')}/>
                        </div>
                        {newProduct.limitedPrice ?
                            <div className={cx('limited-wrapper')}>
                                <div style={{display: 'flex'}}>
                                    <div style={{display: 'flex'}}>
                                        <div className={cx('limited-time')} style={{width: '124px'}}>Limited Offer Từ </div>
                                        <input type="text" className={cx('limited-time')} style={{width: '260px'}} value={newProduct.limitedTime} onChange={(e) => handleNewChange(e, 'limitedTime')}/>
                                    </div>
                                    <div className={cx('remove-limited')} onClick={() => handleRemoveNewLimited()}></div>
                                </div>
                                <input type="text" className={cx('limited-price')} value={newProduct.limitedPrice} onChange={(e) => handleNewChange(e, 'limitedPrice')}/>
                            </div> :
                            <div style={{display: 'flex', position: 'rerelative'}}>
                                <div style={{display: 'flex'}}>
                                    <div className={cx('price-wrapper')} style={{width: '34px'}}>Giá: </div>
                                    <input type="text" style={{width: 'auto'}} className={cx('price-wrapper')} value={newProduct.price} onChange={(e) => handleNewChange(e, 'price')}/>
                                </div>
                                
                                <div className={cx('add-limited')} ref={addNewLimitedButtonRef} onClick={() => handleAddNewLimitedButton()}></div>
                                <div className={cx('add-limited-popper')} style={{display: 'none', position: 'absolute', right: '0px'}} ref={addNewLimitedPopperRef}>
                                    <div style={{display: 'flex'}}>
                                        <div className={cx('limited-price')} style={{width: '172px'}}>Time: Limited Offer Từ </div>
                                        <input type="text" className={cx('limited-price')} style={{width: 'auto'}} ref={addNewLimitedTimeRef}/>
                                        <div className={cx('add-limited')} style={{marginTop: '5px'}} onClick={() => handleAddNewLimited()}></div>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <div className={cx('limited-price')} style={{width: '50px'}}>Price: </div>
                                        <input type="text" className={cx('limited-price')} value={newProduct.limitedPrice} ref={addNewLimitedPriceRef}/>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className={cx('product-nb-text')}>SỐ LƯỢNG</div>
                        <div className={cx('product-footer-wrapper')}>
                            <div className={cx('product-nb')}>
                                <input type="text" className={cx('product-nb-value')} value={newProduct.quantity} onChange={(e) => handleNewChange(e, 'quantity')}/>
                            </div>
                            <div className={cx('add-new-product-button')} onClick={() => handleAddNewProduct()}>thêm</div>
                        </div>
                    </div>
                    <div className={cx('remove-product')} onClick={() => handleRemoveNewProduct()}></div>
                </div>
            </div>


            {data[dataIndex].map((x, i) => {
                return (
                    <div className={cx('product-wrapper')} key={i}>
                        <div className={cx('img-wrapper')}>
                            <img src={x.img} alt="" className={cx('product-img')}/>
                            <div className={cx('image-upload-wrapper')}>
                                <input type="file" accept='image/*' id={cx('upload-main-image') + i}/>
                                <label htmlFor={cx('upload-main-image') + i} className={cx('upload-main-image-lable')}>Upload Image</label>
                            </div>
                        </div>
                        <div className={cx('info-wrapper')}>
                            <div className={cx('product-info')}>
                                <input type="text" className={cx('product-info-name')} value={x.name} onChange={(e) => handleNameChange(e, 'name', i)}/>
                                <div style={{display: 'flex'}}>
                                    <div className={cx('product-info-id')} style={{width: '130px'}}>Mã sản phẩm:</div>
                                    <input type="text" className={cx('product-info-id')} value={x.id} onChange={(e) => handleNameChange(e, 'id', i)}/>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className={cx('product-info-color')} style={{width: '78px'}}>Màu sắc:</div>
                                    <input type="text" className={cx('product-info-color')} value={x.color} onChange={(e) => handleNameChange(e, 'color', i)}/>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div className={cx('product-info-size')} style={{width: '78px', marginBottom: '0'}}>Kích cỡ:</div>
                                    <input type="text" style={{marginBottom: '0'}} className={cx('product-info-size')} value={x.size} onChange={(e) => handleNameChange(e, 'size', i)}/>
                                </div>
                                {x.limitedPrice ?
                                    <div className={cx('limited-wrapper')}>
                                        <div style={{display: 'flex'}}>
                                            <div style={{display: 'flex'}}>
                                                <div className={cx('limited-time')} style={{width: '124px'}}>Limited Offer Từ </div>
                                                <input type="text" className={cx('limited-time')} style={{width: '260px'}} value={x.limitedTime} onChange={(e) => handleNameChange(e, 'limitedTime', i)}/>
                                            </div>
                                            <div className={cx('remove-limited')} onClick={() => handleRemoveLimited(i)}></div>
                                        </div>
                                        <input type="text" className={cx('limited-price')} value={x.limitedPrice} onChange={(e) => handleNameChange(e, 'limitedPrice', i)}/>
                                    </div> :
                                    <div style={{display: 'flex'}}>
                                        <input type="text" style={{width: 'auto'}} className={cx('price-wrapper')} value={x.price} onChange={(e) => handleNameChange(e, 'price', i)}/>
                                        <div className={cx('add-limited')} onClick={() => handleAddLimitedButton(i)}></div>
                                        <div className={cx('add-limited-popper')} style={{display: 'none'}} ref={el => addLimitedPopperRef.current[i] = el}>
                                            <div style={{display: 'flex'}}>
                                                <div className={cx('limited-price')} style={{width: '172px'}}>Time: Limited Offer Từ </div>
                                                <input type="text" className={cx('limited-price')} style={{width: 'auto'}} ref={el => addLimitedTimeRef.current[i] = el}/>
                                                <div className={cx('add-limited')} style={{marginTop: '5px'}} onClick={() => handleAddLimited(i)}></div>
                                            </div>
                                            <div style={{display: 'flex'}}>
                                                <div className={cx('limited-price')} style={{width: '50px'}}>Price: </div>
                                                <input type="text" className={cx('limited-price')} value={x.limitedPrice} ref={el => addLimitedPriceRef.current[i] = el}/>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className={cx('product-nb-text')}>SỐ LƯỢNG</div>
                                <div className={cx('product-footer-wrapper')}>
                                    <div className={cx('product-nb')}>
                                        <input type="text" className={cx('product-nb-value')} value={x.quantity} onChange={(e) => handleNameChange(e, 'quantity', i)}/>
                                    </div>
                                    <div className={cx('product-total-text')}>ĐÃ BÁN: {x.sold}</div>
                                    <div className={cx('product-total-wrapper')}>
                                        <span className={cx('product-total-text')}>TỔNG: </span>
                                        <span className={cx('product-total-value')}>{x.revenue}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('remove-product')} onClick={() => handleRemoveProduct(i)}></div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Product