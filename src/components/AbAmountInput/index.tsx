import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    font-size: 24px;
    color: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  }

  span {
    font-size: 18px;
    line-height: 27px;
    margin: 0 10px;
    color: #002f52;
  }
`;

export interface AbAmountInputProps {
  onChange: (value: number) => void;
  value: number;
}

export const AbAmountInput = ({ onChange, value }: AbAmountInputProps) => {
  return (
    <Wrapper>
      <button onClick={() => onChange(value - 1)}>-</button>
      <span>{value}</span>
      <button onClick={() => onChange(value + 1)}>+</button>
    </Wrapper>
  );
};
export default AbAmountInput;
