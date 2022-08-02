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

export const PokemonImage = styled.img`
  height: 247px;
  width: 247px;
  left: 48px;
  top: 32px;
  border-radius: 100%;
  border: 4px solid #00d68f;
  background: #f7f9fc;

  position: absolute;
  top: -150px;
`;

export const DivRolagem = styled.div`
  position: absolute;
  top: 120px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Nome = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const DivInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  gap: 32px;

  width: 280px;
  height: 48px;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Fisico = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #2e3a59;
`;

export const FisicoText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #2e3a59;
`;

export const DivDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ImageDivider = styled.img`
  height: 2px;
  width: 280px;

  position: absolute;
`;

export const Atributos = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  text-transform: uppercase;

  color: #2e3a59;
  background-color: #f7f9fc;

  position: absolute;
`;

export const DivTipo = styled.div`
  display: flex;
`;

export const Tipos = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
  background: #67af32;
  height: 32px;
  width: 99px;
  left: 0px;
  top: 0px;
  border-radius: 42px;
  text-align: center;
`;

export const DivHabilidades = styled.div`
  display: flex;
`;

export const Habilidades = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  text-transform: uppercase;

  color: #2e3a59;
`;

export const DivStatistic = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const DivEach = styled.div`
  display: flex;
  align-items: center;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: relative;
`;

export const Icons = styled.img``;

export const StatisticText = styled.p`
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;

  text-transform: uppercase;

  color: #2e3a59;

  margin-left: 11px;
`;

export const StatisticNumb = styled.p`
  font-family: Open Sans;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;

  position: absolute;
  margin-left: 260px;
`;
