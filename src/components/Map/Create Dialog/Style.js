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

export const InputImage = styled.input`
  display: none;
  height: 87px;
  width: 93px;
`;

export const AddImg = styled.img`
  height: 87px;
  width: 93px;
`;