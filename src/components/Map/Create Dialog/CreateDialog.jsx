import * as D from "./Style";
import close from "../../../assets/Close.png";
import addImage from "../../../assets/AddImage.png";

import Form from "./Form/Form";
import { useState } from "react";

function CreateDialog({ onClose }) {
  const [upload, setUpload] = useState(false);

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
        <Form></Form>
      </D.DivEnd>
    </>
  );
}
export default CreateDialog;
