import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export interface CardProps {
  children: React.ReactNode;
}

export const AbCard = ({ children }: CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};
