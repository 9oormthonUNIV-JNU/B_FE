import styled from 'styled-components';
import CustomText from '../../common/atoms/CustomText';

const CustomDateContainer=styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  gap:12px;
`
const Dday = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 100px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const CustomDate = () => {
  const today = new Date();

  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  const dayOfWeek = today.toLocaleDateString('en-US', options).toUpperCase();

  return (
    <CustomDateContainer>
        <CustomText textStyle="h3" color="#fff">Today is</CustomText>
      <Dday>
        {formattedDate}
        </Dday>
        <CustomText textStyle='b1' color='#fff'>{dayOfWeek}</CustomText>
    </CustomDateContainer>
  );
}

export default CustomDate;
