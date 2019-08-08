import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { validateName, validateEmail, validatePhone } from '../../utills/validateFields';
import pink from '@material-ui/core/colors/pink';
import { setShippingAddress } from '../../actions/basket';

const pinkStrong = pink[500];

const AddressForm = ({ setShippingAddress, shippingAddress }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		country: '',
		state: '',
		city: '',
		street: '',
		houseNumber: '',
		apartment: '',
		contactPhone: '',
		index: '',
	});
	const [errorData, setErrorData] = useState({
		errorName: '',
		errorEmail: '',
		errorPhone: '',
	});

	useEffect(() => {
		setFormData({
			name: shippingAddress.name,
			email: shippingAddress.email,
			country: shippingAddress.country,
			state: shippingAddress.state,
			city: shippingAddress.city,
			street: shippingAddress.street,
			houseNumber: shippingAddress.houseNumber,
			apartment: shippingAddress.apartment,
			contactPhone: shippingAddress.contactPhone,
			index: shippingAddress.index,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const {
		name,
		email,
		country,
		state,
		city,
		street,
		houseNumber,
		apartment,
		contactPhone,
		index,
	} = formData;

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onBlur = form => {
		setShippingAddress(form);
	};

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shipping address
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={4}>
					<TextField
						required
						id="Name"
						name="name"
						label="Name"
						fullWidth
						autoComplete="name"
						value={name}
						onChange={e => onChange(e)}
						onBlur={e => {
							setErrorData({ errorName: validateName(e.target.value) });
							onBlur(formData);
						}}
					/>
					{errorData.errorName && (
						<div style={{ color: pinkStrong }}>{errorData.errorName}</div>
					)}
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						required
						id="email"
						name="email"
						label="Email"
						fullWidth
						autoComplete="email"
						value={email}
						onChange={e => onChange(e)}
						onBlur={e => {
							setErrorData({ errorEmail: validateEmail(e.target.value) });
							onBlur(formData);
						}}
					/>
					{errorData.errorEmail && (
						<div style={{ color: pinkStrong }}>{errorData.errorEmail}</div>
					)}
				</Grid>
				<Grid item xs={12} sm={4}>
					<TextField
						required
						id="contactPhone"
						name="contactPhone"
						label="Phone number"
						fullWidth
						value={contactPhone}
						onChange={e => onChange(e)}
						onBlur={e => {
							setErrorData({ errorPhone: validatePhone(e.target.value) });
							onBlur(formData);
						}}
					/>
					{errorData.errorPhone && (
						<div style={{ color: pinkStrong }}>{errorData.errorPhone}</div>
					)}
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						id="country"
						name="country"
						label="Country"
						fullWidth
						autoComplete="billing country"
						value={country}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						id="state"
						name="state"
						label="State/Region"
						fullWidth
						value={state}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						required
						id="city"
						name="city"
						label="City"
						fullWidth
						autoComplete="billing address-level2"
						value={city}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						required
						id="street"
						name="street"
						label="Street"
						fullWidth
						autoComplete="street"
						value={street}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						required
						id="houseNumber"
						name="houseNumber"
						label="House number"
						fullWidth
						autoComplete="house number"
						value={houseNumber}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						id="apartment"
						name="apartment"
						label="Apartment"
						fullWidth
						value={apartment}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<TextField
						id="index"
						name="index"
						label="Zip / Postal code"
						fullWidth
						autoComplete="index"
						value={index}
						onChange={e => onChange(e)}
						onBlur={() => onBlur(formData)}
					/>
				</Grid>
			</Grid>
			<Typography style={{ padding: '15px' }}>
				<small>* = required field</small>
			</Typography>
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
)(AddressForm);
