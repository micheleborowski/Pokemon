import styled from "styled-components";

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

export const InputCreate = styled.input`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  text-transform: uppercase;

  color: #ffffff;
  background-color: #ff3d71;
  border: none;
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

export const DivSpan = styled.div`
  border: 2px solid #e4e9f2;
  background: #ffffff;
  border-radius: 3px;

  height: 48px;
  width: 315px;

  display: flex;
  align-items: center;
`;

export const Span = styled.span`
  float: right;
  font-family: Open Sans;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;

  margin-right: 38px;
`;

export const InputUndefined = styled(Input)`
  outline: none;
  border: none;
`;

export const InputHab = styled(Input)`
  margin-top: 12px;
`;
