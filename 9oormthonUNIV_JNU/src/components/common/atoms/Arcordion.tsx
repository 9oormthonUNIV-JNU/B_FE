import React, { useRef, useState } from "react";
import styled from "styled-components";
import CustomText from "./CustomText";

const AccordionContainer = styled.div`
  width: 50%;
  border: none;
  background: #f7f7f7;
  border-radius: 24px;
  overflow: hidden;
`;

const AccordionHeader = styled.button<{ isOpen: boolean }>`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => (props.isOpen ? "#E1EBFD" : "#f8f9fa")};
  color: black;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.3s;
  padding: 20px;

  &:hover {
    background-color: ${(props) => (props.isOpen ? "#E1EBFD" : "#e2e6ea")};
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean; contentHeight: number }>`
  height: ${(props) => (props.isOpen ? `${props.contentHeight}px` : "0")};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  padding: ${(props) => (props.isOpen ? "10px 20px 20px" : "0 20px 0 10px")};
  background-color: #e1ebfd;
`;

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleAccordion = () => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion} isOpen={isOpen}>
        <CustomText weight={600} size={20}>
          {title}
        </CustomText>
      </AccordionHeader>
      <AccordionContent
        isOpen={isOpen}
        contentHeight={contentHeight}
        ref={contentRef}
      >
        <CustomText weight={500} size={16} color="#5E5E5E">
          {children}
        </CustomText>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
