import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import '../css/transStyles.css'


class Projects extends Component {

    state = {
        openArticles: []
    }
    
    projects= [
        {
            name: 'Rotten Tomatoes Scraper',
            content:'I created a web scraper to get user and critic ratings from Rotten Tomatoes',
            image:'rottenGraph.png',
            article: {
                headlines: "I was interested in the gap between the user scores and critic scores depending on the genre of the film. <br/><br/> I used Python's Beautiful Soup and Selenium modules to build a web scraper to get the data I needed. <br/><br/> I then used matplotlib to organize and plot the gap by genre. (art & foreign had the largest gap)",
                codeButton: true,
                codeButtonMessage: 'VIEW CODE',
                codeUrl: 'https://github.com/jsadden/RottenScraper',
                items: [
                    'Python',
                    'Beautiful Soup',
                    'Selenium',
                    'matplotlib'
                ]
            }
        },
        {
            name: 'DC Consulting Designer',
            content:'I was a Process and Design Engineer when I was at DC Consulting with a wide range of responsibilities.',
            image:'dcc.png',
            article: {
                headlines: "I began the job at this start-up as a designer making 2D and 3D models. <br/><br/>I was later stationed at one of our client's offices to be a process and design engineer on several of their large-scale projects. <br/><br/> I also had other responsibilities such as travelling to site for 3D scanning, website creation and maintenance, and production of promotional videos.",
                codeButton: true,
                codeButtonMessage: 'VIEW SITE',
                codeUrl: 'https://dcconsult.ca/',
                items: [
                    'Created 2D drawings in AutoCAD',
                    'Created 3D models in Autodesk Inventor',
                    'Utilized 3D scan data in Autodesk Recap',
                    'Travelled to client sites for 3D scans',
                    'Client-facing position',
                    'Created client process flows and RFP packages',
                    'Interacted with vendors on behalf of the client',
                    'Designed industrial facility layouts',
                    "Created and maintained DCC's website",
                    'Video production in DaVinci Resolve'
                ]
            }
        },
        {
            name: 'Video Production',
            content:'While at DC Consulting I produced and edited the promotional material.',
            image:'dccvideo.png',
            article: {
                headlines: "In addition to my process and design engineering work, I would also produce DC Consulting's promotional videos. <br/><br/> These videos would effectively show the capabilities and scope of DCC's services and expertise.",
                codeButton: true,
                codeButtonMessage: 'VIEW VIDEO',
                codeUrl: 'https://www.youtube.com/watch?v=6CKduT0rDgg',
                items: [
                    'Created in DaVinci Resolve',
                    'Shot footage',
                    'Editor',
                    'Copywriter',
                    'Producer',
                    'Showcased several DCC technologies'
                ]
            }
        },
        
        {
            name: 'Tools for a Safe Flight',
            content:'While at UTC Aerospace (now Collins Aerospace) I developed tools to automate stress analysis procedures on landing gears in Visual Basic.',
            image:'safeflight.jpg',
            article: {
                headlines: 'When a plane has a hard landing, the job of determining if the landing gear is safe to take off again or not is brought to the in-service stress analysis department at UTC. <br/><br/> I was hired to reduce the turn-around time between the analysts learning of an incident to them providing a dispatch regarding the safety of the landing gear.',
                codeButton: false,
                codeButtonMessage: '',
                codeUrl: null,
                items: [
                    'Reduced turn-around times by 50-75%',
                    'Designed tools to automate manual tasks',
                    'Used Visual Basic in Visual Studio',
                    'Designed intuitive GUIs',
                    'Worked closely with analysts to iterate design',
                    'Rewrote the core legacy stress analysis engine in VB',
                    'Updated technical documentation and procedures'
                ]
            }
        },
        {
            name: 'Star Wars Meets Flappy Bird',
            content:'A game where you pilot the Millenium Falcon through waves of Tie Fighters.',
            image:'trenchrun.png',
            article: {
                headlines: 'This game takes inspiration from the trench run scene in Star Wars as well as the gameplay style of Flappy Bird.<br/><br/> Coded in JavaScript and utilizes the canvas. <br/><br/> How far can you go?',
                codeButton: true,
                codeButtonMessage: 'VIEW CODE',
                codeUrl: 'https://codesandbox.io/s/p92ow083mx',
                items: [
                    'Built with Vanilla JS',
                    'Uses 2D canvas',
                    'Addictive playing style',
                    'Includes powerups such as gravity reversal'
                ]
            }
        },
        {
            name: 'Modding Inventor',
            content:'Autodesk Inventor can be modified with C# plug-ins. This project was to improve the workability of pointcloud data within the Inventor modelling enviroment.',
            image:'inventor.png',
            article: {
                headlines: 'Pointcloud data and reality capture technology has massive untapped potential. <br/><br/> The ability to see millions of point measurements which combine to form an as-built representation of reality which outmatches any engineering drawing is a wonder. <br/><br/> This technology is in its early stages, and is mainly used as a reference to take measurements from instead of being converted directly into 2D and 3D models.',
                codeButton: false,
                codeButtonMessage: '',
                codeUrl: null,
                items: [
                    'Improved workability of pointcloud data',
                    'Plug-in for Autodesk Inventor coded in C#',
                    'Seamlessly integrated with Inventor GUI',
                    'Automated some manual tasks of building a 3D model'
                ]
            }
        },
        
        {
            name: 'Art and Code',
            content:'Artworks made entirely of HTML and CSS. These are to stretch the limit of what can be done with these technologies in a creative way.',
            image:'artandcode.png',
            article: {
                headlines: "I love to make things that look nice. And I love to code. <br/><br/> So when I saw that someone else had made a beautiful portrait out of exclusively HTML and CSS, I thought I'd try it myself. <br/><br/>The gallery includes:",
                codeButton: true,
                codeButtonMessage: 'VIEW CODE',
                codeUrl: 'https://github.com/jsadden/CSS-Art',
                items: [
                    'Freddie Mercury',
                    'Darth Vader',
                    'The Andromeda Galaxy',
                    'A Glowing Nebula'
                ]
            }
        }
    ]


