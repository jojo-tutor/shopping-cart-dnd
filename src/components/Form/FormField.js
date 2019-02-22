import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';

const FormField = (props) => {
  const {
    form,
    value,
    onChange,
  } = props;

  const {
    id,
  } = form;

  const type = form.type || id;
  const required = form.required !== false;
  const label = `${startCase(id)}${required ? '*' : ''}`;

  return (
    <div className="field">
      <div className="label">
        { label }
      </div>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

FormField.propTypes = {
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default FormField;
