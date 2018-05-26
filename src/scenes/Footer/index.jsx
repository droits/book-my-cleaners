import React from 'react';
import PropTypes from 'prop-types';

import BEM from 'components/utils/bem';

import './style.scss';

const Footer = ({ className, ...restProps }) => {
    const b = BEM('footer');

    return (
        <div
            className={b.mix(`${className} container-fluid`).toString()}
            {...restProps}>
            <div className={b('wrapper').toString()}>
                <div className={b('content').mix('row').toString()}>
                    <div className='col-lg-4 col-xs-12 text-center'>
                        <p className={b('copyright').toString()}>
                            &copy; Book My Cleaners.
                        </p>
                    </div>
                    <div className='col-lg-4 col-xs-12 text-center'>
                        <p className={b('copyright').toString()}>
                            &copy; Book My Cleaners.
                        </p>
                    </div>
                    <div className='col-lg-4 col-xs-12 text-center'>
                        <p className={b('copyright').toString()}>
                            &copy; Book My Cleaners.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

Footer.defaultProps = {
    className: '',
};

export default Footer;