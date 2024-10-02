import styled from "styled-components";
import icon_circledimage from "../../../assets/images/icon_circledimage.svg";

const CircledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50%;
`;

type CircledImageProps = {
  image: string | null;
};

const CircledImage: React.FC<CircledImageProps> = ({ image }) => {
  const src = image || icon_circledimage;

  return (
    <CircledImageContainer>
      <img src={src} />
    </CircledImageContainer>
  );
};

export default CircledImage;
