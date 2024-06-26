import Carousel from '@components/Carousel/Carousel';
import Footer from '@components/Footer';
import Header from '@components/Header';
import PostList from '@components/PostList';

export default function Home() {
	return (
		<>
			<Header />
			<Carousel />
			<PostList />
			<Footer />
		</>
	);
}
