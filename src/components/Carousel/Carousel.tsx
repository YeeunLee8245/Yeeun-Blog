import CarouselItem from '@components/Carousel/CarouselItem';
import parrot1 from '@images/parrot1.jpg';
import parrot2 from '@images/parrot2.jpg';
import parrot3 from '@images/parrot3.jpg';
import { useState } from 'react';

const MAX_NUM = 3
const images = [parrot1, parrot2, parrot3]

export default function Carousel() {
	const [activeImage, setctiveImage] = useState(1);

	const itemsProps: NCarousel.IItemProps[] = [...Array(MAX_NUM)].map((i, idx) => {
		return ({
			id: `img-${i}`,
			order: idx + 1,
			imgSrc: images[idx]
		})
	})


	return (
		<div>
			<div className='carousel'>
				<ul className='carousel__slides'>
					{itemsProps.map((item, idx) =>
						<>
							<input
								type="radio"
								name="raio-buttons"
								id={`img-${idx}`}
								checked={activeImage === idx + 1}
							/>
							<CarouselItem {...item} />
						</>
					)}
				</ul>
			</div>
		</div>
	)
}
