import React from 'react';
import styled from 'styled-components';

export interface AbTagProps {
  children?: string;
}

export const StyledTag = styled.span`
  padding: 1rem 2rem;
  color: #fff;
  font-weight: 700;
  background-color: #eb9b00;
`;

export const AbTag = ({ children }: AbTagProps) => {
  return <StyledTag>{children}</StyledTag>;
};
