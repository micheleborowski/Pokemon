import React from 'react';
import styled from "styled-components";

import pageBackground from '../assets/pageBackground.png';
import ashFront from '../assets/ashFront.png';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageMap= styled.img`
    width: 100%;
    height: 100%;
`;

const ImageAshFront = styled.img`
    position: absolute;
    
`;

const DivPage= styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.35);
`;

function Map(){
    return(
        <DivPage>
            <Container>
                <ImageMap src={pageBackground}></ImageMap>
                <ImageAshFront src={ashFront} ></ImageAshFront>  
            </Container>
        </DivPage>
    )
}

export default Map;