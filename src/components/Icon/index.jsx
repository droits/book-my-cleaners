import React from 'react';
import PropTypes from 'prop-types';
import _omit from 'lodash/omit';

import BEM from 'components/utils/bem';
import Icons from './Icons';

import './style.scss';

const Icon = props => {
    const { name, size, color, className, viewBox, ...restProps } = _omit(
        props,
        ['xmini', 'mini', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'disabled']
    );

    const path = {
        fill: color,
    };
    const getPath = iconName => {
        if (iconName in Icons) {
            return Icons[iconName];
        }

        console.warn(`icon ${iconName} does not exist.`);
        return '';
    };

    const classes = BEM('icon').mix(className)({
        xmini: props.xmini,
        mini: props.mini,
        small: props.small,
        medium: props.medium,
        large: props.large,
        xlarge: props.xlarge,
        xxlarge: props.xxlarge,
        disabled: props.disabled,
    });

    const width = size instanceof Array ? size[0] : size;
    const height = size instanceof Array ? size[1] : size;

    return (
        <svg
            className={classes}
            width={`${width}px`}
            height={`${height}px`}
            viewBox={viewBox}
            {...restProps}>
            <path style={path} d={getPath(name)} />
        </svg>
    );
};

Icon.propTypes = {
    xmini: PropTypes.bool,
    mini: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    xxlarge: PropTypes.bool,
    disabled: PropTypes.bool,
};

Icon.defaultProps = {
    size: 12,
    viewBox: '0 0 1024 1024',
    xmini: false,
    mini: false,
    small: false,
    medium: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    disabled: false,
};

export default Icon;
