import styled from "styled-components";

const SideList = styled.aside`
  background-color: transparent;
  position: absolute;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: vh; // area visivel
`;
const Lista = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const ElementoVazio = styled.button`
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  border: 4px solid #004a45;
  border-radius: 9.8rem;
  font-size: 3rem;
  font-weight: bold;
  color: #004a45;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  background-color: #00d68f;
`;

const ElementoAdicona = styled.button`
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  border: 4px solid #DB2C66;
  border-radius: 9.8rem;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  color: #FFFFFF;
  background-color: #FF3D71;
`;

function SideBar() {
  return (
    <SideList>
      <ul>
        <Lista>
          <ElementoVazio>?</ElementoVazio>
        </Lista>
        <Lista>
          <ElementoVazio>?</ElementoVazio>
        </Lista>
        <Lista>
          <ElementoVazio>?</ElementoVazio>
        </Lista>
        <Lista>
          <ElementoVazio>?</ElementoVazio>
        </Lista>
        <Lista>
          <ElementoVazio>?</ElementoVazio>
        </Lista>
        <Lista>
          <ElementoVazio>?</ElementoVazio>
        </Lista>
        <Lista>
          <ElementoAdicona>+</ElementoAdicona>
        </Lista>
      </ul>
    </SideList>
  );
}
export default SideBar;
