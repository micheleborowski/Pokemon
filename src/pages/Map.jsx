import React from "react";
import styled from "styled-components";

import pageBackground from "../assets/pageBackground.png";
import ashFront from "../assets/ashFront.png";
import SideBar from "../components/sideBar";
import searchTooltip from "../assets/searchTooltip.png";
const DivBotao = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Botao = styled.button`
opacity:0;
`;

const ImageSearch = styled.img`
  position: relative;
  opacity: 1;
  transition: opacity 0.2s linear;
  
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ImageAshFront = styled.div`
//   position: absolute;
  background-image: url(${ashFront});
  width: 64px;
  height: 64px;
  cursor: pointer;
&:hover + ${Botao}{
    opacity: 1;
    border
 }
 
`;

const DivPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  background-image: url(${pageBackground});
  background-size: cover;
`;

function Map() {
  return (
    <DivPage>
      <SideBar></SideBar>
      <Container>
        <DivBotao>
            <ImageAshFront> </ImageAshFront>
            <Botao>
                <ImageSearch src={searchTooltip}></ImageSearch>
            </Botao>
          
        </DivBotao>
      </Container>
    </DivPage>
  );
}

export default Map;
