import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import BEM from 'components/utils/bem';

export default class TextInput extends Component {

    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        defaultValue: PropTypes.string,
        margin: PropTypes.string,
        multiline: PropTypes.bool,
    }

    static defaultProps = {
        id: '',
        label: '',
        placeholder: '',
        className: '',
        defaultValue: '',
        margin: 'normal',
        multiline: false,
        meta: { error: 'Error', touched: true },
    }

    render() {
        const { id, label, placeholder, className, margin, defaultValue, multiline, meta: { touched, error } } = this.props;
        const b = BEM('form');
        const classes = b('text-input').mix(className);

        return (
            <Fragment>
                <TextField
                    id={id}
                    label={label}
                    placeholder={placeholder}
                    className={classes.toString()}
                    margin={margin}
                    defaultValue={defaultValue}
                    multiline={multiline}
                />
                {
                    touched && error ?
                        <span className={b('input')('errorSpan').toString()}>{error}</span>
                        :
                        null
                }
            </Fragment>            
        )
    }
}