import React from 'react';
import PropTypes from 'prop-types';
import _omit from 'lodash/omit';

import BEM from 'components/utils/bem';

import './style.scss';

const FontIcon = props => {
    const { name, color, size, className, ...restProps } = _omit(
        props,
        ['micro', 'mini', 'small', 'medium', 'large', 'xlarge', 'xnano', 'nano', 'xxlarge', 'disabled']
    );

    const b = BEM('fontIcon');

    const classes = b.mix(className)({
        micro: props.micro,
        mini: props.mini,
        small: props.small,
        medium: props.medium,
        large: props.large,
        xlarge: props.xlarge,
        xxlarge: props.xxlarge,
        nano: props.nano,
        xnano: props.xnano,
        disabled: props.disabled,
    });
    const iconClass = b('icon');
    const style = {
        color: color,
        fontSize: size,
    };

    return (
        <i className={`${classes} ${iconClass}-${name}`}
            style={style}
            {...restProps} />
    );
};

FontIcon.propTypes = {
    color: PropTypes.string,
    micro: PropTypes.bool,
    mini: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    xxlarge: PropTypes.bool,
    nano: PropTypes.bool,
    xnano: PropTypes.bool,
    disabled: PropTypes.bool,
};

FontIcon.defaultProps = {
    color: '#369',
    micro: false,
    mini: false,
    small: false,
    medium: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    nano: false,
    xnano: false,
    disabled: false,
};

export default FontIcon;
