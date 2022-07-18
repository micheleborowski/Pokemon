import styled from "styled-components";

export const DivStart = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);

  position: relative;

  left: 0;
  right: 0;
  top: 0;
  widht: 300px;
  height: 223px;
`;

export const ImageClose = styled.img`
  height: 62px;
  width: 62px;
  left: 298px;
  top: 0px;
  border-radius: 0px;
  padding: 12px;

  cursor: pointer;
`;

export const DivEnd = styled.div`
  border-radius: 24px 24px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  height: 336px;
  background-color: #f7f9fc;
  top: -60px;
`;

export const DivAddImg = styled.div`
  height: 247px;
  width: 247px;

  border-radius: 100%;
  border: 4px solid #00d68f;
  background: #f7f9fc;

  position: absolute;
  top: -150px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const inputImage = styled.input`
display:none;
`;

export const AddImg = styled.img`
  height: 87px;
  width: 93px;
`;

export const Label = styled.label`
  margin-top: 24px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  text-transform: uppercase;

  color: #2e3a59;
`;

export const DivTipo = styled.div`
  position: relative;

  margin-top: 30px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
`;

export const TextTipo = styled.p`
  top: -25px;
  position: absolute;

  text-transform: uppercase;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;

  background-color: #f7f9fc;
  color: #2e3a59;
`;

export const ImageDivader = styled.img`
  height: 1px;
  width: 300px;
`;

export const DivHabilidade = styled.div`
  position: relative;

  margin-top: 30px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
`;

export const TextHabilidade = styled.p`
  top: -25px;
  position: absolute;

  text-transform: uppercase;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;

  background-color: #f7f9fc;
  color: #2e3a59;
`;

export const DivStatistic = styled.div`
  position: relative;

  margin-top: 30px;
  margin-bottom: 18px;

  display: flex;
  justify-content: center;
`;

export const TextStatistic = styled.p`
  top: -25px;
  position: absolute;

  text-transform: uppercase;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;

  background-color: #f7f9fc;
  color: #2e3a59;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  position: absolute;
  top: 110px;
`;

export const DivAlign = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivCreate = styled.div`
  height: 56px;
  width: 221px;
  border-radius: 42px;

  display: flex;
  justify-content: center;

  background: #ff3d71;

  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 80px;
`;

export const TextCreate = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  text-transform: uppercase;

  color: #ffffff;
`;

export const Input = styled.input`
  border: 2px solid #e4e9f2;
  background: #ffffff;
  border-radius: 3px;

  height: 48px;
  width: 315px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
`;

export const InputHab = styled(Input)`
  margin-top: 12px;
`;
