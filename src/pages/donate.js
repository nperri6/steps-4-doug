import React from 'react';
import styles from "../styles/donate.module.css";

class Donate extends React.Component {
	render() {
		return (
			<div className={styles.main}>
				<div className={styles.leftTitle}>
					<h1>Donate</h1>
				</div>
				<div className={styles.leftDonateOne}>
					<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick"/>
						<input type="hidden" name="hosted_button_id" value="3AL9ACVHB98FA"/>
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
						<img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
					</form>
				</div>
				<div className={styles.leftTextBox}>
				<h3>2018 Holiday Giving Campaign</h3>

This holiday season, a donation to Steps for Doug will go towards our annual Douglas MacInnes ALS Scholarship. We are hoping to expand our impact by increasing the amount of money given to each recipient and giving out a few smaller one time educational grants to reach more students. <br></br><br></br>Steps for Doug has been absolutely floored by the hundreds of incredible applicants whom apply to our scholarship each year. This just goes to show how many people are deeply impacted by ALS each year. Please help us support more of these deserving students who fully embody the spirit and drive that Doug maintained throughout his life. 


<br></br><br></br>This holiday season, we have the ambitious goal of raising $10,000 by Doug's Birthday on January 14th. 100% of the funds raised will go towards improving the lives of those impacted by ALS. We hope that you will help us reach our goal! 



Any donor who gives over $100 or more will receive a Steps for Doug ALS Bracelet in the mail!
				</div>
				<div className={styles.leftDonateTwo}>
					<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick"/>
						<input type="hidden" name="hosted_button_id" value="3AL9ACVHB98FA"/>
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
						<img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
					</form>
				</div>
				<div className={styles.rightPictureOne}></div>
				<div className={styles.rightPictureTwo}></div>
			</div>
		)
	}
}

export default Donate;
