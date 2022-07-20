import React from "react";
import * as D from "./style";
import { useState, useEffect } from "react";

import select from "../../../../assets/Select.png";

function Dropdown({ addType }) {
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

  return (
    <>
      <D.DivSelect>
        {!isType && (
          <D.LabelSelect
            type="text"
            placeholder="Selecione o(s) tipo(s)"
          ></D.LabelSelect>
        )}
        {/* {isType && <>
        mapear os tipos do pokemon
        </>} */}
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

{
  /* <input type="checkbox" name="tipo1"></input>
                <label for="tipo1">Tipo 1 </label>
            <input type="checkbox" name="tipo2"></input>
                <label for="tipo1">Tipo 2 </label>
            <input type="checkbox" name="tipo3"></input>
                <label for="tipo1">Tipo 3 </label>
            <input type="checkbox" name="tipo4"></input>
                <label for="tipo1">Tipo 4 </label>
            <input type="checkbox" name="tipo5"></input>
                <label for="tipo1">Tipo 5 </label>
            <input type="checkbox" name="tipo6"></input>
                <label for="tipo1">Tipo 6 </label>
            <input type="checkbox" name="tipo7"></input>
                <label for="tipo1">Tipo 7 </label>
 */
}
