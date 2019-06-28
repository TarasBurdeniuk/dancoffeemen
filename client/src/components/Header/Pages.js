import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
	formControl: {
		minWidth: 120,
	},
});

const Pages = ({ links }) => {
	const classes = useStyles();

	const inputLabel = useRef(null);
	const [labelWidth, setLabelWidth] = useState(0);
	useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const navLinks = links.map(link => (
		<div key={link.id}>
			<NavLink exact to={link.route}>
				<MenuItem value={link.text}>{link.text}</MenuItem>
			</NavLink>
		</div>
	));

	return (
		<FormControl variant="outlined" className={classes.formControl}>
			<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
				Page
			</InputLabel>
			<Select
				value=""
				input={
					<OutlinedInput labelWidth={labelWidth} name="page" id="outlined-age-simple" />
				}
			>
				{navLinks}
			</Select>
		</FormControl>
	);
};

export default Pages;
