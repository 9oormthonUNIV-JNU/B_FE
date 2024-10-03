import React, { useEffect } from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import CustomTag from "./CustomTag";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
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
  height: 80%;
  box-shadow: 0px 0px 20px 12px rgba(0, 0, 0, 0.15);
  z-index: 1001;

  .Context{
   display: flex;
  align-items: center;
  justify-content: center;
  }
`;

const Image = styled.img`
  width: 100%;
  margin-bottom:66.5px;
  margin-top:50px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 30px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

type CustomModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  subject: string;
  description: string;
  tag: string[];
  type:string;
};

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, type, onClose, image, subject, description, tag }) => {

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
            return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <div className="Context">
        <CustomText textStyle="h1">{type}</CustomText>
        </div>
        <Image src={image} alt={subject} />
        <CustomText textStyle="h2">{subject}</CustomText>
        <br/>
        <CustomText textStyle="b3">{description}</CustomText>
        <TagContainer>
          {tag.map((t, index) => (
            <CustomTag key={index} backgroundColor={index === 0 ? "#E1EBFD" : "#F7F7F7"}>
              {t}
            </CustomTag>
          ))}
        </TagContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CustomModal;
