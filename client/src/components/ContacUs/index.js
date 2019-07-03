import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MapContainer from './MapContainer';
import ContactForm from './ContactForm';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Lato', 'Roboto', sans serif",
        fontSize: 13
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '30px 0px'

    },
    "contact-item": {
        textAlign: 'center',
        lineHeight: '20px',
        fontSize: 17,
        lineHeight: '20px'
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 20,
        textDecoration: 'underline',
        paddingBottom: '8px'
    },
    "feedback-item": {
        textAlign: 'center',
        
    },
    "map-container": {
        display: 'block',
        height: '300px'
    }
});

const ContactUs = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes["contact-item"]}>
                    <p className={classes.title}>address</p>
                    <h4>DanCoffemen<br/>Ukraine, Kyiv. Pavla Tycheny avenu, 1v, 6 floor</h4>
					<p className={classes.title}>contact</p>
				    <p>Phone:</p>
                    <h5>+38 (044) 290-22-44</h5>
					<p>Email:</p>
 					<h5>coffemen@gmail.com</h5>
                </div>
                <div className={classes["feedback-item"]}>
                    <p className={classes.title}>send us an email</p>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className={classes["map-container"]}>
                <MapContainer />
            </div>
        </div>
    );
};

export default ContactUs;