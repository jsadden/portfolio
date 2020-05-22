import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import '../css/transStyles.css'


class Projects extends Component {

    state = {
        projects: [
            {
                name: 'Tools for a Safe Flight',
                content:'While at UTC Aerospace (now Collins Aerospace) I developed tools to automate stress analysis procedures on landing gears in Visual Basic.',
                image:'safeflight.jpg',
                article: {
                    headlines: 'When a plane has a hard landing, the job of determining if the landing gear is safe to take off again or not is brought to the in-service stress analysis department at UTC. <br/><br/> I was hired to reduce the turn-around time between the analysts learning of an incident to them providing a dispatch regarding the safety of the landing gear.',
                    codeButton: false,
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
                name: 'Modding Inventor',
                content:'Autodesk Inventor can be modified with C# plug-ins. This project was to improve the workability of pointcloud data within the Inventor modelling enviroment.',
                image:'inventor.png',
                article: {
                    headlines: 'Pointcloud data and reality capture technology has massive untapped potential. <br/><br/> The ability to see millions of point measurements which combine to form an as-built representation of reality which outmatches any engineering drawing is a wonder. <br/><br/> This technology is in its early stages, and is mainly used as a reference to take measurements from instead of being converted directly into 2D and 3D models.',
                    codeButton: false,
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
                    codeUrl: 'https://github.com/jsadden/CSS-Art',
                    items: [
                        'Freddie Mercury',
                        'Darth Vader',
                        'The Andromeda Galaxy',
                        'A Glowing Nebula'
                    ]
                }
            }
        ],
 
        openArticles: []
    }


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
                                    VIEW CODE
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
                {this.showProjects(this.state.projects)}
            </div>
        )
    }
}

export default Projects;