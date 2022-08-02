import * as S from "./styles";
import close from "../../../assets/Close.png";
import divider from "../../../assets/Divider.png";

function Dialog({ pokemon, onClose }) {
  console.log(pokemon);

  function mostraHabilidades(habilidades = []) {
    const abilityNames = habilidades.map(
      (habilidade) => habilidade.ability.name
    );
    return abilityNames.join(", ");
  }
  return (
    <>
      <S.DivStart>
        <S.ImageClose src={close} onClick={onClose}></S.ImageClose>
      </S.DivStart>
      <S.DivEnd>
        <S.PokemonImage
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            pokemon.id +
            ".png"
          }
        ></S.PokemonImage>
        <S.DivRolagem>
          <S.Nome>{pokemon.nome}</S.Nome>
          <S.DivInfos>
            <S.Infos>
              <S.Fisico>hp</S.Fisico>
              <S.FisicoText>
                {pokemon.hp.base_stat + "/" + pokemon.hp.base_stat}
              </S.FisicoText>
            </S.Infos>
            <img src={divider}></img>
            <S.Infos>
              <S.Fisico>altura</S.Fisico>
              <S.FisicoText>{pokemon.altura + " m"}</S.FisicoText>
            </S.Infos>
            <img src={divider}></img>
            <S.Infos>
              <S.Fisico>peso</S.Fisico>
              <S.FisicoText>{pokemon.peso + " kg"}</S.FisicoText>
            </S.Infos>
          </S.DivInfos>
          <S.DivDivider>
            <S.ImageDivider src={divider}></S.ImageDivider>
            <S.Atributos>tipo</S.Atributos>
          </S.DivDivider>
          <S.DivTipo>
            {pokemon.tipos.map((tipo) => {
              return <S.Tipos>{tipo.type.name}</S.Tipos>;
            })}
          </S.DivTipo>

          <S.DivDivider>
            <S.ImageDivider src={divider}></S.ImageDivider>
            <S.Atributos>habilidades</S.Atributos>
          </S.DivDivider>

          <S.DivHabilidades>
            <S.Habilidades>
              {mostraHabilidades(pokemon.habilidades)}
            </S.Habilidades>
          </S.DivHabilidades>
        </S.DivRolagem>
      </S.DivEnd>
    </>
  );
}

export default Dialog;
