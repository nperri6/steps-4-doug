import React from "react";
import styles from "../styles/contact.module.css";
import { navigateTo } from 'gatsby-link';
import facebookLogo from "../images/facebookLogo.png";
import twitterLogo from "../images/twitterLogo.png";

class Contact extends React.Component {
	render() {
		return (
			<div className={styles.main}>
				<div className={styles.contactDetails}>
					<h2> Connect With Us: </h2>
					<div> Interested in learning more about Steps 4 Doug? </div>
					<div> Want to volunteer with the organization? </div>
					<div> Looking for more info on scholarships? </div>
					<div> Please reach out! </div>
					<div className={styles.iconRow}>
						<div className={styles.icon}>
							<a href="https://www.facebook.com/Steps-For-Doug-139673039428244/" target="_blank">
								<img src={facebookLogo} alt="S4D Facebook" />
							</a>
						</div>
						<div className={styles.icon}>
							<a href="https://twitter.com/stepsfordoug" target="_blank">
								<img src={twitterLogo} alt="S4D Twitter" />
							</a>
						</div>
					</div>
				</div>
				<div className={styles.contactForm}>
					<h2> Contact Us: </h2>
					<form method="POST" action="http://formspree.io/nperri6@gmail.com">
						<input type="text" name="name" placeholder="Your name" /><br/>
					  <input type="email" name="email" placeholder="Your email" /><br/>
					  <textarea name="message" placeholder="Your message"></textarea><br/>
					  <button type="submit">Send</button>
					</form>
				</div>
			</div>
		)
	}
}
export default Contact;
