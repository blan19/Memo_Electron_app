import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface ModalProps {
  show: boolean;
  setShow: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ show, setShow, children }) => {
  const StopPropagarion = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };
  return (
    <ModalContainer>
      <div className="modal-wrapper" onClick={(e) => StopPropagarion(e)}>
        {children}
      </div>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  /* modal root */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  /* modal wrapper */
  .modal-wrapper {
  }
`;
