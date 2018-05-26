import React, { Component } from 'react';

import BEM from 'components/utils/bem';

import './style.scss';

export default class Header extends Component {

    render() {
        const b = BEM('header');

        return (
            <nav className={b('wrapper').mix('navbar navbar-expand-lg fixed-top navbar-light').toString()}>
                <a className={b('link-logo').mix('navbar-brand').toString()} href="#">
                    <img className={b('logo').mix('img-fluid').toString()} src='src/img/Landscape(1).png' />
                </a>
                <button className={b('burger').mix('navbar-toggler').toString()} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={b('burger')('icon').mix('navbar-toggler-icon').toString()}></span>
                </button>

                <div className={b('right-link').mix('collapse navbar-collapse').toString()} id="navbarSupportedContent">
                    <ul className={b('unordered-list').mix('navbar-nav ml-auto').toString()}>
                        <li className={b('li-item').mix('nav-item active').toString()}>
                            <a className={b('link').mix('nav-link').toString()} href="#">CALL 9360933933 <span className={b('sr').mix('sr-only').toString()}>(current)</span></a>
                        </li>
                        <li className={b('li-item').mix('nav-item').toString()}>
                            <a className={b('link').mix('nav-link').toString()} href="#">Join as a Housekeeper</a>
                        </li>
                        <button className={b('button').mix('btn btn-primary btn-sm my-2 my-sm-0').toString()} type="submit">LOGIN</button>
                    </ul>                    
                </div>
            </nav>
        );
    }
}