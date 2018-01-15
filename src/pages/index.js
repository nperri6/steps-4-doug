import React from 'react';
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import styles from "./main.css";

const IndexPage = () => (
	<div className="wrapper">
		<div className="banner">
			<div className="bannerTextContainer">
				<div className="bannerText">
				2018 Scholarship applications are now open!
				</div>
				<button className="greenButton"  onClick={ () => navigateTo('/apply/')}> Apply today </button>
			</div>
		</div>
		<div className="mission">
			<div className="missionText"> Transforming funding and education of ALS through Patient Care Grants, Research and Educational Resources </div>
		</div>
	</div>
)

export default IndexPage;
