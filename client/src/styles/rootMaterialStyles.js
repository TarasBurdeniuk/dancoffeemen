import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';

const pinkStrong = pink[500];
const pinkMoreStrong = pink[600];
const greyStrong = grey[600];

export const theme = createMuiTheme({
	overrides: {
		MuiInputLabel: {
			// Name of the component ⚛️ / style sheet
			root: {
				'&$focused': {
					// increase the specificity for the pseudo class
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
	},
});
