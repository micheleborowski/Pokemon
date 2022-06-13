import styled from "styled-components";

export const ImageMap = styled(Imagem)`
    width: 100%;
    height: 100%;
`

const Imagem = ({src}) => {
    return <img src={src}></img>
}

export default Imagem;