import * as S from "./Style";

import divider from "../../../assets/Divider.png";
import defesa from "../../../assets/defesa.png";
import velocidade from "../../../assets/velocidade.png";
import ataque from "../../../assets/ataque.png";
import close from "../../../assets/Close.png";

function Dialog({ pokemon, onClose }) {

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
          <S.ImageDivider src={divider}></S.ImageDivider>
          <S.Atributos>tipo</S.Atributos>
          <S.DivTipo>
            {pokemon.tipos.map((tipo) => {
              return <S.Tipos>{tipo.type.name}</S.Tipos>;
            })}
          </S.DivTipo>

          <S.Atributos>habilidades</S.Atributos>
          <S.DivHabilidades>
            <S.Habilidades>
              {mostraHabilidades(pokemon.habilidades)}
            </S.Habilidades>
          </S.DivHabilidades>

          <S.Atributos>estatísticas</S.Atributos>

          <S.DivStatistic>
            <S.DivEach>
              <S.DivTitle>
                <S.Icons src={defesa}></S.Icons>
                <S.StatisticText>defesa</S.StatisticText>
              </S.DivTitle>
              <S.StatisticNumb>{pokemon.defesa.base_stat}</S.StatisticNumb>
            </S.DivEach>

            <S.DivEach>
              <S.DivTitle>
                <S.Icons src={ataque}></S.Icons>
                <S.StatisticText>ataque</S.StatisticText>
              </S.DivTitle>
              <S.StatisticNumb>{pokemon.ataque.base_stat}</S.StatisticNumb>
            </S.DivEach>

            <S.DivEach>
              <S.DivTitle>
                <S.Icons src={defesa}></S.Icons>
                <S.StatisticText>defesa especial</S.StatisticText>
              </S.DivTitle>
              <S.StatisticNumb>
                {pokemon.defesaEspecial.base_stat}
              </S.StatisticNumb>
            </S.DivEach>

            <S.DivEach>
              <S.DivTitle>
                <S.Icons src={ataque}></S.Icons>
                <S.StatisticText>ataque especial</S.StatisticText>
              </S.DivTitle>
              <S.StatisticNumb>
                {pokemon.ataqueEspecial.base_stat}
              </S.StatisticNumb>
            </S.DivEach>

            <S.DivEach>
              <S.DivTitle>
                <S.Icons src={velocidade}></S.Icons>
                <S.StatisticText>velocidade</S.StatisticText>
              </S.DivTitle>
              <S.StatisticNumb>{pokemon.velocidade.base_stat}</S.StatisticNumb>
            </S.DivEach>
          </S.DivStatistic>
        </S.DivRolagem>
      </S.DivEnd>
    </>
  );
}

export default Dialog;
