import { Button } from '@material-ui/core';

const Product = (props) => {
	const handleClick = (id) => {
		const games = JSON.parse(localStorage.getItem('games'));

		if (!games) {
			return localStorage.setItem('games', JSON.stringify([{ ...props.game, quantity: 1 }]));
		}

		const gameAdicionado = games.find((game) => game.id === id);

		let formatedGames = [];

		if (gameAdicionado) {
			formatedGames = games.map((game) => {
				if (game.id === id) {
					game.quantity = game.quantity + 1;
					return game;
				}

				return game;
			});
		} else {
			formatedGames = [...games, { ...props.game, quantity: 1 }]

		}
		localStorage.setItem('games', JSON.stringify(formatedGames));
	};
	return (
		<div className="games-item">
			<div className="games-img">
				<img src={`/${props.game.img}`} alt="imagem resident" />
			</div>
			<div className="games-info">
				<span className="product-title">{props.game.title}</span>
				<Button
					onClick={() => handleClick(props.game.id)}
					className="product-add-btn"
					variant="contained"
				>
					adicionar à sacola
				</Button>
			</div>
		</div>
	);
};

export default Product;
