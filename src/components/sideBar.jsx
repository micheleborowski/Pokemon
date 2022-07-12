import styled from "styled-components";
import { useState } from "react";

import icon from "../assets/Icon.png";
import backgroundIcon from "../assets/backgroundIcon.png";
import plus from "../assets/plus.png";
import Modal from "../UI/Modal/Modal";
import Dialog from "./Map/Dialog/Dialog";

const SideList = styled.aside`
  background-color: transparent;
  position: absolute;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: vh; // area visivel
`;

const Lista = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

const ElementoVazio = styled.div`
  position: absolute;

  width: 53px;
  height: 53px;

  cursor: pointer;

  background-image: url(${backgroundIcon});

  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconPokemon = styled.img`
  height: 53px;
  width: 53px;
`;

const ElementoImagem = styled.div`
  position: absolute;

  cursor: pointer;

  background-color: white;
  border-radius: 100%;
  border: 4px solid #00d68f;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivAdiciona = styled.div`
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

function SideBar({ pokemonList, onSelectedPokemon }) {

  function showModal(pokemonSelected) {
    onSelectedPokemon(pokemonSelected);
  }

  return (
    <>
      <SideList>
        <ul>
          {pokemonList.map((item) => {

            return item?.id ? (
              <Lista>
                <ElementoImagem onClick={()=>showModal(item)}>
                  <IconPokemon
                    src={
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                      item.id +
                      ".png"
                    }
                  ></IconPokemon>
                </ElementoImagem>
              </Lista>
            ) : (
              <Lista>
                <ElementoVazio>
                  <img src={icon}></img>
                </ElementoVazio>
              </Lista>
            );
          })}
          <Lista>
            <DivAdiciona >
              <img src={plus}></img>
            </DivAdiciona>
          </Lista>
        </ul>
      </SideList>
    </>
  );
}
export default SideBar;
