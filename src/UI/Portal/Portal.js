import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const body = document.body;

const Portal = ({children}) => {
    const elemento = document.createElement('div');
    elemento.setAttribute('id', 'portal-root');

    useEffect(()=>{
        body.appendChild(elemento);

        return ()=>{body.removeChild(elemento)}
    },[elemento])

    return ReactDOM.createPortal(
        children, elemento
    )
}

export default Portal;