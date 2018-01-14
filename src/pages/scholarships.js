import React from "react";
import styles from "../styles/scholarships.module.css";
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
							<div> On average, an ALS diagnosis costs familes $63,692 annually<sup>*</sup>.</div>
							<div> These costs can influence family memebers' abilities to <br /> pursue their own academic interests. </div>
							<br />
							<div> To help offset that burden, in 2016 we started offering a scholarship <br />for anyone whom has been directly impacted by ALS. </div>
							<div className={styles.leftCentered}>
								<h3> Our Impact So Far: </h3>
								<div> <span className={styles.statistic}>9</span> Total Scholarship Recipients </div>
								<div> <span className={styles.statistic}>$12,000</span> dispersed </div>
								<div> <span className={styles.statistic}>3</span> Two Year Recipients </div>
								<button className="greenButton"> Meet the 2017 Winners </button>
							</div>
					</div>
					<div className={styles.rightMain}>
						<div className={styles.rightPicture}></div>
					</div>
					<div className={styles.bottom}>
						<div> The 2018 scholarship is now open! </div>
						<button className="greenButton"> Apply For the 2018 Steps For Doug Scholarship </button>
					</div>
				</div>
				<div className={styles.references}>
					<sup>*</sup> Larkindale, J., Yang, W., Hogan, P. F., Simon, C. J., Zhang, Y., Jain, A., Habeeb-Louks, E. M., Kennedy, A. and Cwik, V. A. (2014), Cost of illness for neuromuscular diseases in the United States. Muscle Nerve, 49: 431–438. doi:10.1002/mus.23942
				</div>
			</div>
		)
	}
}
export default Scholarships;
