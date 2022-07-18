import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivPage = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(0, 214, 143, 1),
    rgba(0, 214, 143, 0.48)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const ImagePokemon = styled.img`
  width: 250px;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Botao = styled.button`
  border-radius: 30px;
  border-style: none;
  background-color: #ff3d71;
  width: 100px;
  height: 50px;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 1rem;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
`;

export const Body = styled.body`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 214, 143, 1),
    rgba(0, 214, 143, 0.48)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HTML = styled.html`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 214, 143, 1),
    rgba(0, 214, 143, 0.48)
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;
