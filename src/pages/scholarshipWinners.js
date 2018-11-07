import React from "react";
import styles from "../styles/scholarshipWinners.module.css";

class ScholarshipWinners extends React.Component {
	render() {
		return (
			<div>
				<div className={styles.body}>
					<h2 className={styles.title}> Meet the 2018 S4D Scholarship Winners</h2>
					<div className={styles.winnersContainer}>
						<div className={styles.scholarshipWinner}>
							<div className={[styles.winnerPicture, styles.rosemaryPicture].join(' ')}> </div>
							<h3 className={styles.winnerName}>Rosemary Dayton</h3>
							<div>Rosemary Dayton currently attends the University of Nebraska, Lincoln
	where she is studying interior design with an emphasis in geriatric and health care design. Throughout high school, Rosemary was a member of several different groups including; the National Council of Youth Leadership, the National Honor Society, the German
	American Partnership Program, show choir, choir, and she was on both the tennis and diving teams. At the University of Nebraska, Lincoln, Rosemary is an orientation leader for New Student Enrollment and is involved in Alpha Rho Chi, the architecture professional
	fraternity, where she was the pledge educator, and interim Worthy Scribe. Throughout her time in high school and now, Rosemary has been a captain of two different teams fundraising for ALS and has volunteered at Special Olympics, Miracle League and The Big
	Event at the University of Nebraska, Lincoln where she led a team from her fraternity. </div>
							<div><br></br>
							Rosemary has had three family members diagnosed with ALS; her grandmother,
	great aunt and her father. Through her experiences caring for her father, she saw how difficult it could be for disabled people to maneuver through an able-bodied world.  Her goal is to become a certified interior designer and use her geriatric knowledge to
	help design a variety of senior living facilities. Rosemary wants to design spaces that are beautiful yet still accommodate accessibility and universal design. She feels strongly that everyone should feel comfortable, safe and free to use any space as it’s
	intended. We love Rosemary’s passion for improving the quality of life for disabled persons, and are honored to have her represent the Douglas MacInnes ALS Scholarship!
							</div>
						</div>
						<div className={styles.scholarshipWinner}>
							<div className={[styles.winnerPicture, styles.isaiahPicture].join(' ')}> </div>	
							<h3 className={styles.winnerName}>Isaiah Douglas</h3>
							<div>Isaiah Douglas is studying Composite Materials Engineering at Winona State University. In High School Isaiah was a senior captain of the wrestling team, and participated in cross country, baseball, boy scouts, robotics, golf, trap shooting, skiing, Fellowship of
	Christian Athletes, and Approved Workmen Are Not Ashamed (AWANA). He is an active member of his church, and has been on four mission trips where he worshiped, encouraged and played with the children in the towns. Isaiah also volunteered at the Rescue Mission
	of Salt Lake, the Utah Food Bank and Inheritance of Hope, a non-profit that works to help young families who are facing the upcoming loss of a parent with a terminal illness. </div>
							<div><br></br>
							Isaiah has been an advocate for ALS since his father was diagnosed in 2015. He has been apart of several ALS walks and runs to raise money and awareness for the disease. He even rode a snowmobile in Blackwood’s Blizzard Tour, where they raised over one million dollars
	for the ALS Association. Isaiah recently traveled to Washington DC to lobby in congress to further the cure for ALS. He said that he loves fighting for his dad because of his inability to fight for himself. Being the oldest child, Isaiah has had to take on
	many more responsibilities to help his family. He said that seeing his dad struggle is disheartening but his dad’s hope and outlook on life encourage Isaiah and everyone around him.  Isaiah is passionate about finding a cure for ALS, and will continue to advocate
	for the disease and its victims. We are so impressed by Isaiah’s service to others, and his passion for advocating for ALS and its victims. We are thrilled to make him a Steps For Doug Scholarship Recipient!
							</div>
						</div>
						<div className={styles.scholarshipWinner}>
							<div className={[styles.winnerPicture, styles.laurenPicture].join(' ')}> </div>
							<h3 className={styles.winnerName}>Lauren Maurer</h3>
							<div>Lauren Maurer attends the University of Pittsburgh.  She is a pre-Pharmacy major and has a guaranteed conditional spot in Pitt’s Pharmacy School.  Following in her father's footsteps, Lauren plays lacrosse and was considered a senior leader on her team. Throughout
	high school, Lauren was a member of the Spanish National Honor Society, an officer in The National Honor Society, and a Peer Tutor Coordinator. She also played viola in the Orchestra and in the auditioned Select Ensemble. In her spare time, Lauren volunteered
	as a teacher’s aid at her synagogue where she helped teach Hebrew to children in the classroom. She also spent time volunteering at the the Jewish Relief Agency packing boxes of food for those in need. Lauren's latest project was working with the Greater Philadelphia
	Chapter of the ALS Association to create a charity high school lacrosse game to honor her father and raise money and awareness for ALS. </div>
							<div><br></br>
							Lauren
	plans to dedicate her time towards finding medications to cure diseases. Her goal is to be working on a clinical trial for ALS, and she hopes to help put an end to the disease. Lauren was only 13 when her dad was diagnosed with ALS. Through her journey with
	her fathers disease she learned to recognize the simplicity of everyday life.  Lauren said that while she is still recovering from the heartbreaking experience of losing her father, it has formed her into the strong, knowledgeable and resilient person that
	she is today. It is this outlook and Lauren’s commitment to contribute to the ALS community, that make us so proud to have her as a Steps For Doug Scholarship Recipient!
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ScholarshipWinners;