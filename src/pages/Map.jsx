import React from 'react';
import styled from "styled-components";

import pageBackground from '../assets/pageBackground.png';
import ashFront from '../assets/ashFront.png';
import SideBar from '../components/sideBar';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;


const ImageAshFront = styled.img`
    position: absolute;

    &:hover{
        border-color: black;
    }
    
`;

const DivPage= styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.35);
    background-image: url(${pageBackground});
    background-size: cover;
`;


function Map(){
    return(
        <DivPage>
            <SideBar></SideBar>
            <Container>
                <ImageAshFront src={ashFront} ></ImageAshFront>  
            </Container>
            
        </DivPage>
    )
}

export default Map;