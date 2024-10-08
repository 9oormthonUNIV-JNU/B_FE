import styled from "styled-components";
import icon_circledimage from "../../../assets/images/icon_circledimage.svg";

const CircledImageContainer = styled.div<{
  width?: string;
  clickable: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  width: ${({ width }) => width || "100%"};
  height: ${({ width }) => width || "100%"};
  cursor: ${({ clickable }) =>
    clickable ? "pointer" : "default"}; /* 클릭 가능 시 포인터 적용 */
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type CircledImageProps = {
  image?: string | null;
  onClick?: () => void;
  width?: string;
};

const CircledImage: React.FC<CircledImageProps> = ({
  image,
  width,
  onClick,
}) => {
  const src = image || icon_circledimage;

  return (
    <CircledImageContainer
      width={width}
      clickable={!!onClick}
      onClick={onClick}
    >
      <Image src={src} />
    </CircledImageContainer>
  );
};

export default CircledImage;
