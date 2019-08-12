import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { validateEmail, validatePassword } from '../../utills/validateFields';
import { login } from '../../actions/auth';
import pink from '@material-ui/core/colors/pink';

const pinkStrong = pink[500];

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	container: {
		minHeight: '100vh',
	},
	error: {
		color: pinkStrong,
	},
}));

const SignIn = ({ login, isAuthenticated }) => {
	const classes = useStyles();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [errorData, setErrorData] = useState({
		errorPassword: '',
		errorEmail: '',
		checkFields: '',
	});

	const { email, password } = formData;

	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = e => {
		e.preventDefault();
		if (!password || !email || errorData.errorEmail) {
			setErrorData({ ...errorData, checkFields: 'All fields must be filled in' });
		} else {
			login(email, password);
		}
	};

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<Container className={classes.container} component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} onSubmit={e => onSubmit(e)}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						type="email"
						name="email"
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
						<div className={classes.error}>{errorData.errorEmail}</div>
					)}
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						value={password}
						onChange={e => {
							onChange(e);
							setErrorData({
								...errorData,
								errorPassword: validatePassword(e.target.value),
							});
						}}
					/>
					{errorData.errorPassword && (
						<div className={classes.error}>{errorData.errorPassword}</div>
					)}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					{errorData.checkFields && (
						<div className={classes.error}>{errorData.checkFields}</div>
					)}
					<Grid container justify="flex-end">
						<Grid item>
							<Link to="/register" variant="body2">
								Don't have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};

SignIn.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
	login,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignIn);
