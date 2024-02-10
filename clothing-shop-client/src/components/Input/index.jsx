import classNames from "classnames/bind";
import styles from './Input.module.scss'
import { Fragment } from "react";
const cx = classNames.bind(styles)

function Input({ title, type, placeholder, mgBottom, showPasswordFnc, signup=false, width }) {
    if (type == 'password') {
        if (signup)
            return (
                <div style={{marginBottom: mgBottom}}>
                    <div style={{display: 'flex'}}>
                        <div className={'auth-account-heading ' + cx('auth-account-heading')}>{title}</div>
                        <input type={type} className='auth-account-input'
                                required placeholder={placeholder} id="inputPassword"/>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div className={cx('empty-block')}></div>
                        <p className={'auth-account-note-text '+cx('auth-account-note-text')}>Mật khẩu cần có ít nhất 08 ký tự (bao gồm cả chữ và số). Chỉ có thể sử dụng các ký tự đặc biệt này -_.@</p>
                    </div>
                    
                    <div className='show-password'> 
                        <input className='show-password-input' type="checkbox" id="showPassword" onClick={showPasswordFnc}/>
                        <label htmlFor="checkbox1">
                            <span className='show-password-text'>Hiện mật khẩu</span>
                        </label>
                    </div>
                </div>
            )
        return (
            <div style={{marginBottom: mgBottom}}>
                <div className='auth-account-heading'>{title}</div>
                <input type={type} className='auth-account-input'
                        required placeholder={placeholder} id="inputPassword"/>
                <p className='auth-account-note-text'>Mật khẩu cần có ít nhất 08 ký tự (bao gồm cả chữ và số). Chỉ có thể sử dụng các ký tự đặc biệt này -_.@</p>
                <div className='show-password'> 
                    <input className='show-password-input' type="checkbox" id="showPassword" onClick={showPasswordFnc}/>
                    <label htmlFor="checkbox1">
                        <span className='show-password-text'>Hiện mật khẩu</span>
                    </label>
                </div>
            </div>
        )
    }
    if (signup) {
        if (type == 'date') {
            return (
                <Fragment>
                    <div style={{marginBottom: mgBottom, display: 'block'}}>
                        <div style={{display: 'flex'}}>
                            <div className={'auth-account-heading ' + cx('auth-account-heading')}>{title}</div>
                            <div style={{width: '100%'}}>
                                <input style={{width: width}} type={type} className='auth-account-input'
                                        required placeholder={placeholder}/>
                            </div>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div className={cx('empty-block')}></div>
                            <div style={{width: '100%', marginLeft: '24px'}}>
                                <p className={'auth-account-note-text '+cx('auth-account-note-text')}>Không thể chỉnh sửa ngày sinh sau khi bạn đăng ký tài khoản. </p>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }

        if (type == 'radio') {
            return (
                <Fragment>
                    <div style={{marginBottom: mgBottom, display: 'flex'}}>
                        <div style={{fontSize: '18px'}} className={'auth-account-heading ' + cx('auth-account-heading')}>{title}</div>
                        <div style={{width: '100%', display: 'flex'}}>
                            <input type={type} className={'auth-account-input ' + cx('radio-input')}
                                    required placeholder={placeholder} name="gender" value='Nam' id="Nam"/>
                            <label htmlFor="Nam">Nam</label>
                            <input type={type} className={'auth-account-input ' + cx('radio-input')}
                                    required placeholder={placeholder} name="gender" value='Nữ' id="Nữ"/>
                            <label htmlFor="Nữ">Nữ</label>
                            <input type={type} className={'auth-account-input ' + cx('radio-input')}
                                    required placeholder={placeholder} name="gender" value='Bỏ Chọn' id="Bỏ Chọn"/>
                            <label htmlFor="Bỏ Chọn">Bỏ Chọn</label>
                        </div>
                    </div>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <div style={{marginBottom: mgBottom, display: 'flex'}}>
                    <div className={'auth-account-heading ' + cx('auth-account-heading')}>{title}</div>
                    <div style={{width: '100%'}}>
                        <input style={{width: width}} type={type} className='auth-account-input'
                                required placeholder={placeholder}/>
                    </div>
                </div>
            </Fragment>
        )
    }
        
    return (
        <Fragment>
            <div style={{marginBottom: mgBottom}}>
                <div className='auth-account-heading'>{title}</div>
                <input type={type} className='auth-account-input'
                        required placeholder={placeholder}/>
            </div>
        </Fragment>
    )
}

export default Input;