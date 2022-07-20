import styled from "styled-components";

export const DivSelect = styled.div`
  height: 48px;
  width: 315px;
  border-radius: 3px;

  background: #ffffff;

  border: 2px solid #e4e9f2;

  display: flex;
  align-items: center;
`;

export const LabelSelect = styled.label`
  outline: none;
  border: none;

  font-family: Open Sans;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
`;

export const ImgSelect = styled.img`
  margin-right: 12px;
  margin-left: 270px;

  cursor: pointer;

  position:absolute;
`;

export const DivDropdown = styled.div`
  height: 230px;
  width: 315px;
  border-radius: 3px;

  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31),
    0px 4px 8px rgba(9, 30, 66, 0.25);

  margin-top: 4px;

  display:flex;
  flex-direction: column;

  overflow-y: scroll;
`;

export const TipoText = styled.p`
margin-left:12px;
margin-top: 14px;

font-family: Open Sans;
font-size: 15px;
font-weight: 600;
line-height: 24px;

color: #2E3A59;
`;
