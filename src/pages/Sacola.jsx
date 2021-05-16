import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Totals from '../components/Totals/Totals';
import Cart from '../components/Cart/Cart';

function Sacola() {
	const gamesFromLocalStorage = JSON.parse(localStorage.getItem("games") || '[]' );

	const [games, setGames] = useState(gamesFromLocalStorage);

	const handleInputQuantity = (gameId, quantity) => {
		const updatedGames = games.reduce((acc, game) => {
			if (gameId === game.id && quantity <= game.stock) {
				game.quantity = quantity;
			}
			acc.push(game);
			return acc;
		}, []);
		localStorage.setItem('games', JSON.stringify(updatedGames))
		setGames(updatedGames);
	};

	const handleAddQuantity = (gameId) => {
		const updatedGames = games.reduce((acc, game) => {
			if (gameId === game.id && game.quantity < game.stock) {
				game.quantity = game.quantity + 1;
			}
			acc.push(game);
			return acc;
		}, []);
		localStorage.setItem('games', JSON.stringify(updatedGames))
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
		localStorage.setItem('games', JSON.stringify(updatedGames))
		setGames(updatedGames);
	};

	const handleDeleteGame = (gameId) => {
		const updatedGames = games.filter((game) => game.id !== gameId);
		localStorage.setItem('games', JSON.stringify(updatedGames))
		setGames(updatedGames)
	};

	return (
		<Layout>
			<div className="content">
				{games.length === 0 ? (
					<span>Sacola vazia</span>
				) : (
					<>
						<Cart
							handleInputQuantity={handleInputQuantity}
							handleDeleteGame={handleDeleteGame}
							handleRemoveQuantity={handleRemoveQuantity}
							handleAddQuantity={handleAddQuantity}
							games={games}
						/>
						<Totals games={games} />
					</>
				)}
			</div>
		</Layout>
	);
}

export default Sacola;
