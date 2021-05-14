import Header from '../Header/Header';

const Layout = (props) => {
	return (
		<div className="main template-default">
			<Header />
			{props.children}
		</div>
	);
};

export default Layout;
