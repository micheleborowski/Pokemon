import { Link } from "react-router-dom";
import styled from "styled-components";

import pokemonLogo from "../assets/pokemonLogo.png";
const DivPage= styled.div`
    background-image: linear-gradient(to right, rgba(0,214,143,1),  rgba(0,214,143,0.48) );
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
const ImagePokemon = styled.img`
    width: 250px;
`;

const LogoDiv = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Botao = styled.button`
  border-radius: 30px;
  border-style: none;
  background-color: #ff3d71;
  width: 100px;
  height: 50px;
`;

const StyledLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  margin: 1rem;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
`;

function Home() {
  return (
    <DivPage>
    <LogoDiv>
      <ImagePokemon src={pokemonLogo}></ImagePokemon>
      <Botao>
        <StyledLink to="/map">
          Start
        </StyledLink>
      </Botao>
    </LogoDiv>
    </DivPage>
  );
}

export default Home;
