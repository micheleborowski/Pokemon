// const Pokemon = ({idAleatorio}) =>{
//     const apiPokemon = "https://pokeapi.co/api/v2/pokemon/";
//     const response = `${apiPokemon}${idAleatorio}/`;

//     const mapeamento = response.map((item) => {
//         return {
//           id: item.id,
//           nome: item.name,
//           altura: item.height,
//           peso: item.types.weight,
//           tipos: item.types,
//           habilidades: item.abilities,
//         }; 
//       });
//       console.log(mapeamento);
//     return(
//         <div>
//             <p>{mapeamento.nome}</p>
//             <p>{mapeamento.altura}</p>
//         </div>
//     )
  
// }

// export default Pokemon;