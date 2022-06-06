import React from 'react';

const FormInput = (props) => {
  const id = props.id || 'text-input-' + props.name;
  const { extraClass, label, type, placeholder, value, change, name } = props;

  return (
    <div className={'form-group ' + (extraClass || '')}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        type={type || 'text'}
        name={name || ''}
        className={'form-control ' + (extraClass || '')}
        placeholder={placeholder || ''}
        value={value}
        onChange={change}
      />
    </div>
  );
};

export default FormInput;
