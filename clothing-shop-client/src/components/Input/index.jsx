import classNames from "classnames/bind";
import styles from './Input.module.scss'
import { Fragment } from "react";
const cx = classNames.bind(styles)

function Input({ title, type, placeholder, mgBottom, showPasswordFnc }) {
    if (type == 'password')
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