import styled from "styled-components";
import CustomText from "../atoms/CustomText";

const LookingBoxContainer = styled.div`
display: flex;
width: 382px;
padding: 61px 40px;
flex-direction: column;
align-items: flex-start;
gap: 35px;
border-radius: 30px;
background-color:#FFF;
`
type LookingProps = {
    title: string;
  content: string;
}
const LookingBox:React.FC<LookingProps> = ({title, content}) => {
return (
<LookingBoxContainer>
        <CustomText textStyle="h3" color="#9FBEF7">
          {title}
        </CustomText>
        <CustomText textStyle="b3">
         {content}
        </CustomText>

</LookingBoxContainer>
);

};

export default LookingBox;