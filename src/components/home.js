import React, {Component} from 'react';
import {Link} from 'react-scroll';

class Home extends Component {
    state ={
        overlayStyle: {
            transform: `scale(1.1)`
        }
    }

    //Scales image depending on cursor y position
    scaleImage(e) {

        let y = e.clientY;

        let scale = y/5000 + 1.05;

        this.setState({overlayStyle: {
            transform: `scale(${scale})`
        }})
    }

    render(){
        return(
            <div className ='home'
                onMouseMove={(e) => (this.scaleImage(e))}
            >
                <div className='home_overlay'
                style={this.state.overlayStyle}
                > </div>
                <div>
                        <div className='home_name'>
                            <span className='home_name_span'>J</span>
                            <span className='home_name_span'>i</span>
                            <span className='home_name_span'>m </span>  
                            <span className='home_name_span'>S</span>
                            <span className='home_name_span'>a</span>
                            <span className='home_name_span'>d</span>
                            <span className='home_name_span'>d</span>
                            <span className='home_name_span'>e</span>
                            <span className='home_name_span'>n</span>
                        </div>
                        
                        <div className='home_content'>
                            I believe that things should be <span className='home_indie'>beautiful</span> and they should <span className='home_science'>work.</span><br/>
                            That <span className='home_indie'>art</span> and <span className='home_science'>science</span> should not be separate.<br/>
                            That's why I'm a <span className='home_indie'>designer</span> and an <span className='home_science'>engineer.</span>
                        </div> 
                        <div className='contactbutton'>
                            <Link to='contactsection' spy={true} smooth={true} duration={400} offset={0}>
                                <button>
                                    Get in Touch
                                </button>
                            </Link>
                        </div>
                        
                    </div>
            </div>
        )
    }
}

export default Home;