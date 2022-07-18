import React from "react";
import * as D from "./style";
import { useState } from "react";

import select from "../../../../assets/Select.png";

function Dropdown() {
  const [isSelected, setIsSelected] = useState(true);
  const [pokemonTypes, setPokemonTypes] = useState();

  async function findTypes() {
    setIsSelected(!isSelected);
    const apiTipos = "https://pokeapi.co/api/v2/type";
    const response = await fetch(`${apiTipos}`);
    const data = response.json();

    console.log(data);
    const tipos = {
      tipo: data.results.name,
    };

    setPokemonTypes(tipos);
  }

  return (
    <>
      <D.DivSelect>
        <D.ImgSelect src={select} onClick={findTypes}></D.ImgSelect>
      </D.DivSelect>
      {!isSelected && (
        <>
          <D.DivDropdown>
            {pokemonTypes?.map((tipo) => {
              return <p>{tipo}</p>;
            })}
          </D.DivDropdown>
        </>
      )}
    </>
  );
}

export default Dropdown;
