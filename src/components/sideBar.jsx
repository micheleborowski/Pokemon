import styled from "styled-components";
const SideList = styled.aside`  
    background-color: transparent;
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    
`;
const Lista = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding:55px;
`;

const Elementos = styled.button`
  position: absolute;
  width: 6.4rem;
  height: 6.4rem;
  border: 4px solid #004a45;
  border-radius: 12.8rem;
  font-size: 4rem;
  font-weight: bold;
  color: #004a45;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  background-color: #00d68f;
`;

function SideBar() {
  return (
    <SideList>
      <ul>
        <Lista>
          <Elementos>?</Elementos>
        </Lista>
        <Lista>
          <Elementos>?</Elementos>
        </Lista>
        <Lista>
          <Elementos>?</Elementos>
        </Lista>
        <Lista>
          <Elementos>?</Elementos>
        </Lista>
        <Lista>
          <Elementos>?</Elementos>
        </Lista>
        <Lista>
          <Elementos>?</Elementos>
        </Lista>

      </ul>
    </SideList>
  );
}
export default SideBar;
