import React from 'react';
import styles from "../styles/research.module.css";

class Research extends React.Component {
	render() {
		return (
			<div className={styles.main}>
				<div className={styles.leftTitle}>
                    <h1>Research</h1> 
                </div>
                <div className={styles.rightTitle}></div>
                <div className={styles.leftTextBox}> 
                    Before the ALS Ice Bucket Challenge, very little was publicly known about ALS. Year after year, this debilitating disease continues to affect more and more families. ALS can be an extremely ruthless disease to battle for patients and their families. With minimal treatment options and no cure, it is imperative to invest in research and development to better understand this disease. Dr. Raymond Roos of the University of Chicago has dedicated his career to ALS and other neurodegenerative disease research. He is also a physician with a comforting bedside manner that made Doug feel heard and respected as a patient. Steps for Doug believes in the work and dedication of Dr. Roos. As a result, throughout it's history Steps for Doug has donated over $100,000 to Dr. Roos at his University of Chicago ALS Research Lab. Steps for Doug continues to partner with him to further develop ALS treatment options for those currently living with ALS. He has committed his life to creating better outcomes for ALS patients through research. 
                </div>
                <div className={styles.researchTitle}>
                    You can find Dr. Roosi's most recent research here:
                </div>
                <div className={styles.researchBody}>
                    <div className={styles.researchPaper}>
                        <a href="https://www.ncbi.nlm.nih.gov/pubmed/30176351" target="_blank"> Single chain variable fragment antibodies directed against SOD1 ameliorate disease in mutant SOD1 transgenic mice. </a>
                    </div>
                    <div className={styles.researchPaper}>
                        <a href="https://www.ncbi.nlm.nih.gov/pubmed/29792928" target="_blank"> Translation of dipeptide repeat proteins from the C9ORF72 expanded repeat is associated with cellular stress.</a>
                    </div>
                    <div className={styles.researchPaper}>
                        <a href="https://www.ncbi.nlm.nih.gov/pubmed/29627580" target="_blank"> Poloxamer 188 decreases membrane toxicity of mutant SOD1 and ameliorates pathology observed in SOD1 mouse model for ALS.</a>
                    </div>
                </div>
                <div className={styles.leftPicture}></div>
                <div className={styles.centerPicture}></div>
                <div className={styles.rightPicture}></div>
			</div>
		)
	}
}

export default Research;
