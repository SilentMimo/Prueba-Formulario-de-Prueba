import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Label, Required } from './InputFieldElements';

const InputField = ({ label, name, type, value, onChange }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label} <Required> *</Required></Label>
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;