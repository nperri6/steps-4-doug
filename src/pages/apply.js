import React from "react";
import styles from "../styles/apply.module.css";

class Apply extends React.Component {
	render() {
		return (
			<div>
				<div className={styles.body}>
					<h2> The 2018 Douglas MacInnes ALS Scholarship </h2>
					<div> To apply for the 2018 scholarship, please use the google form below.</div>
					<div> If the embeded form doesn't work for you, you can <a href="https://docs.google.com/forms/d/e/1FAIpQLSccVb9DGh20-B2a4gMY5glbc4xSXP-Cfkco7jKbUwtmp4xLFg/viewform?usp=sf_link" target="_blank"> view the form here </a> </div><br />

					<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSccVb9DGh20-B2a4gMY5glbc4xSXP-Cfkco7jKbUwtmp4xLFg/viewform?embedded=true" width="760" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
				</div>
			</div>
		)
	}
}

export default Apply;
