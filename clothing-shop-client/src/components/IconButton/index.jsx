import classNames from "classnames/bind";
import styles from './IconButton.module.scss'
import { Link } from 'react-router-dom'


const cx = classNames.bind(styles)

function IconButton( {to, href, children, onClick, ...passProps} ) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper')

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    )
}

export default IconButton;