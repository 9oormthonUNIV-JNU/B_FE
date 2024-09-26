import Contact from "../atoms/Contact";
import icon_insta from "../../../assets/images/icon_instagram_color.svg";
import icon_gmail from "../../../assets/images/icon_gmail.svg";
import styled from "styled-components";

const ContactsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  gap: 100px;
`;

const Contacts = () => {
  return (
    <ContactsContainer>
      <Contact
        logo={icon_insta}
        platform="인스타그램"
        id="@9oormthon_univ_jnu"
      ></Contact>
      <Contact
        logo={icon_gmail}
        platform="이메일"
        id="9oormthon.univ.jnu@gmail.com"
      ></Contact>
    </ContactsContainer>
  );
};

export default Contacts;
