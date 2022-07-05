// front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
import React from "react";
import { useState } from "react";

import Modal from "../UI/Modal/Modal";
import ashFront from "../assets/ashFront.png";
import SideBar from "../components/sideBar";
import searchTooltip from "../assets/searchTooltip.png";
import searchingTooltip from "../assets/searchingTooltip.png";
import pokeBola from "../assets/pokeBola.png";

import {
  ImageSearch,
  DivRunning,
  DivLoading,
  ImageLoading,
  Container,
  TooltipElement,
  ImageAshFront,
  DivPage,
  Image,
  DivPokeBola,
} from "../UI/StyleMap";
import Dialog from "../components/Map/Dialog/Dialog";

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
      hp: data.stats.find((elemento) => elemento.stat.name === "hp"),
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
            <Dialog pokemon={pokemonInfo} onClose={()=>{setPokemonInfo(undefined)}}></Dialog>
            <DivPokeBola>
            <Image
              onClick={showPokemon}
              src={pokeBola}
            ></Image>
            </DivPokeBola>
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
