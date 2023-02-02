import React from 'react';
import styled from 'styled-components';

export interface AbTextFieldProps {
  label?: string;
  inputType?: 'text' | 'password' | 'email' | 'date';
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  margin-top: 0.5rem;
`;

const Label = styled.label`
  color: #002f52;
  font-weight: 700;
  margin-left: 1rem;
`;

const Input = styled.input`
  border: 1px solid #002f52;
  border-radius: 1rem;
  padding: 0.5rem;
  margin-top: 0.2rem;
  width: 15rem;

  :focus {
    outline: none;
  }

  :invalid {
    border: 0.5px solid red;
    background: #f6c5c5;
  }
`;

export const AbTextField = ({
  label,
  inputType,
  placeholder,
  value = '',
  onChange,
}: AbTextFieldProps) => {
  return (
    <TextFieldWrapper>
      <Label>{label}</Label>
      <Input
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </TextFieldWrapper>
  );
};
export default AbTextField;
