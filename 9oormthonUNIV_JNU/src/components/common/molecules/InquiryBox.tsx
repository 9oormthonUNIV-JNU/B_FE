import styled from "styled-components";
import CustomText from "../atoms/CustomText";

const InquiryBoxContainer = styled.div`
display: flex;
align-items: center;
gap: 40px;

.content{
display:flex;
flex-direction: column;
justify-content:flex-start;
gap:12px;
}
`
type InquiryProps = {
    icon: string;
    title: string;
    address: string;
}
const InquiryBox:React.FC<InquiryProps> = ({icon,title, address}) => {
return (
<InquiryBoxContainer>
        <img src={icon} />
        <div className="content">
<CustomText textStyle="h3">
    {title}
</CustomText>
<CustomText textStyle="b3">
    {address}
</CustomText>
</div>
</InquiryBoxContainer>
);

};

export default InquiryBox;