import styled from "styled-components";

export const DivSelect = styled.div`
  height: 48px;
  width: 315px;
  border-radius: 3px;

  background: #ffffff;

  border: 2px solid #e4e9f2;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ImgSelect = styled.img`
  margin-right: 12px;
`;

export const DivDropdown = styled.div`
  height: 230px;
  width: 315px;
  border-radius: 3px;
  padding: 4px, 0px, 4px, 0px;

  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31),
    0px 4px 8px rgba(9, 30, 66, 0.25);

  margin-top: 4px;

  // overflow-y para por limite no widith;
`;
