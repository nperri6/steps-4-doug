import React from 'react';
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import styles from "./main.css";

const IndexPage = () => (
	<div className="wrapper">
		<div className="banner">
			<div className="bannerTextContainer">
				<div className="bannerText">
					<h2>The 2020 Scholarship Application is Now Open!</h2>
					<button className="greenButton" onClick={ () => navigateTo('/scholarshipApplication/')}>
							2020 Scholarship Application
						</button>
				</div>
			</div>
		</div>
		<div className="mission">
			<div className="missionText"> Supporting families through an ALS diagnosis</div>
		</div>
	</div>
)

export default IndexPage;
