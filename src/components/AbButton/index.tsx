import React from 'react';
import styled, { css } from 'styled-components';

const ScButton = styled.button<ButtonProps>`
  background: ${(props: ButtonProps) =>
    props.variant === 'primary' ? '#eb9b00' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  font-size: 20px;
  cursor: pointer;
  color: ${(props: ButtonProps) =>
    props.variant === 'primary' ? '#fff' : '#eb9b00'};
  ${(props: ButtonProps) =>
    props.variant === 'primary'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #eb9b00;
          }
        `}
`;

export interface ButtonProps {
  children?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const AbButton = ({
  children,
  variant = 'primary',
  onClick,
}: ButtonProps) => {
  return (
    <ScButton variant={variant} onClick={onClick}>
      {children}
    </ScButton>
  );
};
