import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BEM from 'components/utils/bem';
import './style.scss';

export default class Home extends Component {
    render() {
        const b = BEM('home');

        return (
            <div className={b()}>
                <div className={b('img-wrapper').toString()}>                    
                    <img className={b('image').mix('img-fluid').toString()} src='src/img/cleaner.jpg' />
                    <div className={b('img-overlay').toString()}>
                        <p className={b('message').toString()}>The objective of cleaning is not just to clean, <br/>but to feel happiness living within that environment.</p>
                        <Link
                            to='/book-now'
                            className={b('button').mix('btn btn-lg btn-primary').toString()}>Book Now</Link>
                    </div>
                </div>
            </div>
        );
    }
}