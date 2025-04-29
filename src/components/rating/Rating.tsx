import Star from "./Star";
import HalfStar from "./HalfStar";
interface Props {
  totalRating: number;
}
export default function Rating({ totalRating }: Props) {
  const renderRating = () => {
    const rating = [];

    for (let i = 0; i < totalRating; i++) {
      totalRating - 0.5 == i
        ? rating.push(<HalfStar key={i}></HalfStar>)
        : rating.push(<Star key={i}></Star>);
    }
    return rating;
  };
  return <div className="rating-row">{renderRating()}</div>;
}
