import { Fragment, useContext, useEffect, useState } from 'react'
import PathText from '../../../components/PathText'

import classNames from 'classnames/bind'
import styles from './Signup.module.scss'
import Account from '..';
import Input from '../../../components/Input'
import TextButton from '../../../components/TextButton'
import { UserData } from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { authenticateAPIs } from '../../../apis/authenticateAPIs';

const cx = classNames.bind(styles)

function Signup() {
    const userData = useContext(UserData)
    const [gmail, setGmail] = useState('')
    const [password, setPassword] = useState('')
    const [dateOfBirth, setDataOfBirth] = useState('')
    const [gender, setGender] = useState('')
    
    const navigate = useNavigate()

    useEffect(() => {
        console.log(userData)
        document.title = 'Tạo tài khoản';
    }, []);

    const path = [
        {
            text: 'UNIQLO',
            link: '/'
        },
        {
            text: 'TẠO TÀI KHOẢN',
        },
    ]

    const handleSignUpFormSubmit = async (e) => {
        e.preventDefault()
        const data = {
            gmail,
            password,
            gender,
            dateOfBirth
        }

        setGmail('')
        setPassword('')
        setGender('')
        setDataOfBirth('')

        try {
            const response = await authenticateAPIs.signupAPI(data)
            console.log(response)
            userData.setUser(response)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handlePasswordClick = () => {
        var xPassword = document.getElementById("inputPassword");
        var yPassword = document.getElementById("showPassword");
        if (xPassword.type === "password" && yPassword.checked) {
            xPassword.type = "text";
        } else {
            xPassword.type = "password";
        }
    }

    return ( 
        <Fragment>
            <PathText path={path}/>
            <Account>
                <div className='container' style={{marginBottom: '88px'}}>
                    <div className={'auth-account-title ' + cx('signup-title')}>
                        TẠO MỘT TÀI KHOẢN
                    </div>
                    <div className={cx('form-frame')}>
                        <div className='auth-account-text' style={{width: '81.25%'}}>
                            Chúng tôi sẽ gửi thư xác nhận đến địa chỉ email được liên kết với tài khoản của bạn. Hãy kiểm tra email đến từ chúng tôi.
                        </div>
                        <form method='' action="/" onSubmit={handleSignUpFormSubmit}>
                            <Input signup={true} title={'ĐỊA CHỈ EMAIL'} type={'email'} value={gmail} setValue={setGmail}
                                placeholder={'Nhập email hợp lệ'} mgBottom='28px'>
                            </Input>
                            <Input signup={true} title={'MẬT KHẨU'} type={'password'} 
                                mgBottom={'28px'} showPasswordFnc={handlePasswordClick} value={password} setValue={setPassword}>
                            </Input>
                            <Input signup={true} title={'SINH NHẬT'} type={'date'} value={dateOfBirth} setValue={setDataOfBirth}
                                mgBottom='28px' width='55%'>
                            </Input>
                            <Input signup={true} title={'GIỚI TÍNH'} type={'radio'} setValue={setGender}
                                mgBottom='28px'>
                            </Input>
                            <div className={cx('heading')}>
                                XÁC NHẬN ĐĂNG KÝ
                            </div>
                            <div style={{marginBottom: '40px'}} className={cx('checkbox-input-frame')}>
                                <input type="checkbox" className={cx('checkbox')}/>
                                <span className={cx('checkbox-input-text')}>Thư điện tử UNIQLO</span>
                            </div>
                            <div style={{marginBottom: '28px'}} className={cx('separator')}></div>


                            <div style={{fontSize: '31px', fontWeight: '700'}}>
                                TIN NHẮN VĂN BẢN VÀ CÀI ĐẶT RIÊNG
                            </div>

                            <div style={{marginTop: '20px'}} className={cx('heading')}>
                                ỨNG DỤNG UNIQLO VÀ DỮ LIỆU CÁ NHÂN CỦA BẠN
                            </div>
                            <div style={{marginTop: '20px'}} className='auth-account-text'>
                                UNIQLO cam kết tôn trọng các quyền của khách hàng khi lưu trữ dữ liệu cá nhân của họ trong hệ thống. Thỏa thuận bên dưới sẽ giúp khách hàng lựa chọn việc có để cho dữ liệu cá nhân của mình được lưu trữ và xử lý vì mục đích cung cấp dịch vụ tương ứng. Vì mục đích của thỏa thuận bên dưới, sẽ gửi “tin nhắn văn bản”, nghĩa là thông báo cung cấp những thông tin quan trọng liên quan đến dịch vụ đến cho khách hàng.
                            </div>


                            <div style={{marginTop: '40px'}} className={cx('heading')}>
                                ĐỒNG Ý NHẬN QUẢNG CÁO TIẾP THỊ (TIN NHẮN KHÔNG CÁ NHÂN HÓA)
                            </div>
                            <div style={{marginTop: '20px'}} className='auth-account-text'>
                                Tôi đồng ý cho phép Uniqlo sử dụng dữ liệu cá nhân của tôi để gửi cho tôi tin nhắn tiếp thị theo dạng tin nhắn văn bản không cá nhân hóa
                            </div>
                            <div style={{marginBottom: '40px'}} className={cx('checkbox-input-frame')}>
                                <input type="checkbox" className={cx('checkbox')} defaultChecked/>
                                <span className={cx('checkbox-input-text')}>Tin nhắn văn bản</span>
                            </div>


                            <div style={{marginTop: '40px'}} className={cx('heading')}>
                                ĐỒNG Ý NHẬN QUẢNG CÁO TIẾP THỊ (TIN NHẮN CÁ NHÂN HÓA)
                            </div>
                            <div style={{marginTop: '20px'}} className='auth-account-text'>
                                Tôi đồng ý cho phép Uniqlo sử dụng dữ liệu cá nhân của tôi để gửi cho tôi tin nhắn tiếp thị theo dạng tin nhắn văn bản cá nhân hóa
                            </div>
                            <div style={{marginBottom: '16px'}} className={cx('checkbox-input-frame')}>
                                <input type="checkbox" className={cx('checkbox')} defaultChecked/>
                                <span className={cx('checkbox-input-text')}>Tin nhắn văn bản</span>
                            </div>

                            <div style={{marginBottom: '28px'}} className={cx('separator')}></div>

                            <div style={{marginBottom: '16px'}} className={cx('heading')}>
                                THỎA THUẬN THÀNH VIÊN
                            </div>

                            <p style={{color: '#7D7D7D', fontSize: '16px', marginBottom: '20px'}}>Bằng cách tạo tài khoản, bạn đồng ý với chính sách bảo mật và điều khoản sử dụng của UNIQLO.</p>
                            <div style={{marginBottom: '20px'}} className={cx('checkbox-input-frame')}>
                                <input type="checkbox" className={cx('checkbox')} required/>
                                <span className={cx('checkbox-input-text')}>Tôi đồng ý với ĐIỀU KHOẢN SỬ DỤNG và CHÍNH SÁCH BẢO MẬT CỦA UNIQLO</span>
                            </div>

                            <div className={cx('policy')}> 
                                <a href="https://faq-vn.uniqlo.com/articles/vi/FAQ/%C4%90i%E1%BB%81u-kho%E1%BA%A3n-s%E1%BB%AD-d%E1%BB%A5ng"
                                    className={cx('policy-heading')} style={{marginRight: '20px'}}>
                                    ĐIỀU KHOẢN SỬ DỤNG
                                </a>
                                <a href="https://faq-vn.uniqlo.com/articles/vi/FAQ/Ch%C3%ADnh-s%C3%A1ch-b%E1%BA%A3o-m%E1%BA%ADt"
                                    className={cx('policy-heading')}>
                                    CHÍNH SÁCH BẢO MẬT
                                </a>
                            </div>

                            <div style={{width: '576px'}}>
                                <TextButton>ĐĂNG KÝ</TextButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Account>
        </Fragment>
        
        
    )
}

export default Signup;