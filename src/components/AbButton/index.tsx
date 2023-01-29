import React from 'react';
import styled from 'styled-components';

const ScButton = styled.button`
  background: #eb9b00;
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  font-size: 20px;
  cursor: pointer;
  color: #fff;
  
  &:hover {
    background: #b87900;
    border: 2px solid #b87900;

  }
`

export interface ButtonProps {
  children: React.ReactNode;
}

export const AbButton = ({children}: ButtonProps) => {
  return (<ScButton>
    {children}
  </ScButton>)
}