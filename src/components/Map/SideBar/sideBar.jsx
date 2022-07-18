import * as S from "./style";

import icon from "../../../assets/Icon.png";
import plus from "../../../assets/plus.png";


function SideBar({ pokemonList, onSelectedPokemon, createPokemon }) {

  function showModal(pokemonSelected) {
    onSelectedPokemon(pokemonSelected);
  }

  function addPokemon(newPokemon){
    createPokemon(newPokemon);
  }

  return (
    <>
      <S.SideList>
        <ul>
          {pokemonList.map((item) => {

            return item?.id ? (
              <S.Lista>
                <S.ElementoImagem onClick={()=>showModal(item)}>
                  <S.IconPokemon
                    src={
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                      item.id +
                      ".png"
                    }
                  ></S.IconPokemon>
                </S.ElementoImagem>
              </S.Lista>
            ) : (
              <S.Lista>
                <S.ElementoVazio>
                  <img src={icon}></img>
                </S.ElementoVazio>
              </S.Lista>
            );
          })}
          <S.Lista>
            <S.DivAdiciona >
              <img src={plus} onClick={addPokemon}></img>
            </S.DivAdiciona>
          </S.Lista>
        </ul>
      </S.SideList>
    </>
  );
}
export default SideBar;
