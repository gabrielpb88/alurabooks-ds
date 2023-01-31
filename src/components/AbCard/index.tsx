import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div<CardProps>`
  padding: 48px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  ${(props: CardProps) => {
    if (props.size === 'sm') {
      return css`
         {
          max-width: 380px;
        }
      `;
    }
    if (props.size === 'md') {
      return css`
         {
          max-width: 550px;
        }
      `;
    }
    return css`
       {
        max-width: 725px;
      }
    `;
  }}
`;

export interface CardProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const AbCard = ({ children, size = 'sm' }: CardProps) => {
  return <StyledCard size={size}>{children}</StyledCard>;
};
