import styled from "styled-components";
import InquiryBox from "../molecules/InquiryBox";
import icon_instagram from "../../../assets/images/icon_instagram_color.svg";
import icon_gmail from "../../../assets/images/icon_gmail.svg";

const InquiryBoxesContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items:center;
gap:125px;
margin-bottom:200px;


`

const InquiryBoxes = () => {

return (
    <InquiryBoxesContainer>
<InquiryBox icon={icon_instagram} title="instagram" address="@9oormthon_univ_jnu"/>
<InquiryBox icon={icon_gmail} title="gmail" address="9oormthon.univ.jnu@gmail.com"/>
</InquiryBoxesContainer>
);
};

export default InquiryBoxes;