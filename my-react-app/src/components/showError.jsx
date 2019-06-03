import React from 'react';
import { findAllErrors } from '../core/validation-Service';
import PropTypes from 'prop-types';

function ShowErrors(props) {
    return (
        <div>
            {
                findAllErrors(props.validators, props.value).map(
                    (err, i) => <li key={i} >{err}</li>)
            }
        </div>
    )
}

ShowErrors.propTypes = {
    value: PropTypes.any.isRequired,
    validators: PropTypes.object.isRequired
}

export default ShowErrors;