import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet'
import logo from "../images/s4dLogo.png";
import './index.css'

// const Header = () => (
//   <div
//     style={{
//       background: 'white',
//       marginBottom: '0.7rem',
//       borderBottom: "solid black 1px"
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0.7rem 0.5rem',
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: 'green',
//             textDecoration: 'none',
//           }}
//         >
//           Steps 4 Doug
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

// to add this back in  add <Header > above the div with style below

const ListLink = props =>
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>
		<Link to={props.to}>
			{props.children}
		</Link>
	</li>

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Steps 4 Doug"
			meta={[
				{ name: 'description', content: 'Steps 4 Doug NonProfit' },
				{ name: 'keywords', content: 'S4D, NonProfit, ALS' },
				{ name: 'google-site-verification', content: 'EVKe3NnYhT3Za04yeVdEb9_o2sOVY485266BZ1gbaRQ'}
			]}
		/>
		<div
			style={{
				margin: '0 auto',
				width: '100%',
				padding: '0px',
				paddingTop: 0,
			}}
		>
			<header className="header">
				<Link to="/" className="homePageLink">
					<img src={logo} alt="S4D Logo" className="headerLogo"/>
				</Link>
				<ul className="headerButtonList">
					<ListLink to="/aboutUs/">Who We Are</ListLink>
					<ListLink to="/research/">Research</ListLink>	
					<ListLink to="/scholarships/">Scholarships</ListLink>
					<ListLink to="/active">Active</ListLink>
					<ListLink to="/contact/">Contact</ListLink>
					<ListLink to="/donate/"><span className="donateLink">Donate</span></ListLink>
				</ul>
			</header>
			<div className="mainBody">
				{children()}
			</div>
			<footer className="footer">
				<table>
					<tbody>
						<tr>
							<th> </th>
							<th onClick={ () => navigateTo('/contact/')} style={{cursor: 'pointer'}}> Connect With Us </th>
							<th> </th>
						</tr>
					</tbody>
				</table>
				<div> Steps 4 Doug is a registered 501(C)(3) Charity 	&copy; 2018 </div>
				<div style={{fontSize: '0.7rem'}}> *Website under construction* </div>
			</footer>
		</div>
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
