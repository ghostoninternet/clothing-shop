import Header from './components/Header'
import Footer from './components/Footer';

import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles)

function DefaultLayout() {
    return ( 
        <div>
            <Header /> 
                <div className={cx('content')}>
                    <Outlet />
                </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout;