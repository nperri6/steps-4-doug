import React from "react";
import styles from "../styles/scholarships.module.css";
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
console.log(styles);

class Scholarships extends React.Component {
	render() {
		return (
			<div>
				<div className={styles.body}>
					<div className={styles.main}>
					</div>
					<div className={styles.leftMain}>
						<h1> Scholarships </h1>
						<div className={styles.leftText}>
							On average, an ALS diagnosis costs families $63,692 annually*.
							These costs can influence family members' abilities to pursue their own academic interests. <br></br><br></br>To help offset that burden, in 2016 we started offering the Douglas MacInnes ALS Scholarship for anyone whom has been directly impacted by ALS. This scholarship embodies Doug's values and is such a powerful and special way to remember him. 
							<br></br><br></br>Every year these applications lift up the voices and stories of ALS patients and their families. We are so grateful to all of the applicants for sharing their personal experiences with us. We look forward to reading this year's applications. 
							<br></br><button className="greenButton" onClick={ () => navigateTo('/scholarshipWinners/')}>
							Read about the 2018 S4D Winners
							</button>
						</div>
					</div>
					<div className={styles.rightMain}>
						<div className={styles.rightPicture}></div>
					</div>
					<div className={styles.bottom}>
						<div> The 2020 Scholarship Application is now open! </div>
						<button className="greenButton" onClick={ () => navigateTo('/scholarshipApplication/')}>
							2020 Scholarship Application
						</button>
						
					</div>
				</div>
			</div>
		)
	}
}
export default Scholarships;
