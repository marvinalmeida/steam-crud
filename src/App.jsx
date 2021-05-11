import './App.css';

import Header from './components/Header/Header';
import gamesMock from './mocks/games.json';
import Totals from './components/Totals/Totals';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<div className="main template-default">
			<Header />
			<div className="content">
				<Cart games={gamesMock} />
				<Totals games={gamesMock} />
			</div>
		</div>
	);
}

export default App;
