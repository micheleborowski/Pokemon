import * as S from "./style";

import Dropdown from "../Dropdown/Dropdown";

import ataque from "../../../../assets/ataque.png";
import defesa from "../../../../assets/defesa.png";
import velocidade from "../../../../assets/velocidade.png";
import divider from "../../../../assets/Divider.png";
import addImage from "../../../../assets/AddImage.png";

import { useForm } from "react-hook-form";
import { useState } from "react";

function Form({ onCreate }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pokemonType, setPokemonType] = useState([]);

  const onSubmit = (data) => {
    onCreate(data);
  };
  const [imageSrc, setImageSrc] = useState();

  function addType(type) {
    setPokemonType([...pokemonType, type]);
  }

  function removeType(index, type) {
    const deleted = pokemonType.splice(index, type);

    setPokemonType(deleted);
  }

  function uploadImage(e) {
    const target = e.target.files[0];
    const reader = new FileReader(); //Permite ler o conteúdo dos arquivos
    reader.onload = (readerEvent) => {
      console.log(readerEvent);
      const image64 = readerEvent.target.result;
      setImageSrc(image64);
    };
    reader.readAsDataURL(target);
  }

  return (
    <S.Formulario name="formCreation" onSubmit={handleSubmit(onSubmit)}>
      <S.Div>
        <S.DivAddImg>
          <S.LabelImage htmlFor="imageUpload"></S.LabelImage>
          <S.InputImage
            {...register("image")}
            type="file"
            id="imageUpload"
            accept="image"
            onChange={(e) => uploadImage(e)}
          ></S.InputImage>
          {!imageSrc && (
            <S.AddImg src={addImage} alt="icon add Image"></S.AddImg>
          )}
          {imageSrc && <S.AddImg src={imageSrc}></S.AddImg>}
        </S.DivAddImg>
      </S.Div>
      <S.Label htmlFor="name">Nome</S.Label>
      <S.Input
        {...register("name", { required: true })}
        type="text"
        name="name"
        placeholder="Nome"
      ></S.Input>
      {errors.name && <S.errorSpan>This field is required</S.errorSpan>}

      <S.Label htmlFor="hp">hp</S.Label>
      <S.Input
        {...register("hp", { required: true })}
        type="number"
        id="hp"
        name="hp"
        placeholder="Hp"
      ></S.Input>
      {errors.hp && <S.errorSpan>This field is required</S.errorSpan>}

      <S.Label htmlFor="peso"> peso</S.Label>
      <S.DivSpan>
        <S.InputUndefined
          {...register("peso", { required: true })}
          type="number"
          name="peso"
          placeholder="Peso"
        ></S.InputUndefined>
        <S.Span>kg</S.Span>
      </S.DivSpan>
      {errors.peso && <S.errorSpan>This field is required</S.errorSpan>}

      <S.Label htmlFor="altura">
        altura
        <S.DivSpan>
          <S.InputUndefined
            {...register("altura", { required: true })}
            type="number"
            name="altura"
            placeholder="Altura"
          ></S.InputUndefined>
          <S.Span>cm</S.Span>
        </S.DivSpan>
      </S.Label>
      {errors.altura && <S.errorSpan>This field is required</S.errorSpan>}

      <S.DivTipo>
        <S.ImageDivader src={divider}></S.ImageDivader>
        <S.TextTipo>Tipo</S.TextTipo>
      </S.DivTipo>

      <Dropdown
        addType={addType}
        pokemonType={pokemonType}
        removeType={removeType}
      ></Dropdown>

      <S.DivHabilidade>
        <S.ImageDivader src={divider}></S.ImageDivader>
        <S.TextHabilidade>Habillidades</S.TextHabilidade>
      </S.DivHabilidade>

      <S.InputHab
        {...register("habilidade1")}
        type="text"
        name="habilidade1"
        placeholder="Habilidade 1"
      ></S.InputHab>
      <S.InputHab
        {...register("habilidade2")}
        type="text"
        name="habilidade2"
        placeholder="Habilidade 2"
      ></S.InputHab>
      <S.InputHab
        type="text"
        {...register("habilidade3")}
        name="habilidade3"
        placeholder="Habilidade 3"
      ></S.InputHab>
      <S.InputHab
        {...register("habilidade4")}
        type="text"
        name="habilidade4"
        placeholder="Habilidade 4"
      ></S.InputHab>

      <S.DivStatistic>
        <S.ImageDivader src={divider}></S.ImageDivader>
        <S.TextStatistic>Estatística</S.TextStatistic>
      </S.DivStatistic>
      <S.Label htmlFor="defesa">
        <img src={defesa}></img>defesa
      </S.Label>
      <S.Input
        {...register("defesa")}
        type="number"
        id="defesa"
        name="defesa"
        placeholder="00"
      ></S.Input>

      <S.Label htmlFor="ataque">
        <img src={ataque}></img> Ataque
      </S.Label>
      <S.Input
        {...register("ataque")}
        type="number"
        id="ataque"
        name="ataque"
        placeholder="00"
      ></S.Input>

      <S.Label htmlFor="defEspecial">
        <img src={defesa}></img>Defesa Especial
      </S.Label>
      <S.Input
        {...register("defesaEspecial")}
        type="number"
        id="defEspecial"
        name="defEspecial"
        placeholder="00"
      ></S.Input>

      <S.Label htmlFor="ataEspecial">
        <img src={ataque}></img> Ataque Especial
      </S.Label>
      <S.Input
        {...register("ataqueEspecial")}
        type="number"
        name="ataEspecial"
        placeholder="00"
      ></S.Input>

      <S.Label htmlFor="velocidade">
        <img src={velocidade}></img> Velocidade
      </S.Label>
      <S.Input
        {...register("velocidade")}
        type="number"
        name="velocidade"
        placeholder="00"
      ></S.Input>

      <S.DivAlign>
        <S.DivCreate>
          <S.InputCreate type="submit" value="criar Pokemon" />
        </S.DivCreate>
      </S.DivAlign>
    </S.Formulario>
  );
}
export default Form;
