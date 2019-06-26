import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import pink from '@material-ui/core/colors/pink';

const darkGrey = grey[900];
const lightGrey = grey[50];
const mediumPink = pink[400];
const moreStrongPink = pink[600];

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'center',
		fontFamily: '"Montserrat", sans-serif',
		marginTop: '20px',
		backgroundColor: darkGrey,
		color: lightGrey,
		'& a': {
			color: lightGrey,
		},
	},
	container: {
		width: '1160px',
		margin: '0 auto',
		padding: '30px 0',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	main_block: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	logo: {
		fontSize: '26px',
		'& span': {
			color: mediumPink,
			transition: '0.5s',
			'&:hover': {
				color: moreStrongPink,
				transition: '0.5s',
			},
		},
	},
	block: {
		width: '250px',
		margin: '20px 0',
		'& ul': {
			listStyleType: 'none',
		},
	},
	link: {
		transition: '0.5s',
		'&:hover': {
			color: mediumPink,
			transition: '0.5s',
		},
	},
	copyright: {},
});

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.main_block}>
					<div className={classes.block}>
						<div className={classes.logo}>
							<Link to="/">
								<span>DanCoffeeMen</span>
							</Link>
						</div>
						<p>
							Lorem ipsum dolor sit amet, feugiat delicat liberavisse id cum no quo.
						</p>
					</div>
					<div className={classes.block}>
						<h3>Navigation</h3>
						<ul>
							<li>
								<Link to="/" className={classes.link}>
									Home
								</Link>
							</li>
							<li>
								<Link to="/product" className={classes.link}>
									Product
								</Link>
							</li>
							<li>
								<Link to="/about" className={classes.link}>
									About
								</Link>
							</li>
							<li>
								<Link to="/basket" className={classes.link}>
									Basket
								</Link>
							</li>
							<li>
								<Link to="/support" className={classes.link}>
									Support
								</Link>
							</li>
						</ul>
					</div>
					<div className={classes.block}>
						<div>
							<a href="tel: +380442902244">(044) 290-22-44</a>
							<br />
							<span>AVAILABLE AT 10AM - 20PM</span>
						</div>
						<div>
							<h4>Kyiv, KYI</h4>
							<span>Pavla Tycheny avenu, 1v, 6 floor</span>
							<br />
							<span>Ukraine</span>
						</div>
					</div>
					<div className={classes.block}>
						<h3>Info</h3>
						<p>
							Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
							suscipit lobortis nisl ut aliquip ex commodo consequat. Autem vel
							hendrerit iriure dolor in hendrerit.
						</p>
					</div>
				</div>
				<div className={classes.copyright}>
					<span>Copyright. All right reserved.</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
