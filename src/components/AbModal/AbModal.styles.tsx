import styled from 'styled-components';

export const BackgroundModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(101, 101, 101, 0.85);
`;

export const StyledModal = styled.div`
  position: fixed;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 4px 4px 24px -4px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  min-width: 320px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: #eb9b00;
`;
