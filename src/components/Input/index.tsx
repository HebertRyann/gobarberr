import React, { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from "react";
import { Container, Error } from './styles';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import Toottip from '../Tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  constainerStyle?: object;
}

const Input: React.FC<InputProps> = ({ name, constainerStyle, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, error, defaultValue, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value)

  }, [])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled} style={constainerStyle}>
      { Icon && <Icon size={20} />}
      <input

        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />


      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} color={'#c53030'} />
        </Error>
      )}
    </Container>
  );
};

export default Input;