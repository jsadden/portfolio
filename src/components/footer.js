import React from 'react';
import {Link} from 'react-scroll';

// Footer contains logo and links to other pages
const Footer = () => {
    return(
        <footer>
            <div className='logo'>
                <Link to='homesection' spy={true} smooth={true} duration={400} activeClass='active'>JS</Link>
            </div>
            <div className='footer_row row'>
                <div className='footer_nav twelve columns'>
                        <nav>
                            <a target='blank' href='https://www.linkedin.com/in/jim-sadden/'>LinkedIn</a>
                            <a target='blank' href="https://github.com/jsadden/portfolio">This Site's Code</a>
                            <a target='blank' href='https://github.com/jsadden'>Github</a>
                        </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
