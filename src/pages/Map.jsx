// front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
import React from "react";
import { useState } from "react";

import Modal from "../UI/Modal/Modal";
import ashFront from "../assets/ashFront.png";
import SideBar from "../components/sideBar";
import searchTooltip from "../assets/searchTooltip.png";
import searchingTooltip from "../assets/searchingTooltip.png";
import pokeBola from "../assets/pokeBola.png";
import divider from "../assets/Divider.png";
import close from "../assets/Close.png";

import {
  PokemonImage,
  Nome,
  Fisico,
  FisicoText,
  Tipos,
  DivRunning,
  DivLoading,
  ImageLoading,
  ImageSearch,
  Container,
  TooltipElement,
  ImageAshFront,
  DivPage,
  PokeBola,
  DivInfos,
  Infos,
  Image,
  Atributos,
  Habilidades,
  DivHabilidades,
  DivRolagem,
} from "../UI/StyleMap";

function Map() {
  const [pokemonInfo, setPokemonInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  async function searchPokemon() {
    setLoading(true);
    const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";
    const idAleatorio = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const response = await fetch(`${apiPokemon}${idAleatorio(1, 807)}/`);
    const data = await response.json();

    const novoPokemon = {
      id: data.id,
      nome: data.name,
      hp: data.stats,
      altura: data.height,
      peso: data.weight,
      tipos: data.types,
      habilidades: data.abilities,
    };

    setTimeout(() => {
      setLoading(false);
      setPokemonInfo(novoPokemon);
    }, 5000);
  }
  console.log(pokemonInfo);

  function showPokemon() {
    setPokemonInfo(undefined);
    setPokemonList([...pokemonList, pokemonInfo]);
  }

  function closePortal(){
   setPokemonInfo(undefined); 
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

        {pokemonInfo && (
          <Modal isOpen={pokemonInfo}>
            <DivRolagem>
              <div>
                <img src={close} onClick={closePortal}></img>
                <PokemonImage
                  src={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                    pokemonInfo.id +
                    ".png"
                  }
                ></PokemonImage>
              </div>
              <Nome>{pokemonInfo.nome}</Nome>
              <DivInfos>
                <Infos>
                  <Fisico>hp</Fisico>
                  <FisicoText>45/45</FisicoText>
                </Infos>
                <img src={divider}></img>
                <Infos>
                  <Fisico>altura</Fisico>
                  <FisicoText>{pokemonInfo.altura}</FisicoText>
                </Infos>
                <img src={divider}></img>
                <Infos>
                  <Fisico>peso</Fisico>
                  <FisicoText>{pokemonInfo.peso}</FisicoText>
                </Infos>
              </DivInfos>
              <Atributos>tipo</Atributos>
              {pokemonInfo.tipos.map((tipo) => {
                return <Tipos>{tipo.type.name}</Tipos>;
              })}

              <Atributos>habilidades</Atributos>
              <DivHabilidades>
                {pokemonInfo.habilidades.map((habilidade) => {
                  return (
                    <Habilidades>{habilidade.ability.name + ", "}</Habilidades>
                  );
                })}
              </DivHabilidades>
            </DivRolagem>
            <Image
              onClick={showPokemon}
              src={pokeBola}
              style={{ position: "absolute" }}
            ></Image>
          </Modal>
        )}

        <ul>
          {pokemonList.map((pokemon) => {
            return <li>{pokemon.id}</li>;
          })}
        </ul>

        {loading && (
          <DivLoading>
            <ImageLoading src={searchingTooltip}></ImageLoading>
            <DivRunning></DivRunning>
          </DivLoading>
        )}
      </Container>
    </DivPage>
  );
}

export default Map;
