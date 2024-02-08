import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import { Fragment, useEffect } from 'react';
import { Logo } from '../../../components/SvgIcon'
import Account from '..';
import Input from '../../../components/Input';
import TextButton from '../../../components/TextButton';


const cx = classNames.bind(styles)

function Login() {
    useEffect(() => {
        document.title = 'Đăng nhập';
    }, []);
    

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
        <Account>
            <div className={cx('logo-content')}>
                <div className={"container " + cx('logo-wrapper')}>
                    <a href="/" className={cx('logo-link')}>
                        <Logo></Logo>
                    </a>
                </div>
            </div>
            <div className={cx('content-frame')}>
                <div className={"container " + cx('content-wrapper')}>
                    <div className={cx('login-frame')}>
                        <div className={'auth-account-title ' + cx('login-title')}>
                            đăng nhập
                        </div>
                        <div className='auth-account-text'>
                            Đăng nhập bằng địa chỉ email và mật khẩu của bạn.
                        </div>
                        <form method='post' action="/">
                           <Input title={'ĐỊA CHỈ EMAIL'} type={'email'}
                                placeholder={'Nhập email hợp lệ'} mgBottom='20px'>
                           </Input>
                           <Input title={'MẬT KHẨU'} type={'password'} mgBottom={'20px'} showPasswordFnc={handlePasswordClick}>
                           </Input>
                           <div className={cx('policy')}> 
                                    <a href="https://faq-vn.uniqlo.com/articles/vi/FAQ/%C4%90i%E1%BB%81u-kho%E1%BA%A3n-s%E1%BB%AD-d%E1%BB%A5ng"
                                        className={cx('policy-heading')} style={{marginBottom: '8px'}}>
                                        ĐIỀU KHOẢN SỬ DỤNG
                                    </a>
                                    <a href="https://faq-vn.uniqlo.com/articles/vi/FAQ/Ch%C3%ADnh-s%C3%A1ch-b%E1%BA%A3o-m%E1%BA%ADt"
                                        className={cx('policy-heading')}>
                                        CHÍNH SÁCH BẢO MẬT
                                    </a>
                            </div>
                            <TextButton href={'#'}>ĐĂNG NHẬP</TextButton>
                            <div className={cx('forgot-password')}>
                                <a href="/password/reset"
                                    className={cx('policy-heading')}>
                                    QUÊN MẬT KHẨU CỦA BẠN?
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className={cx('separator')}></div>
                    <div className={cx('signup-frame')}>
                        <div className={'auth-account-title ' + cx('login-title')}>
                            TẠO MỘT TÀI KHOẢN
                        </div>
                        <div className='auth-account-text' style={{marginBottom: '40px'}}>
                            Hãy tạo tài khoản ngay ! Bạn có thể nhận được các dịch vụ đặc biệt cho riêng bạn như kiểm tra lịch sử mua hàng và nhận phiếu giảm giá cho thành viên. Đăng ký miễn phí ngay hôm nay!
                        </div>
                        <TextButton href={'/signup'}>TẠO TÀI KHOẢN</TextButton>
                    </div>
                </div>
            </div>
            <div className={cx('fotter')}>
                <div className={'container ' + cx('fotter-text')}>
                    BẢN QUYỀN THUỘC CÔNG TY TNHH UNIQLO. BẢO LƯU MỌI QUYỀN.
                </div>
            </div>
        </Account>
    )
}

export default Login;