import Layout from './components/layout/layout';
import gamesMock from './mocks/games.json';
import Totals from './components/Totals/Totals';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
	return (
		<Layout>
			<div className="content">
				<Cart games={gamesMock} />
				<Totals games={gamesMock} />
			</div>
		</Layout>
	);
}

export default App;
