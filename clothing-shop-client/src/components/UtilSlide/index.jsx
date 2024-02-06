import { useRef } from "react";

import classNames from "classnames/bind";
import styles from './UltilSlide.module.scss'
import SlideBlock from "./components/SlideBlock";

const cx = classNames.bind(styles)

function UtilSlide({ children, title, titlePosition = 'left', blocks }) {
    const titleRef = useRef()
    if (titlePosition == 'mid') {
        titleRef.current.classList.add(cx('title-mid'))
    }

    return ( 
        <div className={cx('util')}>
            <div className={cx('util-title')} ref={titleRef}>{title}</div>
            <div className={cx('util-content')}>
                {blocks.map((X, index) => {
                    return <SlideBlock imgSrc={X.imgSrc} title={X.title} 
                        description={X.description} link={X.link} key={index}>
                    </SlideBlock>
                })}
            </div>
        </div>
    )
}

export default UtilSlide;