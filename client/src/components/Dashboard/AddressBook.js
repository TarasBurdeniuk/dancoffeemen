import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { validateEmail, validateName, validatePhone } from '../../utills/validateFields';
import { saveAddress } from '../../actions/auth';
import Container from '@material-ui/core/Container';

const strongPink = pink[500];

const useStyles = makeStyles(theme => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	button: {
		margin: theme.spacing(1),
	},
	error: {
		color: strongPink,
	},
	block: {
		padding: '20px 0',
		maxWidth: 300,
	},
}));

const AddressBook = ({ user, saveAddress }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		country: '',
		state: '',
		city: '',
		street: '',
		houseNumber: '',
		apartment: '',
		phone: '',
		index: '',
	});
	const [errorData, setErrorData] = useState({
		errorName: '',
		errorEmail: '',
		errorPhone: '',
		checkFields: '',
	});
	useEffect(() => {
		setFormData({
			name: user.name || '',
			email: user.email || '',
			country: user.country || '',
			state: user.state || '',
			city: user.city || '',
			street: user.street || '',
			houseNumber: user.houseNumber || '',
			apartment: user.apartment || '',
			phone: user.phone || '',
			index: user.index || '',
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
		phone,
		index,
	} = formData;
	const { errorName, errorEmail, errorPhone } = errorData;

	const checkForm = e => {
		e.preventDefault();
		if (errorName || errorEmail || errorPhone) {
			setErrorData({
				...errorData,
				checkFields: 'All fields must be filled in or check all fields',
			});
		} else {
			setErrorData({ errorName: '', errorEmail: '', errorPhone: '', checkFields: '' });
			saveAddress(formData);
		}
	};
	const classes = useStyles();
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	return (
		<>
			<form onSubmit={e => checkForm(e)}>
				<Grid container spacing={3}>
					<Container className={classes.block} component="main">
						<TextField
							style={{ marginTop: 15 }}
							required
							id="Name"
							name="name"
							label="Name"
							fullWidth
							autoComplete="name"
							value={name}
							onChange={e => {
								onChange(e);
								setErrorData({
									...errorData,
									errorName: validateName(e.target.value),
								});
							}}
						/>
						{errorData.errorName && (
							<small style={{ color: strongPink }}>{errorData.errorName}</small>
						)}
						<TextField
							style={{ marginTop: 15 }}
							required
							id="email"
							name="email"
							label="Email"
							type="email"
							fullWidth
							autoComplete="email"
							value={email}
							onChange={e => {
								onChange(e);
								setErrorData({
									...errorData,
									errorEmail: validateEmail(e.target.value),
								});
							}}
						/>
						{errorData.errorEmail && (
							<small style={{ color: strongPink }}>{errorData.errorEmail}</small>
						)}
						<TextField
							style={{ marginTop: 15 }}
							required
							id="phone"
							name="phone"
							label="Phone number"
							fullWidth
							value={phone}
							onChange={e => {
								onChange(e);
								setErrorData({
									...errorData,
									errorPhone: validatePhone(e.target.value),
								});
							}}
						/>
						{errorData.errorPhone && (
							<small style={{ color: strongPink }}>{errorData.errorPhone}</small>
						)}
					</Container>
					<Container style={{ padding: '20px 0', maxWidth: 300 }} component="main">
						<TextField
							style={{ marginTop: 15 }}
							id="country"
							name="country"
							label="Country"
							fullWidth
							value={country}
							onChange={e => onChange(e)}
						/>
						<TextField
							style={{ marginTop: 15 }}
							id="state"
							name="state"
							label="State/Region"
							fullWidth
							value={state}
							onChange={e => onChange(e)}
						/>
						<TextField
							style={{ marginTop: 15 }}
							id="city"
							name="city"
							label="City"
							fullWidth
							value={city}
							onChange={e => onChange(e)}
						/>
						<TextField
							style={{ marginTop: 15 }}
							id="street"
							name="street"
							label="Street"
							fullWidth
							value={street}
							onChange={e => onChange(e)}
						/>
						<TextField
							style={{ marginTop: 15 }}
							id="houseNumber"
							name="houseNumber"
							label="House number"
							fullWidth
							value={houseNumber}
							onChange={e => onChange(e)}
						/>
						<TextField
							style={{ marginTop: 15 }}
							id="apartment"
							name="apartment"
							label="Apartment"
							fullWidth
							value={apartment}
							onChange={e => onChange(e)}
						/>
						<TextField
							style={{ marginTop: 15 }}
							id="index"
							name="index"
							label="Zip/Postal code"
							fullWidth
							value={index}
							onChange={e => onChange(e)}
						/>
					</Container>
				</Grid>
				<Typography style={{ padding: '15px' }}>
					<small>* = required field</small>
				</Typography>
				{errorData.checkFields && <p className={classes.error}>{errorData.checkFields}</p>}
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					className={classes.button}
				>
					Save
				</Button>
			</form>
		</>
	);
};

AddressBook.propTypes = {
	user: PropTypes.object.isRequired,
	saveAddress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	user: state.auth.user,
});

const mapDispatchToProps = {
	saveAddress,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AddressBook);
