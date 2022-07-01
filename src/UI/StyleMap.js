import styled, { keyframes } from "styled-components";

import pageBackground from "../assets/pageBackground.png";
import ashLeft from "../assets/ashLeftLeg.png";
import ashRight from "../assets/ashRightLeg.png";


export const DivRolagem = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`;
export const DivInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  gap: 32px;

  width: 280px;
  height: 48px;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PokeBola = styled.button`

`;
export const Image = styled.img`
height: 140px;
width: 140px;

  border-radius: 100%;
  top: 80%;
  bottom: 0;
  background-color: Transparent;
  border-color: Transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;`;

export const PokemonImage = styled.img`
  height: 247px;
  width: 247px;
  left: 48px;
  top: 32px;
  border-radius: 100%;
  border: 4px solid #00D68F;
  background: white;
`;

export const Nome = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const Fisico = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const FisicoText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #2e3a59;
`;

export const Atributos = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-transform: uppercase;

  color: #2e3a59;
`;

export const DivHabilidades= styled.div`
display:flex;`;

export const Habilidades = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  text-transform: uppercase;

  color: #2E3A59;
`;

export const Tipos = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
  background: #67af32;
  height: 32px;
  width: 99px;
  left: 0px;
  top: 0px;
  border-radius: 42px;
  text-align: center;
`;

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
