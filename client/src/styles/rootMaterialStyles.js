import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';

const pinkStrong = pink[500];
const pinkMoreStrong = pink[600];
const greyStrong = grey[600];
const greyLight = grey[500];

export default createMuiTheme({
	typography: {
		// Use the system font.
		fontFamily: '-apple-system,system-ui,BlinkMacSystemFont, "Lato", "Roboto", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 700,
	},
	overrides: {
		MuiInputLabel: {
			root: {
				'&$focused': {
					color: pinkStrong,
				},
			},
		},
		MuiOutlinedInput: {
			notchedOutline: {
				borderColor: `${greyStrong} !important`,
			},
		},
		MuiButton: {
			containedPrimary: {
				backgroundColor: pinkStrong,
				'&:hover': {
					backgroundColor: pinkMoreStrong,
				},
			},
		},
		MuiList: {
			root: {
				'& a': {
					textDecoration: 'none',
				},
			},
		},
		MuiCardContent: {
			root: {
				margin: 0,
				padding: 0,
			},
		},
		MuiGrid: {
			root: {
				fontFamily: '"Lato", "Roboto", sans-serif',
				'& a': {
					textDecoration: 'none',
					color: greyLight,
					'&:hover': {
						color: greyStrong,
					},
				},
			},
		},
		MuiStepIcon: {
			active: {
				color: `${pinkStrong} !important`,
			},
			root: {
				color: `${greyStrong} !important`,
			},
		},
		MuiInput: {
			underline: {
				'&:after': {
					borderBottom: `2px solid ${pinkStrong}`,
				},
			},
		},
		MuiTab: {
			textColorPrimary: {
				color: `${greyStrong} !important`,
			},
		},
		PrivateTabIndicator: {
			root: {
				backgroundColor: `${pinkStrong} !important`,
			},
		},
		MuiPaper: {
			elevation4: {
				boxShadow: 'none',
			},
		},
	},
});
