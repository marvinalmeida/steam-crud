import { Wrapper } from './Cart.styles';

const Cart = (props) => (
	<Wrapper>
		<h3 className="title">Seu Carrinho</h3>
		<div className="games">
			{props.games.map((game) => (
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
	</Wrapper>
);

export default Cart;