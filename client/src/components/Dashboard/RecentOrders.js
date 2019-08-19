import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';
import { prettyDate } from '../../utills/func';

const lightGrey = grey[100];
const strongGrey = grey[600];
const darkGrey = grey[900];
const strongPink = pink[600];

const styles = {
	table: {
		display: 'table',
		borderCollapse: 'separate',
		borderSpacing: '2px',
		color: strongGrey,
	},
	thItem: {
		textAlign: 'center',
		width: '25vw',
		padding: '0.5rem 0',
		'& a': {
			fontSize: 18,
			color: strongPink,
			'&:hover': {
				color: darkGrey,
			},
		},
	},
	trItem: {
		backgroundColor: lightGrey,
	},
	'@media screen and (min-width:480px)': {
		thItem: {
			padding: '1rem',
		},
	},
};

const RecentOrders = ({ classes, userOrders }) => {
	return !userOrders.length ? (
		<p>You haven't placed any orders</p>
	) : (
		<table className={classes.table}>
			<thead>
				<tr className={classes.trItem}>
					<th className={classes.thItem}>Date</th>
					<th className={classes.thItem}>Number</th>
					<th className={classes.thItem}>Total</th>
					<th className={classes.thItem}>Status</th>
				</tr>
			</thead>
			<tbody>
				{userOrders.map(order => (
					<tr key={order._id}>
						<td className={classes.thItem}>{prettyDate(order.date)}</td>
						<td className={classes.thItem}>
							<Link to={`/dashboard/order/${order._id}`}>{order.orderNumber}</Link>
						</td>
						<td className={classes.thItem}>{`$${order.totalPrice}`}</td>
						<td className={classes.thItem}>{order.orderStatus}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

const mapStateToProps = state => ({
	userOrders: state.auth.userOrders,
});

export default connect(mapStateToProps)(injectSheet(styles)(RecentOrders));
