import React from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Services = () => {
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

                <div id="page-style-hk">
                    <article id="about">
                        <h2 className="major">Services</h2>
                        <span className="image main">
                            <br></br>
                            <div className="persons">
                                &nbsp;&nbsp;

                                <div className='person'>
                                    <img id='pic' src="assets/images/webdesign.jpeg"></img>
                                    <Accordion id="accordions">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon id="iconcuk" />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Website Design &<br></br> Development</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <ul>Services Include:
                                                    <li>Domain Registry</li>
                                                    <li>Search Engine Optimization</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>&nbsp;&nbsp;&nbsp;

                                <div className='person'>
                                    <img id='pic' src="assets/images/graphicdesign.jpg"></img>
                                    <Accordion id="accordions">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon id="iconcuk" />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Logo Design &<br></br> Visual Editing</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <ul>Services Include:
                                                    <li>Photo and Video Editing</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>&nbsp;&nbsp;&nbsp;

                                <div className='person'>
                                    <img id='pic' src="assets/images/network.png"></img>
                                    <Accordion id="accordions">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon id="iconcuk" />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Network Systems & <br></br> Installations</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <ul>Services Include:
                                                    <li>Servers</li>
                                                    <li>Routers</li>
                                                    <li>Wireless Access Points</li>
                                                    <li>Network Attached Storage</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>&nbsp;&nbsp;&nbsp;

                                <div className='person'>
                                    <img id='pic' src="assets/images/harddisk.jpg"></img>
                                    <Accordion id="accordions">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon id="iconcuk" />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Data Recovery & <br></br> Backup</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <ul>Services Include:
                                                    <li>Hard Drive Recovery</li>
                                                    <li>Disaster Recovery</li>
                                                    <li>Digital Recovery</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>&nbsp;&nbsp;&nbsp;

                                <div className='person'>
                                    <img id='pic' src="assets/images/repair.jpg"></img>
                                    <Accordion id="accordions">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon id="iconcuk" />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Diagnostics &<br></br> Comptuer Repair</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <ul>Services Include:
                                                    <li>Consultancy</li>
                                                    <li>Hardware Repair or Replacement</li>
                                                    <li>Tune Up</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>&nbsp;&nbsp;&nbsp;

                                <div className='person'>
                                    <img id='pic' src="assets/images/computer.png"></img>
                                    <Accordion id="accordions">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon id="iconcuk" />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Custom Built Computers</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <ul>Dekstops built for:
                                                    <li>Gamers</li>
                                                    <li>Designers</li>
                                                    <li>Engineers</li>
                                                    <li>Local owners</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>&nbsp;&nbsp;&nbsp;

                                <div className='person'>
                                    <img id='pic' src="assets/images/security.jpg"></img>
                                    <Accordion id="accordions">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon id="iconcuk" />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Security Risk Assessment</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <ul>Services include:
                                                    <li>Virus Removal</li>
                                                    <li>Ransomware Protection</li>
                                                    <li>Data Protection</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>&nbsp;&nbsp;&nbsp;

                                <div className='person'>
                                    <img id='pic' src="assets/images/cloud.jpg"></img>
                                    <Accordion id="accordions">
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon id="iconcuk" />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Remote Access & VPN</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                <ul>Services include:
                                                    <li>Cloud Virtualization</li>
                                                    <li>Data or email migration</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>&nbsp;&nbsp;&nbsp;
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

export default Services;
