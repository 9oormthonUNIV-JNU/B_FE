import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

const ModalWrapper = styled(Modal)`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 60px;
  border-radius: 40px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
`;

type CustomModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
};

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onRequestClose,
  children,
}) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
    >
      {children}
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
          }
        `}
      </style>
    </ModalWrapper>
  );
};

export default CustomModal;
