import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
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
        </header>
        <br></br>

        <div>
          <article id="contact">
            <h2 className="major">Contact</h2>
            <span className="image main">
              <form action="https://formspree.io/f/mjvzgwye" method="POST">
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>&nbsp;&nbsp;
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                    <br></br><br></br>
                  </div>
                </div>
                <ul className="actions">
                  <li><button type="submit" className="primary">Send Message</button></li>
                  <li><input type="reset" value="Reset" /></li>
                </ul>
              </form>
              <ul className="icons">
                <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
              </ul>
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

export default Contact;
