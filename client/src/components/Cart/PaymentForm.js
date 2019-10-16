import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import pink from '@material-ui/core/colors/pink';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { setShippingAddress } from '../../actions/basket';
import { validateCVV } from '../../utills/validateFields';

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

	const { cardNumber, expDate, cvv } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

	const onBlur = form => {
		setShippingAddress(form);
	};

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Payment method
			</Typography>
			<Container component="main" style={{ maxWidth: 300 }}>
				<TextField
					style={{ marginTop: 15 }}
					required
					id="cardNumber"
					label="Card number"
					fullWidth
					value={cardNumber}
					onChange={e => onChange(e)}
					onBlur={() => onBlur(formData)}
				/>
				<TextField
					style={{ marginTop: 15 }}
					required
					id="expDate"
					label="Expiry date"
					fullWidth
					value={expDate}
					onChange={e => onChange(e)}
					onBlur={() => onBlur(formData)}
				/>
				<TextField
					style={{ marginTop: 15 }}
					required
					id="cvv"
					label="CVV"
					helperText="Last three digits on signature strip"
					fullWidth
					type="password"
					value={cvv}
					onChange={e => onChange(e)}
					onBlur={e => {
						setErrorData({ errorCVV: validateCVV(e.target.value) });
						onBlur(formData);
					}}
				/>
				{errorData.errorCVV && (
					<div style={{ color: pinkStrong, fontSize: 10 }}>{errorData.errorCVV}</div>
				)}
			</Container>
			<Typography style={{ padding: '15px' }}>
				<small>* = required field</small>
			</Typography>
		</>
	);
};

PaymentForm.propTypes = {
	setShippingAddress: PropTypes.func.isRequired,
	shippingAddress: PropTypes.object.isRequired,
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
