import React from 'react';
import _noop from 'lodash/noop';
import PropTypes from 'prop-types';

import BEM from 'components/utils/bem';

import './style.scss';

const Form = ({ onSubmit, children, className, autoComplete, ...restProps }) => (
    <form
        className={BEM('form').mix(className).toString()}
        onSubmit={onSubmit}
        noValidate
        autoComplete={autoComplete}
        {...restProps}>
        {children}
    </form>
);

Form.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    autoComplete: PropTypes.string,
};

Form.defaultProps = {
    className: '',
    onSubmit: _noop,
    children: null,
    autoComplete: 'off',
};

export default Form;

// export FormDate from 'components/Form/components/FormDate';
// export FormError from 'components/Form/components/FormError';
// export FormField from 'components/Form/components/FormField';
// export FormValid from 'components/Form/components/FormValid';
// export FormGroup from 'components/Form/components/FormGroup';
// export FormInput from 'components/Form/components/FormInput';
// export FormLabel from 'components/Form/components/FormLabel';
// export FormSelect from 'components/Form/components/FormSelect';
// export FormMultiSelect from 'components/Form/components/FormMultiSelect';
// export FormMultiSelection from 'components/Form/components/FormMultiSelection';
// export FormStatus from 'components/Form/components/FormStatus';
// export FormTextarea from 'components/Form/components/FormTextarea';
// export FormAutoSuggest from 'components/Form/components/FormAutoSuggest';
// export FormCheckbox from 'components/Form/components/FormCheckbox';
// export FormRadio from 'components/Form/components/FormRadio';
// export FormStatic from 'components/Form/components/FormStatic';
// export FormButton from 'components/Form/components/FormButton';
// export FormNumber from 'components/Form/components/FormNumber';
// export FormTime from 'components/Form/components/FormTime';