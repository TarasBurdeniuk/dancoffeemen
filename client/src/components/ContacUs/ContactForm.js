import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	dense: {
		marginTop: theme.spacing(2),
	},
	menu: {
		width: 400,
	},
}));

const ContactForm = () => {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		name: '',
		age: '',
		multiline: 'Controlled',
		currency: 'EUR',
	});

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};

	return (
		<form className={classes.container} noValidate autoComplete="off">
			<TextField
				id="outlined-name"
				label="Name"
				className={classes.textField}
				value={values.name}
				onChange={handleChange('name')}
				margin="normal"
				variant="outlined"
			/>
			<TextField
				id="outlined-email-input"
				label="Email"
				className={classes.textField}
				type="email"
				name="email"
				autoComplete="email"
				margin="normal"
				variant="outlined"
			/>
			<TextField
				id="outlined-multiline-static"
				label="Your message"
				multiline
				rows="8"
				defaultValue=""
				className={classes.textField}
				margin="normal"
				variant="outlined"
			/>
		</form>
	);
};

export default ContactForm;
