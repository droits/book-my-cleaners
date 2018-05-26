import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _omit from 'lodash/omit';

import BEM from 'components/utils/bem';
import './style.scss';

const Button = props => {
    const { type, href, linkTo, className, children, title, ...restProps } = _omit(
        props,
        ['primary', 'info', 'warning', 'success', 'danger', 'block', 'small', 'gray', 'xsmall']
    );

    const handleClick = e => {
        const { disabled, onClick } = props;

        if (disabled) {
            e.preventDefault();
            return;
        }

        if (onClick) {
            onClick(e);
        }
    };

    const classes = BEM('button').mix(className)({
        primary: props.primary,
        info: props.info,
        warning: props.warning,
        success: props.success,
        danger: props.danger,
        block: props.block,
        small: props.small,
        xsmall: props.xsmall,
        gray: props.gray,
    });

    if (linkTo) {
        return (
            <Link
                to={linkTo}
                className={classes.toString()}
                onClick={handleClick}
                {...restProps}>
                {children}
            </Link>
        );
    } else if (href) {
        return (
            <a
                title={title}
                href={href}
                className={classes.toString()}
                onClick={handleClick}
                {...restProps}>
                {children}
            </a>
        );
    }
    return (
        <button
            title={title}
            type={type}
            className={classes.toString()}
            onClick={handleClick}
            {...restProps}>
            {children}
        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    info: PropTypes.bool,
    warning: PropTypes.bool,
    success: PropTypes.bool,
    danger: PropTypes.bool,
    block: PropTypes.bool,
    small: PropTypes.bool,
    xsmall: PropTypes.bool,
    gray: PropTypes.bool,
    title: PropTypes.string,
};

Button.defaultProps = {
    disabled: false,
    linkTo: '',
    href: '',
    className: '',
    type: 'button',
    onClick: _noop,
    primary: false,
    info: false,
    warning: false,
    success: false,
    danger: false,
    block: false,
    small: false,
    xsmall: false,
    gray: false,
    title: '',
};

export default Button; 