import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';
import Typography from '@material-ui/core/Typography';
import { validateEmail, validateName, validatePhone } from '../../utills/validateFields';
import { saveAddress } from '../../actions/auth';

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
			phone: user.phone,
			index: user.index || '',
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const [readOnly, setReadOnly] = useState(true);
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
			setReadOnly(!readOnly);
		}
	};
	const classes = useStyles();
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
	return (
		<>
			<form onSubmit={e => checkForm(e)}>
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
							InputProps={{
								readOnly: readOnly,
							}}
							onChange={e => {
								onChange(e);
							}}
							onBlur={e => {
								setErrorData({
									...errorData,
									errorName: validateName(e.target.value),
								});
							}}
						/>
						{errorData.errorName && (
							<small style={{ color: strongPink }}>{errorData.errorName}</small>
						)}
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							required
							id="email"
							name="email"
							label="Email"
							type="email"
							fullWidth
							autoComplete="email"
							value={email}
							InputProps={{
								readOnly: readOnly,
							}}
							onChange={e => onChange(e)}
							onBlur={e => {
								setErrorData({
									...errorData,
									errorEmail: validateEmail(e.target.value),
								});
							}}
						/>
						{errorData.errorEmail && (
							<small style={{ color: strongPink }}>{errorData.errorEmail}</small>
						)}
					</Grid>
					<Grid item xs={12} sm={4}>
						<TextField
							required
							id="phone"
							name="phone"
							label="Phone number"
							fullWidth
							value={phone}
							InputProps={{
								readOnly: readOnly,
							}}
							onChange={e => onChange(e)}
							onBlur={e => {
								setErrorData({
									...errorData,
									errorPhone: validatePhone(e.target.value),
								});
							}}
						/>
						{errorData.errorPhone && (
							<small style={{ color: strongPink }}>{errorData.errorPhone}</small>
						)}
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							id="country"
							name="country"
							label="Country"
							fullWidth
							InputProps={{
								readOnly: readOnly,
							}}
							value={country}
							onChange={e => onChange(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							id="state"
							name="state"
							label="State/Region"
							fullWidth
							InputProps={{
								readOnly: readOnly,
							}}
							value={state}
							onChange={e => onChange(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							id="city"
							name="city"
							label="City"
							fullWidth
							InputProps={{
								readOnly: readOnly,
							}}
							value={city}
							onChange={e => onChange(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							id="street"
							name="street"
							label="Street"
							fullWidth
							InputProps={{
								readOnly: readOnly,
							}}
							value={street}
							onChange={e => onChange(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							id="houseNumber"
							name="houseNumber"
							label="House number"
							fullWidth
							InputProps={{
								readOnly: readOnly,
							}}
							value={houseNumber}
							onChange={e => onChange(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							id="apartment"
							name="apartment"
							label="Apartment"
							fullWidth
							InputProps={{
								readOnly: readOnly,
							}}
							value={apartment}
							onChange={e => onChange(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={3}>
						<TextField
							id="index"
							name="index"
							label="Zip / Postal code"
							fullWidth
							InputProps={{
								readOnly: readOnly,
							}}
							value={index}
							onChange={e => onChange(e)}
						/>
					</Grid>
				</Grid>

				<Typography style={{ padding: '15px' }}>
					<small>* = required field</small>
				</Typography>
				{errorData.checkFields && <p className={classes.error}>{errorData.checkFields}</p>}
				<Button
					variant="contained"
					color="secondary"
					className={classes.button}
					onClick={() => {
						setReadOnly(!readOnly);
					}}
				>
					Edit
				</Button>
				{!readOnly && (
					<Button
						type="submit"
						variant="contained"
						color="secondary"
						className={classes.button}
					>
						Save
					</Button>
				)}
			</form>
		</>
	);
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
