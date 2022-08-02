import * as S from "./style";

import icon from "../../../assets/Icon.png";
import plus from "../../../assets/plus.png";

function SideBar({ pokemonList, onSelectedPokemon, createPokemon }) {
  function showModal(pokemonSelected) {
    onSelectedPokemon(pokemonSelected);
  }

  function addPokemon(newPokemon) {
    createPokemon(newPokemon);
  }

  return (
    <>
      <S.SideList>
        <ul>
          {pokemonList.map((item, index) => {
            console.log("sideBar Image",item?.image)
            return item?.id ? (
              <S.Lista key={item.id}>
                <S.ElementoImagem onClick={() => showModal(item)}>
                  <S.IconPokemon
                    src={
                      item.image ??
                      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                        item.id +
                        ".png"
                    }
                  ></S.IconPokemon>
                </S.ElementoImagem>
              </S.Lista>
            ) : (
              <S.Lista key={index}>
                <S.ElementoVazio>
                  <img src={icon}></img>
                </S.ElementoVazio>
              </S.Lista>
            );
          })}
          <S.Lista>
            <S.DivAdiciona>
              <img src={plus} onClick={addPokemon}></img>
            </S.DivAdiciona>
          </S.Lista>
        </ul>
      </S.SideList>
    </>
  );
}
export default SideBar;
