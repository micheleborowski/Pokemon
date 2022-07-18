import styled, { keyframes } from "styled-components";

import pageBackground from "../../assets/pageBackground.png";
import ashLeft from "../../assets/ashLeftLeg.png";
import ashRight from "../../assets/ashRightLeg.png";

export const ChangeAnimation = keyframes`  
  from {background-image: url(${ashLeft}); }
  to { background-image: url(${ashRight}); }
`;
export const DivRunning = styled.div`
  position: relative;
  width: 44px;
  height: 54px;
  margin: 0 auto;
  animation-name: ${ChangeAnimation};
  animation-duration: 0.25s;
  animation-iteration-count: infinite;
`;

export const DivLoading = styled.div``;

export const ImageLoading = styled.img``;

export const ImageSearch = styled.img`
  opacity: 0;
  transition: opacity 0.2s linear;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const TooltipElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover > ${ImageSearch} {
    opacity: 1;
  }
`;

export const ImageAshFront = styled.img`
  cursor: pointer;
`;

export const DivPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  background-image: url(${pageBackground});
  background-size: cover;
`;

export const DivPokeBola = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  height: 140px;
  width: 140px;

  position: fixed;
  bottom: 20px;
  z-index: 1;

  cursor: pointer;
`;

export const DivFree = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivColor = styled.div`
  height: 56px;
  width: 221px;
  border-radius: 42px;

  background: #ff3d71;

  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 80px;
  z-index: 1;

  cursor: pointer;
`;
export const TextFree = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  text-transform: uppercase;

  color: #ffffff;
`;

export const ImageError = styled.img``;

