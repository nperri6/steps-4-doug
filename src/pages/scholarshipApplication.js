import React from "react";
import styles from "../styles/scholarshipApplication.module.css";
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
console.log(styles);

class ScholarshipApplication extends React.Component {
	render() {
		return (
			<div>
				<div className={styles.body}>
                    <div className={styles.title}>
                        <h1> 2019 Scholarship Application </h1>
                    </div>
                    <div> 
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdidPO8HQdNlcNdxT1un30oS54qH0rYU1wW78vEZW0sWjq5MA/viewform?embedded=true" width="640" height="3035" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                    </div>
				</div>
			</div>
		)
	}
}
export default ScholarshipApplication;
