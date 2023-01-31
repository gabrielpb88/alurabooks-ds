import React from 'react';
import { StyledCard } from './AbStyle.style';

export interface CardProps {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const AbCard = ({ children, size = 'sm' }: CardProps) => {
  return <StyledCard size={size}>{children}</StyledCard>;
};
