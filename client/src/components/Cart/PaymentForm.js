import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { setShippingAddress } from '../../actions/basket';
import { validateCVV } from '../../utills/validateFields';
import pink from '@material-ui/core/colors/pink';

const pinkStrong = pink[500];

const PaymentForm = ({ setShippingAddress, shippingAddress }) => {
	const [formData, setFormData] = useState({
		cardName: '',
		cardNumber: '',
		expDate: '',
		cvv: '',
	});

	const [errorData, setErrorData] = useState({
		errorCVV: '',
	});
	useEffect(() => {
		setFormData({
			cardName: shippingAddress.cardName,
			cardNumber: shippingAddress.cardNumber,
			expDate: shippingAddress.expDate,
			cvv: shippingAddress.cvv,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { cardName, cardNumber, expDate, cvv } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

	const onBlur = form => {
		setShippingAddress(form);
	};

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Payment method
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						id="cardName"
						label="Name on card"
						fullWidth
						value={cardName}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardNumber"
						label="Card number"
						fullWidth
						value={cardNumber}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="expDate"
						label="Expiry date"
						fullWidth
						value={expDate}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cvv"
						label="CVV"
						helperText="Last three digits on signature strip"
						fullWidth
						value={cvv}
						onChange={e => onChange(e)}
						onBlur={e => {
							setErrorData({ errorCVV: validateCVV(e.target.value) });
							onBlur(formData);
						}}
					/>
					{errorData.errorCVV && (
						<div style={{ color: pinkStrong }}>{errorData.errorCVV}</div>
					)}
				</Grid>
			</Grid>
		</>
	);
};

const mapStateToProps = state => ({
	shippingAddress: state.basket.shippingAddress,
});

const mapDispatchToProps = {
	setShippingAddress,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PaymentForm);
