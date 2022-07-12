// front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
import React from "react";
import { useState } from "react";

import Modal from "../UI/Modal/Modal";
import ashFront from "../assets/ashFront.png";
import SideBar from "../components/sideBar";
import searchTooltip from "../assets/searchTooltip.png";
import searchingTooltip from "../assets/searchingTooltip.png";
import pokeBola from "../assets/pokeBola.png";
import error from "../assets/Error.png";
import * as M from "../UI/StyleMap";
import Dialog from "../components/Map/Dialog/Dialog";

function Map() {
  const [pokemonInfo, setPokemonInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState(Array(6).fill(undefined));
  const [isFull, setIsFull] = useState(false);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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
      setDialogIsOpen(true);
    }, 1000);
  }

  function savePokemon() {
    const newList = pokemonList;
    const index = newList.findIndex((pokemon) => pokemon === undefined);
    newList[index] = pokemonInfo;
    setPokemonList(newList);

    if (newList[newList.length-1] !== undefined) {
      setIsFull(true);
    }

    setPokemonInfo(undefined);
    setDialogIsOpen(false);
  }

  function freePokemon(pokemon) {
    console.log(pokemonList);
    const filteredList = pokemonList.filter((element)=> element?.id !== pokemon.id);
    filteredList.push(undefined);
    setPokemonList(filteredList);
    setIsFull(false);
    setIsSaved(false);
    setDialogIsOpen(false);
  }

  return (
    <M.DivPage>
      <SideBar
        onSelectedPokemon={(pokemon) => {
          setPokemonInfo(pokemon);
          setDialogIsOpen(true);
          setIsSaved(true);
          console.log(pokemon);
        }}
        pokemonList={pokemonList}
      />
      <M.Container>
        {!loading && (
          <M.TooltipElement>
            {!isFull && (
              <>
                <M.ImageSearch src={searchTooltip}></M.ImageSearch>
                <M.ImageAshFront
                  onClick={searchPokemon}
                  src={ashFront}
                ></M.ImageAshFront>
              </>
            )}
            {isFull && (
              <>
                <M.ImageError src={error}></M.ImageError>
                <M.ImageAshFront src={ashFront}></M.ImageAshFront>
              </>
            )}
          </M.TooltipElement>
        )}

        {dialogIsOpen && (
          <Modal isOpen={dialogIsOpen}>
            <Dialog
              pokemon={pokemonInfo}
              onClose={() => {
                setPokemonInfo(undefined);
                setDialogIsOpen(false);
                setIsSaved(false);
              }}
            ></Dialog>
            {!isSaved && (
              <M.DivPokeBola>
                <M.Image onClick={savePokemon} src={pokeBola}></M.Image>
              </M.DivPokeBola>
            )}
            {isSaved && (
              <M.DivFree>
                <M.DivColor onClick={()=>freePokemon(pokemonInfo)}>
                  <M.TextFree>Liberar pokemon</M.TextFree>
                </M.DivColor>
              </M.DivFree>
            )}
          </Modal>
        )}

        {loading && (
          <M.DivLoading>
            <M.ImageLoading src={searchingTooltip}></M.ImageLoading>
            <M.DivRunning></M.DivRunning>
          </M.DivLoading>
        )}
      </M.Container>
    </M.DivPage>
  );
}

export default Map;
