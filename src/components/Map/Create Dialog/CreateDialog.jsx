import * as D from "./Style";
import close from "../../../assets/Close.png";
import divider from "../../../assets/Divider.png";
import addImage from "../../../assets/AddImage.png";
import velocidade from "../../../assets/velocidade.png";
import ataque from "../../../assets/ataque.png";
import defesa from "../../../assets/defesa.png";

import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";

function CreateDialog({ onClose, pokemonList }) {
  const [upload, setUpload] = useState(false);
  const [pokemonType, setPokemonType] = useState([]);

  function uploadImage(e) {
    const target = e.target.files[0];
    const reader = new FileReader(); //Permite ler o conteúdo dos arquivos
    reader.onload(() => {
      const output = document.getElement(D.AddImg);
      output.style.img.src = `"${reader.result}"`;

      const btnFile = document.getElement(D.InputImage);
      btnFile.click();
    });
    reader.readAsDataURL(target);
  }

  function addType(type) {
    setPokemonType([...type]);
  }

  return (
    <>
      <D.DivStart>
        <D.ImageClose src={close} onClick={onClose}></D.ImageClose>
      </D.DivStart>
      <D.DivEnd>
        <D.DivAddImg>
          <D.InputImage
            type="file"
            accept="image"
            onClick={(e) => uploadImage(e)}
          ></D.InputImage>
          <D.AddImg src={addImage} alt="icon add Image"></D.AddImg>
          {/* {upload &&(<D.AddImg src=""></D.AddImg>)} */}
        </D.DivAddImg>
        <D.Formulario>
          <D.Label for="name">Nome</D.Label>
          <D.Input
            type="text"
            id="name"
            name="name"
            placeholder="Nome"
          ></D.Input>

          <D.Label for="hp">hp</D.Label>
          <D.Input type="number" id="hp" name="hp" placeholder="Hp"></D.Input>
          <D.Label for="peso"> peso</D.Label>
          <D.DivSpan>
            <D.InputUndefined
              type="number"
              id="pedo"
              name="peso"
              placeholder="Peso"
            ></D.InputUndefined>
            <D.Span>kg</D.Span>
          </D.DivSpan>
          <D.Label for="altura">
            altura
            <D.DivSpan>
              <D.InputUndefined
                type="number"
                id="altura"
                name="altura"
                placeholder="Altura"
              ></D.InputUndefined>
              <D.Span>cm</D.Span>
            </D.DivSpan>
          </D.Label>

          <D.DivTipo>
            <D.ImageDivader src={divider}></D.ImageDivader>
            <D.TextTipo>Tipo</D.TextTipo>
          </D.DivTipo>

          <Dropdown addType={addType}></Dropdown>

          <D.DivHabilidade>
            <D.ImageDivader src={divider}></D.ImageDivader>
            <D.TextHabilidade>Habillidades</D.TextHabilidade>
          </D.DivHabilidade>

          <D.InputHab
            type="text"
            id="habilidade1"
            name="habilidade1"
            placeholder="Habilidade 1"
          ></D.InputHab>
          <D.InputHab
            type="text"
            id="habilidade2"
            name="habilidade2"
            placeholder="Habilidade 2"
          ></D.InputHab>
          <D.InputHab
            type="text"
            id="habilidade3"
            name="habilidade3"
            placeholder="Habilidade 3"
          ></D.InputHab>
          <D.InputHab
            type="text"
            id="habilidade4"
            name="habilidade4"
            placeholder="Habilidade 4"
          ></D.InputHab>

          <D.DivStatistic>
            <D.ImageDivader src={divider}></D.ImageDivader>
            <D.TextStatistic>Estatística</D.TextStatistic>
          </D.DivStatistic>
          <D.Label for="defesa">
            <img src={defesa}></img>defesa
          </D.Label>
          <D.Input
            type="number"
            id="defesa"
            name="defesa"
            placeholder="00"
          ></D.Input>
          <D.Label for="ataque">
            <img src={ataque}></img> Ataque
          </D.Label>
          <D.Input
            type="number"
            id="ataque"
            name="ataque"
            placeholder="00"
          ></D.Input>
          <D.Label for="defEspecial">
            <img src={defesa}></img>Defesa Especial
          </D.Label>
          <D.Input
            type="number"
            id="defEspecial"
            name="defEspecial"
            placeholder="00"
          ></D.Input>
          <D.Label for="AtaEspecial">
            <img src={ataque}></img> Defesa Especial
          </D.Label>
          <D.Input
            type="number"
            id="ataEpecial"
            name="ataEspecial"
            placeholder="00"
          ></D.Input>
          <D.Label for="velocidade">
            <img src={velocidade}></img> Velocidade
          </D.Label>

          <D.Input
            type="number"
            id="velocidade"
            name="velocidade"
            placeholder="00"
          ></D.Input>

          <D.DivAlign>
            <D.DivCreate>
              <D.TextCreate>criar pokemon</D.TextCreate>
            </D.DivCreate>
          </D.DivAlign>
        </D.Formulario>
      </D.DivEnd>
    </>
  );
}
export default CreateDialog;
