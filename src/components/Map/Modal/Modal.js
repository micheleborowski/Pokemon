import React from "react";
import ReactDOM from "react-dom";
import Portal from "../Portal/Portal";
import {Backdrop, Content} from './styles';

const Modal = ({ isOpen, children}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Backdrop>
        <Content className="modal-content">{children}</Content>
      </Backdrop>
    </Portal>
  );
};

export default Modal;
