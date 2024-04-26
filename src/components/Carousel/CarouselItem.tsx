export default function CarouselItem({
  order: propOrder,
  imgSrc: propImgSrc,
  children: propChildren,
}: NCarousel.IItemProps) {
  return (
    <li className="carousel__slide-container">
      <div className="carousel__slide-img">
        <img alt={`scenery ${propOrder}`} src={propImgSrc} />
      </div>
      <div className="carousel__controls">{propChildren}</div>
    </li>
  );
}