    //adds or removes articles from view using openarticles array
    showArticle = (e, name) => {
        
        if (this.state.openArticles.includes(name)) {
            let arr = this.state.openArticles;
            let i = this.state.openArticles.indexOf(name)

            arr.splice(i,1);
            this.setState({openArticles: arr})

        } else {
            this.setState({
                openArticles: [...this.state.openArticles, name]
            })
        }
    }

    //Gets expanded article content when article links/image are clicked
    getArticle = (e, item) => {
        return (
            
                    <div className='article'>
                        <div className='article-headline' dangerouslySetInnerHTML={{__html: item.article.headlines}}>
                            
                        </div>
                        <div className='article-points'>
                            {this.getArticleRow(item.article.items)}
                        </div>
                        {item.article.codeButton?
                            <a href={item.article.codeUrl} target='blank'>
                                <button type='button'>
                                    {item.article.codeButtonMessage}
                                </button>
                            </a>
                        :null}
                    </div>
        )
    }

    //gets expanded article bullet points and returns them in two columns
    getArticleRow (points) {
        let row = null;
        let rows = [];
        for (let i = 0; i < points.length; i=i+2) {
            row = <div key={i} className='article-item-row row'>
                <div className='article-item six columns'>
                    {"\u2022"   } {points[i]}
                </div>
                
                <div className='article-item six columns'>
                    
                    {points[i+1] ?
                        "\u2022" + "    " 
                    :
                    null} 
                    
                    {points[i+1]}
                </div>
            </div>
            rows.push(row);
        }
        return rows
    }

    //template for showing condensed article content and image
    showProjects(arr) {
        return (
            arr.map((item, i)=> (
                <div key={i} className='project_contain'>
                    <div className='row'>
                        <div className='six columns project_image'
                            style={{
                                background: `url(images/${item.image})`
                            }}
                            onClick={(e) => this.showArticle(e, item.name)}
                        >
                        </div>
                        
                        <div className='six columns project_content'>
                                <h4 onClick={(e) => this.showArticle(e, item.name)}>
                                    {item.name}
                                </h4>
                            {item.content}
                        </div>
                        <hr/>
                    </div>
                    <CSSTransition
                            in={this.state.openArticles.includes( item.name)? true:false}
                            timeout={400}
                            classNames='article-transition'
                            mountOnEnter
                            unmountOnExit
                        >
                                    {(e) => this.getArticle(e, item)}
                    </CSSTransition>
                    
                </div>
            ))
        )
    }

    render(){
        return(
            <div className='projects'>
                <div className='project_contain'>
                    <div className='row project_title'>
                        <h3 className='twelve columns'>Projects</h3>
                    </div>
                    <div className='row project_sitecode'>
                        <div  className='twelve columns'>
                            <a href='https://github.com/jsadden/portfolio' target='blank'>
                                <button type='button'>
                                    VIEW SITE'S CODE
                                </button >
                            </a>
                        </div>
                    </div>
                </div>
                {this.showProjects(this.projects)}
            </div>
        )
    }
}

export default Projects;