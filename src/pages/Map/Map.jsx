import React from "react";
import { useState } from "react";
import * as M from "./StyleMap";
import Modal from "../../components/Map/Modal/Modal";
import SideBar from "../../components/Map/SideBar/sideBar";
import Dialog from "../../components/Map/Dialog/Dialog";
import CreateDialog from "../../components/Map/Create Dialog/CreateDialog";

import ashFront from "../../assets/ashFront.png";
import searchTooltip from "../../assets/searchTooltip.png";
import searchingTooltip from "../../assets/searchingTooltip.png";
import pokeBola from "../../assets/pokeBola.png";
import error from "../../assets/Error.png";


function Map() {
  const [pokemonInfo, setPokemonInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState(Array(6).fill(undefined));
  const [isFull, setIsFull] = useState(false);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

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

    if (newList[newList.length - 1] !== undefined) {
      setIsFull(true);
    }

    setPokemonInfo(undefined);
    setDialogIsOpen(false);
  }

  function freePokemon(pokemon) {
    console.log(pokemonList);
    const filteredList = pokemonList.filter(
      (element) => element?.id !== pokemon.id
    );
    filteredList.push(undefined);
    setPokemonList(filteredList);
    setIsFull(false);
    setIsSaved(false);
    setDialogIsOpen(false);
  }

  function createPokemon() {
    setDialogIsOpen(true);
    setIsCreated(true);
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
        createPokemon={createPokemon}
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
            {!isCreated && (
              <>
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
              </>
            )}

            {isSaved && (
              <M.DivFree>
                <M.DivColor onClick={() => freePokemon(pokemonInfo)}>
                  <M.TextFree>Liberar pokemon</M.TextFree>
                </M.DivColor>
              </M.DivFree>
            )}
            {isCreated && (
              <CreateDialog
                onClose={() => {
                  setPokemonInfo(undefined);
                  setDialogIsOpen(false);
                  setIsSaved(false);
                }}
              ></CreateDialog>
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
