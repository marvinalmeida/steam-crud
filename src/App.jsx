import { useEffect, useState } from 'react';
import './App.css';
import { getTotalGames, getTotalPrice } from './utils/totals';
import User from './components/User';

function App() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		setGames(JSON.parse(localStorage.getItem('games')));
	}, []);

	return (
		<div className="main template-default">
			<div className="header">
				<img src="/logo.png" alt="logo steam" />
				<User firstName="Marvin" lastName="Almeida" />
			</div>
			<div className="content">
				<div className="list">
					<h3 className="title">Seu Carrinho</h3>
					<div className="games">
						{games.map((game) => (
							<div className="games-item">
								<div className="games-img">
									<img src={`/${game.img}`} alt="imagem resident" />
								</div>
								<div className="games-infos">
									<span className="product-title">{game.title}</span>
									<span className="product-subtitle">{game.price}</span>
									<span className="product-from">From {game.from}</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="totals">
					<h3 className="title">Total</h3>
					<div className="totals-items">
						<span>Total de itens:</span>
						<span>{getTotalGames(games)}</span>
					</div>
					<div className="totals-items">
						<span>Valor total da compra:</span>
						<span>R$ {getTotalPrice(games)},00</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
