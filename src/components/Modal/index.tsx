import { flexCenter } from "@/lib/styles/common";
import React, { FunctionComponent, useCallback } from "react";
import styled from "styled-components";

interface ModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FunctionComponent<ModalProps> = ({ show, setShow, children }) => {
  const onClick = useCallback(() => {
    setShow((prev) => !prev);
  }, []);
  const StopPropagarion = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  if (!show) {
    return null;
  }

  return (
    <ModalContainer onClick={onClick}>
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
  ${flexCenter}
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.32);
  /* modal wrapper */
  .modal-wrapper {
    display: inline-block;
    width: 40rem;
  }
`;
