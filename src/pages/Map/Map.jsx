import React from "react";
import { useState } from "react";
import * as S from "./StyleMap";
import Modal from "../../components/Map/Modal/Modal";
import SideBar from "../../components/Map/SideBar/sideBar";
import Dialog from "../../components/Map/Dialog/Dialog";
import CreateDialog from "../../components/Map/Create Dialog/CreateDialog";
import SavedDialog from "../../components/Map/DialogSaved/SavedDialog";

import ashFront from "../../assets/ashFront.png";
import searchTooltip from "../../assets/searchTooltip.png";
import searchingTooltip from "../../assets/searchingTooltip.png";
import pokeBola from "../../assets/pokeBola.png";
import error from "../../assets/Error.png";
import { useEffect } from "react";

function Map() {
  const [pokemonInfo, setPokemonInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState(Array(6).fill(undefined));
  const [isFull, setIsFull] = useState(false);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [createIsOpen, setCreateIsOpen] = useState(false);
  const [savedIsOpen, setSavedIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  function generateId(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async function searchPokemon() {
    setLoading(true);
    const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(`${apiPokemon}${generateId(1, 807)}/`);
    const data = await response.json();

    const novoPokemon = {
      id: data.id,
      nome: data.name,
      hp: data.stats.find((elemento) => elemento.stat.name === "hp"),
      altura: data.height,
      peso: data.weight,
      tipos: data.types,
      habilidades: data.abilities,
      ataque: data.stats.find((elemento) => elemento.stat.name === "attack"),
      defesa: data.stats.find((elemento) => elemento.stat.name === "defense"),
      ataqueEspecial: data.stats.find(
        (elemento) => elemento.stat.name === "special-attack"
      ),
      defesaEspecial: data.stats.find(
        (elemento) => elemento.stat.name === "special-defense"
      ),
      velocidade: data.stats.find((elemento) => elemento.stat.name === "speed"),
    };

    setTimeout(() => {
      setLoading(false);
      setPokemonInfo(novoPokemon);
      setDialogIsOpen(true);
    }, 1000);
  }

  function savePokemon(newPokemon) {
    const index = pokemonList.findIndex((pokemon) => pokemon === undefined);
    pokemonList[index] = newPokemon;
    console.log(pokemonList);
    setPokemonList(pokemonList);

    if (pokemonList[pokemonList.length - 1] !== undefined) {
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
    setSavedIsOpen(false);
  }

  function createPokemon() {
    setCreateIsOpen(true);
    setIsCreated(true);
  }

  return (
    <S.DivPage>
      <SideBar
        onSelectedPokemon={(pokemon) => {
          setPokemonInfo(pokemon);
          setSavedIsOpen(true);
          setIsSaved(true);
        }}
        createPokemon={createPokemon}
        pokemonList={pokemonList}
      />
      <S.Container>
        {!loading && (
          <S.TooltipElement>
            {!isFull && (
              <>
                <S.ImageSearch src={searchTooltip}></S.ImageSearch>
                <S.ImageAshFront
                  onClick={searchPokemon}
                  src={ashFront}
                ></S.ImageAshFront>
              </>
            )}
            {isFull && (
              <>
                <S.ImageError src={error}></S.ImageError>
                <S.ImageAshFront src={ashFront}></S.ImageAshFront>
              </>
            )}
          </S.TooltipElement>
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
            <S.DivPokeBola>
              <S.Image
                onClick={() => savePokemon(pokemonInfo)}
                src={pokeBola}
              ></S.Image>
            </S.DivPokeBola>
          </Modal>
        )}

        {savedIsOpen && (
          <Modal isOpen={savedIsOpen}>
            <SavedDialog
              pokemon={pokemonInfo}
              onClose={() => {
                setPokemonInfo(undefined);
                setSavedIsOpen(false);
                setIsSaved(false);
              }}
            ></SavedDialog>
            <S.DivFree>
              <S.DivColor onClick={() => freePokemon(pokemonInfo)}>
                <S.TextFree>Liberar pokemon</S.TextFree>
              </S.DivColor>
            </S.DivFree>
          </Modal>
        )}

        {createIsOpen && (
          <Modal isOpen={createIsOpen}>
            {isCreated && (
              <CreateDialog
                onCreate={(pokemon) => {
                  setPokemonInfo(pokemon);
                  savePokemon(pokemon);
                  setCreateIsOpen(false);
                }}
                onClose={() => {
                  setPokemonInfo(undefined);
                  setCreateIsOpen(false);
                  setIsSaved(false);
                }}
              ></CreateDialog>
            )}
          </Modal>
        )}

        {loading && (
          <S.DivLoading>
            <S.ImageLoading src={searchingTooltip}></S.ImageLoading>
            <S.DivRunning></S.DivRunning>
          </S.DivLoading>
        )}
      </S.Container>
    </S.DivPage>
  );
}

export default Map;
