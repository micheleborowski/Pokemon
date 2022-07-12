import styled, { keyframes } from "styled-components";

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;

  animation: ${FadeInAnimation} 0.2s forwards;
`;

export const Content = styled.div`
  position: relative;

  height: 559px;
  width: 360px;
  
  right:0;
  left: 0;
  top: 0;
  bottom:0;
  border-radius: 24px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  background-color: #F7F9FC;

  overflow: auto;
`;
