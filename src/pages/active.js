import React from "react";
import styles from "../styles/active.module.css";
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
import Active1 from "../images/active1.jpg";
import Active2 from "../images/active2.jpg";
import Active3 from "../images/active3.jpg";
console.log(styles);

class Active extends React.Component {
	render() {
		return (
            <div className={styles.main}>
                <div className={styles.leftTitle}><h1>Active</h1></div>
                <div className={[styles.leftPic, styles.activePic].join(' ')}><img src={Active1} /></div>
                <div className={[styles.centerPicture, styles.activePic].join(' ')}><img src={Active2} /></div>
                <div className={[styles.rightPicture, styles.activePic].join(' ')}><img src={Active3} /> </div>
                <div className={styles.bottomText}>
                    Every year Steps for Doug has a team of triathletes compete in the beautiful St. Anthony's Triathlon course in St. Petersburg, Florida. This is a race that Doug himself participated in annually for over 20 years. To honor Doug's passion for staying active, the Steps for Doug St. Anthony's Team carries on this tradition! We are so grateful to have this group representing Doug! 
                    Congratulations to all of the athletes who have competed the triathlon throughout the years!
                </div>
            </div>
		)
	}
}
export default Active;