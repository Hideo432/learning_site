interface Props {
  img: string;
  tag: string;
}
export default function BlogListItem({ img, tag }: Props) {
  return (
    <div style={{ position: "relative", width: 356, height: 327 }}>
      <img style={{ width: 356, height: 327 }} src={img} alt="" />
      <span
        style={{
          width: 236,
          height: 63,
          backgroundColor: "#ffffff70",
          fontSize: 24,
          fontWeight: 700,
          position: "absolute",
          bottom: 34,
          left: 60,
          textAlign: "center",
          lineHeight: 2.5,
          borderRadius: 15,
        }}
      >
        {tag}
      </span>
    </div>
  );
}
