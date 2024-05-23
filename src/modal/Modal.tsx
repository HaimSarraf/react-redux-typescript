import "./Modal.scss";
import ReactDOM from "react-dom";

import { ModalType, ModalOverlayType, BackdropType } from "../types/types";
import { ReactNode } from "react";

const ModalOverlay = ({ children }: ModalOverlayType) => {
  return <div className="modal">{children as ReactNode}</div>;
};
const Backdrop = ({ onClose }: BackdropType) => {
  return <div className="backdrop" onClick={onClose} />;
};

const modalElement = document.getElementById("modal") as HTMLElement;

const Modal = ({ children, onClose }: ModalType) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, modalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        modalElement
      )}
    </>
  );
};

export default Modal;
