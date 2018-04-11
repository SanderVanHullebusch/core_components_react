import React from 'react';
import classNames from 'classnames';

const Radio = ({
  id,
  name,
  checked,
  children,
  disabled,
}) => {
  const radioClass = classNames(
    'a-input__radio'
  );
  return (
    <div class={radioClass}>
      <input type="radio" id={id} name={name} checked={checked} disabled={disabled} />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default Radio;