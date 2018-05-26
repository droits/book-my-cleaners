import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import _map from 'lodash/map';

import TextInput from 'components/Form/components/TextInput';
import Form from 'components/Form';
import BEM from 'components/utils/bem';

import './style.scss';

class BookNow extends Component {
    render() {
        const items = [
            {
                name: 'iron'
            },
            {
                name: 'clean'
            },
            {
                name: 'cloth'
            }
        ];
        const b = BEM('book-now');

        return (
            <Form className={b()}>
                <Field 
                    label='Full Name'
                    name='full-name'
                    component={TextInput}
                />
                <Field 
                    label='Email'
                    name='email'
                    component={TextInput}
                />
                <Field 
                    label='Mobile Number'
                    name='mobile'
                    component={TextInput}
                />
                <div className={b('container').mix('row text-center').toString()}>
                    {
                        _map(items, item => {
                            return (
                                <Fragment key={item.name}>
                                    <input type='checkbox' id={item.name} />
                                    <label htmlFor={item.name}>{item.name}</label>
                                </Fragment>
                            )
                        })
                    }
                </div>                
            </Form>
        );
    }
}

export default reduxForm({
    form: 'bookNow'
})(BookNow);