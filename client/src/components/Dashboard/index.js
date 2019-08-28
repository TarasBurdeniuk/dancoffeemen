import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from '../Loading';
import DashboardActions from './DashboardActions';
import { loadUserOrders, clearOrder } from '../../actions/auth';

const useStyles = makeStyles({
	container: {
		minHeight: '100vh',
		backgroundColor: 'white',
		fontFamily: '"Lato", "Roboto", sans-serif',
	},
	welcome: {
		fontSize: 18,
	},
});

const Dashboard = ({ user, loading, loadUserOrders, clearOrder }) => {
	useEffect(() => {
		loadUserOrders();
		clearOrder();
	});
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="md">
			{!user || loading ? (
				<Spinner />
			) : (
				<>
					<h2>Dashboard</h2>
					<p className={classes.welcome}>Welcome {user && user.name}</p>
					<DashboardActions />
				</>
			)}
		</Container>
	);
};

const mapStateToProps = state => ({
	user: state.auth.user,
	loading: state.auth.loading,
});

const mapDispatchToProps = {
	loadUserOrders,
	clearOrder,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Dashboard);
