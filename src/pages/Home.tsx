import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

const Home = (props: Props) => {

	return (
		<div id="wrapper">
			<header id="header">
				<div className="logo">
					<img src='assets/images/logo.png' className="logo2"></img>
				</div>
				<div className="content">
					<div className="inner">
						<h1>Sekal Computing</h1>
						<p>We provide a wide variety of Hardware & Software <a href="#work">Services</a> to Small to Medium Scale Businesses. </p>
					</div>
				</div>
				<nav>
					<ul>
						<li><NavLink to={'/'}>Home</NavLink></li>
						<li><NavLink to={'/services'}>Services</NavLink></li>
						<li><NavLink to={'/about'}>About</NavLink></li>
						<li><NavLink to={'/contact'}>Contact</NavLink></li>
					</ul>
				</nav>
			</header>
			<footer id="footer">
				<hr></hr>
				<p className="copyright">&copy;SEKAL COMPUTING INC.</p>
			</footer>
		</div>
	);
};

export default Home;
