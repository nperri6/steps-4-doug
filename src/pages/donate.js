import React from 'react';
import styles from "../styles/donate.module.css";

class Donate extends React.Component {
	render() {
		return (
			<div className={styles.main}>
				<div className={styles.body}>
					<div className={styles.leftHalf}>
						<h2> Donate </h2>
						<div className={styles.subHeader}> Help us achieve our goal of providing scholarships to those impacted by ALS, and helping fund ALS research! </div><br/>
						<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
							<input type="hidden" name="cmd" value="_s-xclick"/>
							<input type="hidden" name="hosted_button_id" value="3AL9ACVHB98FA"/>
							<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
							<img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
						</form>
						<div className={styles.disclaimer}>
							<div>*Steps 4 Doug is a registered 501(C)(3) non profit.</div>
							<div> All donations are secured through PayPal.</div>
						</div>
					</div>
					<div className={styles.rightHalf}>
						<div className={styles.rightImage}></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Donate;
