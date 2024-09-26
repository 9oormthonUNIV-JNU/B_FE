import styled from "styled-components";
import CustomText from "./CustomText";

const ContactContainer = styled.div`
  width: 400px;
  height: 90px;
  display: flex;
  gap: 40px;
`;

const ContactIcon = styled.img`
  width: 90px;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

type ContactProps = {
  logo: string;
  platform: string;
  id: string;
};

const Contact: React.FC<ContactProps> = ({ logo, platform, id }) => {
  return (
    <ContactContainer>
      <ContactIcon src={logo} />
      <ContactContent>
        <CustomText weight={600} size={32}>
          {platform}
        </CustomText>
        <CustomText weight={500} size={28}>
          {id}
        </CustomText>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
