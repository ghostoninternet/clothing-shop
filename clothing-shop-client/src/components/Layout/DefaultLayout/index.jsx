import Header from '../components/Header'
import Footer from '../components/Footer';

import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function DefaultLayout( { children } ) {
    return ( 
        <div>
            <Header /> 
                <div className={cx('content')}>
                    {children}
                </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout;