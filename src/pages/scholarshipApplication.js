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
                        <h1> 2020 Scholarship Application </h1>
                    </div>
                    <div>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdvdKXl5e9TB0bXPbPCm5zBRT2v7NMlu4fAb57pJYn3Tr6MDg/viewform?embedded=true" width="640" height="3035" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
				</div>
			</div>
		)
	}
}
export default ScholarshipApplication;
