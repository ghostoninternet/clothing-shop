import classNames from 'classnames/bind'
import styles from './Signup.module.scss'
import { Fragment, useEffect } from 'react';

const cx = classNames.bind(styles)

function Signup() {
    useEffect(() => {
        document.title = 'Tạo tài khoản';
    }, []);
    return ( 
        <Fragment>
            
        </Fragment>
    )
}

export default Signup;