import * as S from "./Style";
import close from "../../../assets/Close.png";

import Form from "./Form/Form";

function CreateDialog({ onClose, onCreate }) {

  return (
    <>
      <S.DivStart>
        <S.ImageClose src={close} onClick={onClose}/>
      </S.DivStart>
      <S.DivEnd>
        <Form onCreate={onCreate}>
        </Form>
      </S.DivEnd>
    </>
  );
}
export default CreateDialog;
