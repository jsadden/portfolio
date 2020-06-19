import React from 'react';
import {Link} from 'react-scroll';


//Sticky header contains scrolling links and the logo
const Header = () => {
    return (
        <header>
            <div className='header_row row'>
                <div className='logo two columns'>
                    <Link to='homesection' spy={true} smooth={true} duration={400} activeClass='active'>JS</Link>
                </div>
                <div className='header_nav ten columns'>
                    <nav>
                        <Link to='homesection' spy={true} smooth={true} duration={400} activeClass='active'>Home</Link>
                        <Link to='techsection' spy={true} smooth={true} duration={400} offset={0} activeClass='active'>Skills</Link>
                        <Link to='projectsection' spy={true} smooth={true} duration={400} offset={5} activeClass='active'>Projects</Link>
                        <Link to='contactsection' spy={true} smooth={true} duration={400} offset={5} activeClass='active'>Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;