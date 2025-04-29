import "./infoBlock.css";
interface Props {
  imgColor: string;
  img: string;
  infoBlockText: string;
  infoBlockTitle: string;
  imgHeight: number;
  imgWidth: number;
}
export default function InfoBlockCard({
  img,
  imgColor,
  infoBlockText,
  infoBlockTitle,
  imgHeight,
  imgWidth,
}: Props) {
  return (
    <div className="info-block">
      <div
        style={{ backgroundColor: `${imgColor}` }}
        className="info-block__img__container"
      >
        <img
          style={{ height: imgHeight, width: imgWidth }}
          className="info-block__img"
          src={img}
        ></img>
      </div>
      <div className="info-block-text">
        <p
          style={{
            color: "#2F327D",
            fontSize: 30,
            fontWeight: 500,
            paddingBottom: 24,
          }}
        >
          {infoBlockTitle}
        </p>
        <p style={{ color: "#696984", fontSize: 20, lineHeight: 1.8 }}>
          {infoBlockText}
        </p>
      </div>
    </div>
  );
}
