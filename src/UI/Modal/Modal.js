import React from 'react';
import ReactDOM from 'react-dom';

const portal = document.getElementById('divPage');

// function showPokemon() {
//     setPokemonInfo(undefined);
//     setPokemonList([...pokemonList, PokemonInfo]);
//   }


const Modal = ({children})=>{
    return ReactDOM.createPortal(
        <div>
            <h1>Pokemon</h1>
            {/* <button onClick={showPokemon}>PokeBola</button> */}
            {children}
        </div>,
        portal,
    );
};

export default Modal;