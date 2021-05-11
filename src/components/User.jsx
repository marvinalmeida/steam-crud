import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

export const makeFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const User = (props) => (
	<div>
		<Button startIcon={<PersonIcon />} variant="text" color="default">
			{makeFullName(props.firstName, props.lastName)}
		</Button>
	</div>
);
export default User;
