import React from "react";
import { useState } from "react";
import styled from "styled-components";

import pageBackground from "../assets/pageBackground.png";
import ashFront from "../assets/ashFront.png";
import SideBar from "../components/sideBar";
import searchTooltip from "../assets/searchTooltip.png";
import searchingTooltip from "../assets/searchingTooltip.png";
import ashLeft from "../assets/ashLeftLeg.png";
import ashRight from "../assets/ashRightLeg.png";

const DivRunning = styled.div``;

const DivLoading = styled.div``;

const ImageLoading = styled.img``;

const ImageAshLeft = styled.img``;

const ImageAshRight = styled.img``;


const ImageSearch = styled.img`
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const TooltipElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover > ${ImageSearch} {
    opacity: 1;
  }
`;

const ImageAshFront = styled.img`
  cursor: pointer;
`;

const DivPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  background-image: url(${pageBackground});
  background-size: cover;
`;

function Map() {
  const [loading, setLoading] = useState(false);
  //Enquanto não achar o pokemon a imagem fica transitando
  async function searchPokemon() {
    setLoading(true);
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(response);
    setTimeout(() => {setLoading(false)}, 5000);
    // tem um state que guarda esse tempo de transição do dado da api ao front
    // com esse state mudaria uma class do css para ter o bonequinho se movendo, no caso um transition
  }

  return (
    <DivPage>
      <SideBar></SideBar>
      <Container>
        {!loading && (
          <TooltipElement>
            <ImageSearch src={searchTooltip}></ImageSearch>
            <ImageAshFront
              onClick={searchPokemon}
              src={ashFront}
            ></ImageAshFront>
          </TooltipElement>
        )}

        {loading && (
          <DivLoading>
            <ImageLoading src={searchingTooltip}></ImageLoading>
            <DivRunning></DivRunning>
            <ImageAshLeft src={ashLeft}></ImageAshLeft>
            <ImageAshRight src={ashRight}></ImageAshRight>
          </DivLoading>
        )}
      </Container>
    </DivPage>
  );
}

export default Map;
