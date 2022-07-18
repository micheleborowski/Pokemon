import * as H from "./StyleHome";

import pokemonLogo from "../../assets/pokemonLogo.png";

function Home() {
  return (
    <H.DivPage>
    <H.LogoDiv>
      <H.ImagePokemon src={pokemonLogo}></H.ImagePokemon>
      <H.Botao>
        <H.StyledLink to="/map">
          Start
        </H.StyledLink>
      </H.Botao>
    </H.LogoDiv>
    </H.DivPage>
  );
}

export default Home;
