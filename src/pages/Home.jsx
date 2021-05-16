import Layout from '../components/Layout/Layout';
import Product from '../components/Product/Product';
import gamesMock from '../mocks/games.json';

const Home = () => {
	return (
		<Layout>
			<div className="games">
				{gamesMock.map((game) => (
					<Product game={game} />
				))}
			</div>
		</Layout>
	);
};

export default Home;
