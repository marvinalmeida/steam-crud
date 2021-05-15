import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { Wrapper } from './cart-quantity.styles';
import DeleteIcon from '@material-ui/icons/Delete';

const CartQuantity = (props) => {
	return (
		<Wrapper>
			<span>Quantidade</span>
			<RemoveCircleOutlineIcon onClick={() => props.handleRemoveQuantity(props.gameId)} />
			<input
				onChange={(e) => {
					if (!isNaN(Number(e.target.value))) {
						props.handleInputQuantity(props.gameId, Number(e.target.value));
					}
				}}
				value={props.quantity}
			/>
			<AddIcon onClick={() => props.handleAddQuantity(props.gameId)} />
			<DeleteIcon onClick={() => props.handleDeleteGame(props.gameId)} />
		</Wrapper>
	);
};

export default CartQuantity;
