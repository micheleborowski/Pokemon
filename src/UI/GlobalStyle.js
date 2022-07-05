import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
#root{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
html, body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;


