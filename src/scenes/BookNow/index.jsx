import React, { Component, Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import _map from 'lodash/map';

import TextInput from 'components/Form/components/TextInput';
import Form from 'components/Form';
import BEM from 'components/utils/bem';
import FontIcon from 'components/FontIcon';

import './style.scss';

class BookNow extends Component {
    render() {
        const items = [
            {
                name: 'iron',
                icon: 'user'
            },
            {
                name: 'clean',
                icon: 'home'
            },
            {
                name: 'cloth',
                icon: 'power-bi'
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
                    <div className={b('child').mix('col-lg-12').toString()}>
                        {
                            _map(items, item => {
                                return (
                                    <Fragment key={item.name}>
                                        <input type='checkbox' id={item.name} />
                                        <label className={b('label').toString()} htmlFor={item.name}>
                                            <span className={b('label')('child').toString()}>
                                                {item.name}
                                                <FontIcon name={item.icon} color='#939393' size={20} />
                                            </span>                                        
                                        </label>
                                    </Fragment>
                                )
                            })
                        }
                    </div>                    
                </div>                
            </Form>
        );
    }
}

export default reduxForm({
    form: 'bookNow'
})(BookNow);