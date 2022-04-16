import { Button, flexCenter, flexEvenly } from "@/lib/styles/common";
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
  form {
    width: 100%;
    padding: 2rem 1rem;
    background-color: var(--color-bgColor);
    border-radius: 0.5rem;
  }
  .modal-wrapper {
    display: inline-block;
    width: 40rem;
  }
  .form-button {
    ${flexEvenly}
    button {
      ${Button}
    }
    button.form-button-register {
      background-color: var(--color-subBgColor);
      border: 1px solid var(--color-borderColor);
      color: var(--color-primaryText);
    }
    button.form-button-cancle {
      border: 1px solid var(--color-borderColor);
      color: var(--color-primaryText);
    }
  }
  .form-divider {
    margin: 2.5rem 0;
    width: 100%;
    height: 1px;
    background-color: var(--color-subBgColor);
  }
`;
