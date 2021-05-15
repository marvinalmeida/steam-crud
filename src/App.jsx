import { useState } from 'react';
import Layout from './components/layout/layout';
import gamesMock from './mocks/games.json';
import Totals from './components/Totals/Totals';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
	const [games, setGames] = useState(gamesMock);

	const handleInputQuantity = (gameId, quantity) => {
		const updateGames = games.reduce((acc, game) => {
			if (gameId === game.id && quantity <= game.stock) {
				game.quantity = quantity;
			}
			acc.push(game);
			return acc;
		}, []);

		setGames(updateGames);
	};

	const handleAddQuantity = (gameId) => {
		const updatedGames = games.reduce((acc, game) => {
			if (gameId === game.id && game.quantity < game.stock) {
				game.quantity = game.quantity + 1;
			}
			acc.push(game);
			return acc;
		}, []);

		setGames(updatedGames);
	};

	const handleRemoveQuantity = (gameId) => {
		const updatedGames = games.reduce((acc, game) => {
			if (gameId === game.id && game.quantity >= 1) {
				game.quantity = game.quantity - 1;
			}
			acc.push(game);
			return acc;
		}, []);

		setGames(updatedGames);
	};

	const handleDeleteGame = (gameId) => setGames(games.filter((game) => game.id !== gameId));

	return (
		<Layout>
			<div className="content">
				<Cart
					handleInputQuantity={handleInputQuantity}
					handleDeleteGame={handleDeleteGame}
					handleRemoveQuantity={handleRemoveQuantity}
					handleAddQuantity={handleAddQuantity}
					games={games}
				/>
				<Totals games={games} />
			</div>
		</Layout>
	);
}

export default App;
