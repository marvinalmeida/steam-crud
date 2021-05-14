import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { Wrapper } from './cart-quantity.styles';

const CartQuantity = (props) => {
	return (
		<Wrapper>
			<span>Quantidade</span>
			<RemoveCircleOutlineIcon />
			<input value={props.quantity} />
			<AddIcon />
		</Wrapper>
	);
};

export default CartQuantity;
