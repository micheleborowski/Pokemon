import React from "react";
import * as D from "./style";
import { useState, useEffect } from "react";

import Tipos from "./Tipos/Tipos";

import select from "../../../../assets/Select.png";

function Dropdown({ addType, pokemonType, removeType }) {
  const [isSelected, setIsSelected] = useState(false);
  const [listTypes, setListTypes] = useState([]);
  const [isType, setIsType] = useState(false);

  async function findTypes() {
    await fetch("https://pokeapi.co/api/v2/type")
      .then((response) => response.json())
      .then((data) => {
        setListTypes([...data.results]);
      });
  }

  useEffect(() => {
    findTypes();
  }, []);

  function saveType(newType) {
    addType(newType);
    setIsType(true);
  }

  function deleteType(index, deletedType) {
    removeType(index, deletedType);
  }

  return (
    <>
      <D.DivSelect>
        {!isType && <D.TextSelect> Selecione o(s) tipo(s)</D.TextSelect>}
        {isType && (
          <>
            {pokemonType.map((tipo, index) => {
              return <div key={index}>{Tipos(tipo, index, deleteType)}</div>;
            })}
          </>
        )}
        <D.ImgSelect
          src={select}
          onClick={() => setIsSelected(!isSelected)}
        ></D.ImgSelect>
      </D.DivSelect>
      {isSelected && (
        <>
          <D.DivDropdown>
            {listTypes?.map((tipo, index) => {
              return (
                <D.TipoText key={index} onClick={() => saveType(tipo.name)}>
                  {tipo.name}
                </D.TipoText>
              );
            })}
          </D.DivDropdown>
        </>
      )}
    </>
  );
}

export default Dropdown;
