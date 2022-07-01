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
  padding: 2rem;

  height: 520px;
  width: 360px;

  left: 0px;
  top: 0px;
  border-radius: 8px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  background-color: #fff;
  border-radius: 2px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  overflow:auto;
  // overflow: hidden;
`;
