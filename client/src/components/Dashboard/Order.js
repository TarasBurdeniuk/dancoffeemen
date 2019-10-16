import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import Paper from '@material-ui/core/Paper';
import Spinner from '../Loading';
import { loadUserOrderById } from '../../actions/auth';
import { prettyDate, calc } from '../../utills/func';

const strongPink = pink[500];
const moreStrongPink = pink[700];
const strongGrey = grey[700];

const useStyles = makeStyles(theme => ({
	container: {
		minHeight: '100vh',
		backgroundColor: 'white',
		fontFamily: '"Lato", "Roboto", sans-serif',
		marginBottom: 20,
	},
	link: {
		textDecoration: 'none',
	},
	image: {
		width: '8rem',
		height: '8rem',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	brand: {
		display: 'inline-block',
		cursor: 'pointer',
		color: strongGrey,
		'&:hover': {
			color: strongPink,
		},
	},
	total: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	item: {
		justifyContent: 'space-between',
		borderBottom: '1px solid #eeeeee',
		padding: '1rem 1rem',
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			textAlign: 'start',
		},
	},
	price: {
		margin: '1rem 0',
		color: moreStrongPink,
		fontWeight: 600,
		fontSize: 16,
	},
	paper: {
		margin: '30px 0',
	},
	block: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

const Order = ({ match, loadUserOrderById, order }) => {
	useEffect(() => {
		loadUserOrderById(match.params.id);
	}, [loadUserOrderById, match.params.id]);
	const classes = useStyles();

	return !order ? (
		<Spinner />
	) : (
		<>
			<Grid container justify="center" className={classes.container}>
				<Container maxWidth="md">
					<div className={classes.block}>
						<h2>Order #{order.orderNumber}</h2>
						<h3>{prettyDate(order.date)}</h3>
					</div>
					<Paper className={classes.paper}>
						{order.products.map(product => (
							<Grid container key={product._id} className={classes.item}>
								<Grid item xs={12} md={3}>
									<Link to={`/products/${product._id}`}>
										<img
											src={`../../${product.image[0]}`}
											alt={product.model}
											className={classes.image}
										/>
									</Link>
								</Grid>
								<Grid item xs={12} md={5}>
									<Link to={`/products/${product._id}`}>
										<Typography
											variant="h6"
											component="h2"
											gutterBottom
											className={classes.brand}
										>
											{product.brand} {product.model}
										</Typography>
									</Link>
									<Typography variant="subtitle2">
										Quantity: {product.addQuantity}
									</Typography>
									<Typography variant="subtitle2">
										Per one:{' '}
										<span className={classes.price}>${product.price}</span>
									</Typography>
								</Grid>
								<Grid item xs={12} md={1} className={classes.total}>
									<Typography variant="h4" className={classes.price}>
										{'$'}
										{calc(product.price, product.addQuantity)}
									</Typography>
								</Grid>
							</Grid>
						))}
					</Paper>
					<Typography variant="subtitle2" style={{ marginBottom: 20 }}>
						Total price: <span className={classes.price}>${order.totalPrice}</span>
					</Typography>
					<Link to="/dashboard" className={classes.link}>
						<Button variant="contained" color="primary">
							Back To Dashboard
						</Button>
					</Link>
				</Container>
			</Grid>
		</>
	);
};

Order.propTypes = {
	match: PropTypes.object.isRequired,
	loadUserOrderById: PropTypes.func.isRequired,
	order: PropTypes.object,
};

Order.defaultProps = {
	order: null,
};

const mapStateToProps = state => ({
	order: state.auth.order,
});

const mapDispatchToProps = {
	loadUserOrderById,
};
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Order);
