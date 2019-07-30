import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	listItem: {
		padding: theme.spacing(1, 0),
	},
	total: {
		fontWeight: '700',
	},
	title: {
		marginTop: theme.spacing(2),
	},
}));

const Review = ({ products, shippingAddress }) => {
	const classes = useStyles();

	return (
		products && (
			<>
				<Typography variant="h6" gutterBottom>
					Order summary
				</Typography>
				<List disablePadding>
					{products
						.filter(item => item.quantity > 0)
						.map(product => (
							<ListItem className={classes.listItem} key={product._id}>
								<ListItemText
									primary={`${product.brand} ${product.model}`}
									secondary={product.specifications.size}
								/>
								<Typography variant="body2">
									{'Total price per product: $'}
									<span style={{ fontWeight: 700 }}>
										{(product.price * 1000 * product.addQuantity) / 1000}
									</span>
								</Typography>
							</ListItem>
						))}
				</List>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Shipping
						</Typography>
						<Typography gutterBottom>{shippingAddress.name}</Typography>
						<Typography gutterBottom>{shippingAddress.country}</Typography>
						<Typography gutterBottom>{shippingAddress.state}</Typography>
						<Typography gutterBottom>{shippingAddress.city}</Typography>
						{shippingAddress.street && shippingAddress.homeNumber && (
							<Typography
								gutterBottom
							>{`${shippingAddress.street} ${shippingAddress.homeNumber}`}</Typography>
						)}
						{shippingAddress.apartments && (
							<Typography
								gutterBottom
							>{`${shippingAddress.apartments} apart.`}</Typography>
						)}
					</Grid>
					<Grid item container direction="column" xs={12} sm={6}>
						<Typography variant="h6" gutterBottom className={classes.title}>
							Payment details
						</Typography>
						<Grid container>
							<Grid item xs={12}>
								<Typography gutterBottom>{shippingAddress.cardName}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography gutterBottom>{shippingAddress.cardNumber}</Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography gutterBottom>{shippingAddress.expDate}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</>
		)
	);
};

const mapStateToProps = state => ({
	products: state.basket.products,
	shippingAddress: state.basket.shippingAddress,
});

export default connect(mapStateToProps)(Review);
