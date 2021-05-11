import User from '../User/User';
import { Wrapper } from './Header.styles'

const Header = () => (
	<Wrapper>
		<img src="/logo.png" alt="logo steam" />
		<User firstName="Marvin" lastName="Almeida" />
	</Wrapper>
);

export default Header;
