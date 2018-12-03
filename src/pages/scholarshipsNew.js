import React from "react";
import styles from "../styles/scholarships.module.css";
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
console.log(styles);

class ScholarshipsNew extends React.Component {
	render() {
		return (
			<div>
				<div className={styles.body}>
					<div className={styles.leftTitle}>
						<h1> Scholarships</h1>
					</div>
					<div className={styles.rightTitle}> Meet the Past Winners!</div>
					<div className={styles.leftTextBox}> sdfsdf</div>
					<div className={styles.leftNotification}> Applications for the 2019 cycle will be released on January 14th, 2019!</div>
					<div className={[styles.scholarshipWinner, styles.rosemaryPicture].join(' ')}> 
						Winner 1
					</div>
					{/* <div className={styles.leftMain}>
						<h1> Scholarships </h1>
							<div> On average, an ALS diagnosis costs families $63,692 annually<sup>*</sup>.</div>
							<div> These costs can influence family members' abilities to <br /> pursue their own academic interests. </div>
							<br />
							<div> To help offset that burden, in 2016 we started offering a scholarship <br />for anyone whom has been directly impacted by ALS. </div>
							<div className={styles.leftCentered}>
								<h3> Our Impact So Far: </h3>
								<div> <span className={styles.statistic}>9</span> Total Scholarship Recipients </div>
								<div> <span className={styles.statistic}>$12,000</span> dispersed </div>
								<div> <span className={styles.statistic}>3</span> Two Year Recipients </div>
							</div>
					</div> */}
					{/* <div className={styles.rightMain}>
						<div className={styles.rightPicture}></div>
					</div> */}
					{/* <div className={styles.bottom}>
						<div> The 2018 Scholarship winners have been announced! </div>
						<button className="greenButton" onClick={ () => navigateTo('/scholarshipWinners/')}>
							Read about the 2018 S4D Winners
						</button>
					</div> */}
				</div>
				{/* <div className={styles.references}>
					<sup>*</sup> Larkindale, J., Yang, W., Hogan, P. F., Simon, C. J., Zhang, Y., Jain, A., Habeeb-Louks, E. M., Kennedy, A. and Cwik, V. A. (2014), Cost of illness for neuromuscular diseases in the United States. Muscle Nerve, 49: 431–438. doi:10.1002/mus.23942
				</div> */}
			</div>
		)
	}
}
export default ScholarshipsNew;