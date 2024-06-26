import CarouselItem from '@components/Carousel/CarouselItem';
import parrot1 from '@images/parrot1.jpg';
import parrot2 from '@images/parrot2.jpg';
import parrot3 from '@images/parrot3.jpg';
import { useState } from 'react';

const MAX_NUM = 3;
const images = [parrot1, parrot2, parrot3];

const findOrder = (direction: 'right' | 'left', currentOrder: number) => {
  if (direction === 'right') {
    if (currentOrder === 1) return MAX_NUM;
    else return currentOrder - 1;
  } else {
    if (currentOrder === MAX_NUM) return 1;
    else return currentOrder + 1;
  }
};

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);

  const itemsProps: NCarousel.IItemProps[] = [...Array(MAX_NUM)].map(
    (_, idx) => {
      return {
        order: idx + 1,
        imgSrc: images[idx],
      };
    }
  );

  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          {itemsProps.map((item) => {
            return (
              <div key={item.order}>
                <input
                  id={`img-${item.order}`}
                  checked={activeImage === item.order}
                  type="radio"
                  name="raio-buttons"
                  readOnly
                />
                <CarouselItem {...item}>
                  <label
                    onClick={() =>
                      setActiveImage(findOrder('right', item.order))
                    }
                    className="carousel__slide-prev"
                  >
                    <span>&lsaquo;</span>
                  </label>
                  <label
                    onClick={() =>
                      setActiveImage(findOrder('left', item.order))
                    }
                    className="carousel__slide-next"
                  >
                    <span>&rsaquo;</span>
                  </label>
                </CarouselItem>
              </div>
            );
          })}
          <div className="carousel__dots">
            {itemsProps.map((item) => (
              <label
                key={item.order}
                data-is-checked={activeImage === item.order}
                onClick={() => setActiveImage(item.order)}
                className="carousel__dot"
                id={`img-dot-${item.order}`}
              />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
