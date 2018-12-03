import React from "react";
import styles from "../styles/aboutUs.module.css";
import Link from 'gatsby-link';
import { navigateTo } from 'gatsby-link';
console.log(styles);

class AboutUs extends React.Component {
	render() {
		return (
            <div className={styles.aboutUsContainer}>
                <h2 className={styles.title}>"You can't fail if you don't give up" </h2>
                <div className={styles.twoPartContainer}>
                    <div className={styles.leftHalf}>
                    Doug MacInnes was diagnosed with ALS in the Fall of 2011. This news was devastating to him and his family. Doug was an extremely active person throughout his life. He swam on his college's swim team and competed in dozens of triathlons. At a time before the ALS Ice Bucket Challenge, Doug's family and friends had never heard of ALS. The prognosis was essentially a death sentence; no effective treatment and no cure. With the love and support of friends and family, Doug lived for 19 months with ALS before passing away. After Doug passed, those close to him continued his legacy with Steps for Doug. The Foundation aims to provide support to families who are living through an ALS diagnosis. 
                    </div>
                    <div className={styles.rightHalf}></div>
                </div>
                <div className={styles.main}>
                    <div className={styles.researchContainer}>
                        <h3 className={styles.sectionHeader}>Research</h3> 
                        <div>Throughout its history, Steps for Doug has donated over $100,000 to Dr. Raymond Roos at his University of Chicago ALS Research Lab. Dr. Roos is dedicated to furthering ALS research through innovative research. After a lengthy search, Doug decided to have Dr. Roos as his physician to guide him through his journey with ALS. Dr. Roos is a kind-hearted, supportive and dedicated provider who quickly earned Doug and his family's trust. Now Steps for Doug partners with him to further develop ALS treatment options for those currently living with ALS. He is dedicated to creating better outcomes for ALS patients through research.  </div> 
                    </div>
                    <div className={styles.scholarshipContainer}>
                        <h3 className={styles.sectionHeader}> Scholarships</h3>
                        <div> The Douglas MacInnes Scholarship is awarded to student/s (high school or college) whose family member has or had ALS. Awarding of the scholarship is based on academic merit with a minimum GPA of 3.25, a one-page essay decribing their desire to pursue their education, and a phone call or in person interview with a board member of Steps for Doug.  We look for individuals who we believe embody the spirit and drive that Douglas maintained throughout his life. </div>
                    </div>
                    <div className={styles.activeContainer}>
                        <h3 className={styles.sectionHeader}>Active</h3> 
                        <div> From the start the Steps for Doug family has competed in dozens of triathlons, marathons, and bike races to raise awareness for ALS. One tradition has stood the test of time. Every year Steps for Doug has a team of triathletes compete in the beautiful St. Anthony's Triathlon course in St. Petersburg, Florida. This is a race that Doug himself participated in annually for over 20 years. To honor Doug's passion for staying active, the Steps for Doug St. Anthony's Team carries on this tradition! We are so grateful to have this group representing Doug!  </div>
                    </div>
                    <div className={styles.researchPicContainer}></div>
                    <div className={styles.scholarshipPicContainer}></div>
                    <div className={styles.activePicContainer}></div>
                </div>
            </div>
		)
	}
}
export default AboutUs;