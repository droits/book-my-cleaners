import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import BEM from 'components/utils/bem';

const FormInput = ({
    input,
    className,
    label,
    placeholder,
    type,
    meta: { touched, error },
    disabled,
    autocomplete
}) => {
    const b = BEM('form');
    const hasError = !!(touched && error);
    const hasSuccess = !!(touched && !error);
    const classes = b('input').mix(className);

    return (
        <div className={b('input')('parent').toString()}>
            <input
                {...input}
                type={type}
                placeholder={placeholder}
                className={classes().toString()}
                disabled={disabled}
                autoComplete={autocomplete}
            />
            {
                touched && error ?
                    <span className={b('input')('errorSpan').toString()}>{error}</span>
                    :
                    null
            }
        </div>
    );
};

FormInput.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    autoComplete: PropTypes.bool,
    placeholder: PropTypes.string,
};

FormInput.defaultProps = {
    type: 'text',
    className: '',
    disabled: false,
    autocomplete: 'off',
    placeholder: '',
};

export default FormInput;