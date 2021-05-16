import User from '../User/User';
import { Wrapper } from './Header.styles';
import { Button } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const Header = () => (
	<Wrapper>
		<img src="/logo.png" alt="logo steam" />

		<Link to="/">
			<Button startIcon={<HomeIcon />} variant="text" color="primary">
				Home
			</Button>
		</Link>

		<Link to="/sacola">
			<Button startIcon={<ShoppingBasketIcon />} variant="text" color="primary">
				Sacola
			</Button>
		</Link>
	</Wrapper>
);

export default Header;
