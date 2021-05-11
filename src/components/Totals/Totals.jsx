import { getTotalGames, getTotalPrice } from '../../utils/totals';
import { Wrapper, TotalsItems } from './Totals.styles'

const Totals = (props) => (
	<Wrapper>
		<h3 className="title">Total</h3>
		<TotalsItems>
			<span>Total de itens:</span>
			<span>{getTotalGames(props.games)}</span>
		</TotalsItems>
		<TotalsItems>
			<span>Valor total da compra:</span>
			<span>R$ {getTotalPrice(props.games)},00</span>
		</TotalsItems>
	</Wrapper>
);

export default Totals;
