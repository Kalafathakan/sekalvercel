import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>

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
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
          </nav>
        </header><br></br>

        <div id="page-style-about">
          <article id="about">
            <h2 className="major">About Us</h2>
            <p>Sekal Computing is founded by two partners in 2022. One 
              of us specialized in computer hardware, networking and technical support while
               other partner specialized in full stack development and graphic design.<br></br>
               Combination of our experiences create a great team which ables us to provide multiple solutions in computer systems and information technology.
               We created this company with one purpose, which is to provide the best solution to our clients and help grow the community.</p>
            <p></p>
            
            <span className="image main">
              <br></br>
              <div className="persons">
                &nbsp;&nbsp;

                <div className='person'>
                  <img id='pic' src="assets/images/pic02.jpg"></img>
                  <h3 id='isimler'>Director</h3>
                  <p id='isimler'>Kane Kalafat</p>
                </div>&nbsp;&nbsp;&nbsp;
                <div className='person'>
                  <img id='pic' src="assets/images/pic02.jpg"></img>
                  <h3 id='isimler'>Director</h3>
                  <p id='isimler'>Dursun Sercan Tural</p>
                </div>&nbsp;&nbsp;
              </div>
            </span>


          </article>
        </div>
        <footer id="footer">
          <hr></hr>
          <p className="copyright">&copy;SEKAL COMPUTING INC.</p>
        </footer>
      </div>
    </div>
  );
};

export default About;
