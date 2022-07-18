import styled from "styled-components";

import backgroundIcon from "../../../assets/backgroundIcon.png";

export const SideList = styled.aside`
  background-color: transparent;
  position: absolute;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: vh; // area visivel
`;

export const Lista = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

export const ElementoVazio = styled.div`
  position: absolute;

  width: 53px;
  height: 53px;

  cursor: pointer;

  background-image: url(${backgroundIcon});

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconPokemon = styled.img`
  height: 53px;
  width: 53px;
`;

export const ElementoImagem = styled.div`
  position: absolute;

  cursor: pointer;

  background-color: white;
  border-radius: 100%;
  border: 4px solid #00d68f;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivAdiciona = styled.div`
  position: absolute;

  cursor: pointer;

  height: 53px;
  width: 53px;

  background: #ff3d71;

  border: 4px solid #db2c66;

  box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31),
    0px 20px 32px rgba(9, 30, 66, 0.25);
  border-radius: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
