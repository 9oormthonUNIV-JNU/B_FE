import React, { useRef, useState } from "react";
import styled from "styled-components";
import CustomText from "./CustomText";
import icon_down from "../../../assets/images/icon_down.svg";

const AccordionContainer = styled.div`
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s;

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
        <CustomText textStyle="h3">{title}</CustomText>{" "}
        <img style={{ paddingRight: "20px" }} src={icon_down} />
      </AccordionHeader>
      <AccordionContent
        isOpen={isOpen}
        contentHeight={contentHeight}
        ref={contentRef}
      >
        <CustomText textStyle="b2">{children}</CustomText>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
