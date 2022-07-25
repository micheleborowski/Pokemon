import * as F from "./style";

import Dropdown from "../Dropdown/Dropdown";

import ataque from "../../../../assets/ataque.png";
import defesa from "../../../../assets/defesa.png";
import velocidade from "../../../../assets/velocidade.png";
import divider from "../../../../assets/Divider.png";

import { useForm } from "react-hook-form";
import { useState } from "react";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();


  const [pokemonType, setPokemonType] = useState([]);
  
  const onSubmit = data => console.log(data);

  function addType(type) {
    setPokemonType([...pokemonType, type]);
  }

  function removeType(index, type) {
    const deleted = pokemonType.splice(index, type);

    setPokemonType(deleted);
  }
  return (
    <F.Formulario name="formCreation" onSubmit={handleSubmit(onSubmit)}>
      <F.Label for="name">Nome</F.Label>
      <F.Input
        type="text"
        name="name"
        placeholder="Nome"
        ref={register('name', {required:true})}
      ></F.Input>

      <F.Label for="hp">hp</F.Label>
      <F.Input type="number" id="hp" name="hp" placeholder="Hp"></F.Input>
      <F.Label for="peso"> peso</F.Label>
      <F.DivSpan>
        <F.InputUndefined
          type="number"
          id="pedo"
          name="peso"
          placeholder="Peso"
        ></F.InputUndefined>
        <F.Span>kg</F.Span>
      </F.DivSpan>
      <F.Label for="altura">
        altura
        <F.DivSpan>
          <F.InputUndefined
            type="number"
            id="altura"
            name="altura"
            placeholder="Altura"
          ></F.InputUndefined>
          <F.Span>cm</F.Span>
        </F.DivSpan>
      </F.Label>

      <F.DivTipo>
        <F.ImageDivader src={divider}></F.ImageDivader>
        <F.TextTipo>Tipo</F.TextTipo>
      </F.DivTipo>

      <Dropdown
        addType={addType}
        pokemonType={pokemonType}
        removeType={removeType}
      ></Dropdown>

      <F.DivHabilidade>
        <F.ImageDivader src={divider}></F.ImageDivader>
        <F.TextHabilidade>Habillidades</F.TextHabilidade>
      </F.DivHabilidade>

      <F.InputHab
        type="text"
        id="habilidade1"
        name="habilidade1"
        placeholder="Habilidade 1"
      ></F.InputHab>
      <F.InputHab
        type="text"
        id="habilidade2"
        name="habilidade2"
        placeholder="Habilidade 2"
      ></F.InputHab>
      <F.InputHab
        type="text"
        id="habilidade3"
        name="habilidade3"
        placeholder="Habilidade 3"
      ></F.InputHab>
      <F.InputHab
        type="text"
        id="habilidade4"
        name="habilidade4"
        placeholder="Habilidade 4"
      ></F.InputHab>

      <F.DivStatistic>
        <F.ImageDivader src={divider}></F.ImageDivader>
        <F.TextStatistic>Estatística</F.TextStatistic>
      </F.DivStatistic>
      <F.Label for="defesa">
        <img src={defesa}></img>defesa
      </F.Label>
      <F.Input
        type="number"
        id="defesa"
        name="defesa"
        placeholder="00"
      ></F.Input>
      <F.Label for="ataque">
        <img src={ataque}></img> Ataque
      </F.Label>
      <F.Input
        type="number"
        id="ataque"
        name="ataque"
        placeholder="00"
      ></F.Input>
      <F.Label for="defEspecial">
        <img src={defesa}></img>Defesa Especial
      </F.Label>
      <F.Input
        type="number"
        id="defEspecial"
        name="defEspecial"
        placeholder="00"
      ></F.Input>
      <F.Label for="AtaEspecial">
        <img src={ataque}></img> Defesa Especial
      </F.Label>
      <F.Input
        type="number"
        id="ataEpecial"
        name="ataEspecial"
        placeholder="00"
      ></F.Input>
      <F.Label for="velocidade">
        <img src={velocidade}></img> Velocidade
      </F.Label>

      <F.Input
        type="number"
        id="velocidade"
        name="velocidade"
        placeholder="00"
      ></F.Input>

      <F.DivAlign>
        <F.DivCreate>
          <F.InputCreate type="submit" value="criar pokemon"></F.InputCreate>
        </F.DivCreate>
      </F.DivAlign>
    </F.Formulario>
  );
}
export default Form;
