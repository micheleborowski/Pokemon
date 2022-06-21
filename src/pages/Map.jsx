import React from "react";
import styled from "styled-components";

import pageBackground from "../assets/pageBackground.png";
import ashFront from "../assets/ashFront.png";
import SideBar from "../components/sideBar";
import searchTooltip from "../assets/searchTooltip.png";

const TooltipHoverElement = styled.div``;

const ImageSearch = styled.img`
  opacity: 0;
  transition: opacity 0.2s linear;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TooltipElement = styled.div`
&:hover + ${ImageSearch}{
  opacity: 0;
}`;

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

  return (
    <DivPage>
      <SideBar></SideBar>
      <Container>
        <TooltipHoverElement><ImageSearch src={searchTooltip}></ImageSearch></TooltipHoverElement>
        <TooltipElement><ImageAshFront src={ashFront}></ImageAshFront></TooltipElement>                                                            
      </Container>
    </DivPage>
  );
}

export default Map;
