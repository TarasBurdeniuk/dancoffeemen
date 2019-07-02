import React from 'react';
import MapContainer from './MapContainer';
import './style.css';
import ContactForm from './ContactForm';

  export default function About() {
  
	return (
	<section>
		<section className="container">
	  		<div className = "text-container">
				<div>
					<p>address</p>
					<h3>DanCoffemen<br/>Ukraine, Kyiv. Pavla Tycheny avenu, 1v, 6 floor</h3>
					<p>contact</p>
					<p>Phone:</p>
					<h3>+38 (044) 290-22-44</h3>
					<p>Email:</p>
					<h3>coffemen@gmail.com</h3>
				</div> 
				<div className = "contact-us-item">
					<h3 className="contact-us-title">send us an email</h3>
					<ContactForm />
				</div> 
	  		</div>
	  	</section>
		  	<h3 className="title-map">Located in Ukraine, Kyiv. Pavla Tycheny avenu, 1v</h3>
			<div className="map-container">
		  			<MapContainer />
	  		</div>
	</section>		  
	);
  }
