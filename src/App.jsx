import './App.css';
import { getTotalGames, getTotalPrice } from './utils/totals';
import User from './components/User';
import gamesMock from './mocks/games.json';

function App() {
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
						{gamesMock.map((game) => (
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
						<span>{getTotalGames(gamesMock)}</span>
					</div>
					<div className="totals-items">
						<span>Valor total da compra:</span>
						<span>R$ {getTotalPrice(gamesMock)},00</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
