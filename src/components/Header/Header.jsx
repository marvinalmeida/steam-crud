import { Wrapper } from './Header.styles';
import { Badge, Button } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import {useState} from 'react'

const Header = () => {
	const [totals, setTotals]=useState(JSON.parse(localStorage.getItem('games')|| '[]').length)

	return <Wrapper>
		<img src="/logo.png" alt="logo steam" />

		<Link to="/">
			<Button startIcon={<HomeIcon />} variant="text" color="primary">
				Home
			</Button>
		</Link>

		<Link to="/sacola">
			<Badge anchorOrigin={{horizontal:'left', vertical:'top'}} badgeContent={totals} color="primary">
				<Button startIcon={<ShoppingBasketIcon />} variant="text" color="primary">
					Sacola
				</Button>
			</Badge>
		</Link>
	</Wrapper>;
};

export default Header;
