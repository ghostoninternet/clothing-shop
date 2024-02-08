import classNames from 'classnames/bind'
import styles from './ResetPassword.module.scss'
import { Fragment, useEffect } from 'react';

const cx = classNames.bind(styles)

function ResetPassword() {
    useEffect(() => {
        document.title = 'Đặt lại mật khẩu';
    }, []);
    return ( 
        <Fragment>
            
        </Fragment>
    )
}

export default ResetPassword;