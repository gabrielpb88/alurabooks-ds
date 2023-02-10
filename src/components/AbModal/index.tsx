import React, { ReactNode } from 'react';
import {
  BackgroundModal,
  CloseButton,
  StyledModal,
  Title,
  TitleWrapper,
} from './AbModal.styles';
// @ts-ignore
import close from './close.svg';

export interface ModalProps {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  title?: string;
}

export const AbModal = ({ open, onClose, title, children }: ModalProps) => {
  if (!open) {
    return <></>;
  }
  return (
    <>
      <BackgroundModal onClick={onClose}/>
      <StyledModal>
        <TitleWrapper>
          {title && <Title>{title}</Title>}
          <CloseButton onClick={onClose}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3334 2.54699L17.4534 0.666992L10.0001 8.12033L2.54675 0.666992L0.666748 2.54699L8.12008 10.0003L0.666748 17.4537L2.54675 19.3337L10.0001 11.8803L17.4534 19.3337L19.3334 17.4537L11.8801 10.0003L19.3334 2.54699Z"
                fill="url(#paint0_linear_119_5681)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_119_5681"
                  x1="8.46613"
                  y1="-1.57301"
                  x2="35.4472"
                  y2="1.99959"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#002F52" />
                  <stop offset="1" stop-color="#326589" />
                </linearGradient>
              </defs>
            </svg>
          </CloseButton>
        </TitleWrapper>
        {children}
      </StyledModal>
    </>
  );
};
