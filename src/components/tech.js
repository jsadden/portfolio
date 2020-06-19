import React, {Component} from 'react';

class Tech extends Component {

    state = {
        showComment: false
    }

    techStack = [
<<<<<<< HEAD
        {key: "'Python'",            value: '// def myFunc():'},
        {key: "'Selenium'",          value: '// webdriver.Chrome(PATH)'},
        {key: "'Beautiful Soup'",    value: '// link = soup.find("a")[href]'},
        {key: "'Unit Testing'",      value: '// assert search.test()'},
=======
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        {key: "'HTML'",         value: '// <h3>Hi there</h3>'},
        {key: "'CSS'",          value: '// .row { color: #ffffff }'},
        {key: "'JavaScript'",   value: '// const x = () => {}'},
        {key: "'React JS'",     value: '// this.setState{{}}'},
        {key: "'Redux'",        value: '// import { createStore }'},
        {key: "'Formik + Yup'", value: '// validationSchema={ myYup }'},
        {key: "'UI/UX'",        value: '// cursor: pointer'},
        {key: "'Node'",         value: '// app.listen( 8001 )'},
        {key: "'Postman'",      value: '// POST /api/users:id'},
        {key: "'MongoDB + Robo3T'",      value: '// db.getCollection( "x" )'},
        {key: "'Mongoose'",     value: '// mongoose.connect( DB, config )'},
        {key: "'Axios'",        value: '// axios.get( "/api/user", cb )'},
        {key: "'Git + Github'", value: '// git init'},
        {key: "'npm'",          value: '// npm install --save react-slick'},
        {key: "'Heroku'",       value: '// git push heroku master'},
        {key: "'EmailJS'",      value: '// emailjs.send( )'},
        {key: "'Visual Studio'",value: '// Where this section style came from'},
        {key: "'C#'",           value: '// string[] names = new string[num]'},
        {key: "'Visual Basic'", value: '// Next i'},
        {key: "'C++'",          value: '// std::cout << "C++"'},
        {key: "'MATLAB + Simulink'",        value: '// Array starts at 1'},
        {key: "'DaVinci Resolve'",          value: '// Video editing'},
        {key: "'AutoCAD'",                  value: '// 2D Layouts'},
        {key: "'Autodesk Inventor'",        value: '// 3D modelling'},
        {key: "'Autodesk Recap'",           value: '// Pointclouds'},
        {key: "'Facility design'",          value: '// Industrial plant layout'},
        {key: "'Process design'",           value: '// Optimize'},
        {key: "'Aerospace design'",         value: '// B.Eng'},
    ]

    //template for returning a row containing a skill and its comment
    createTech(num) {
        return (
            <div style={{paddingLeft:'45px'}}>  
                <span className='tech_string'>{this.techStack[num].key}</span>,
                <span style={{float:'right'}}>
                <span style={{paddingRight: '50px'}} className='tech_comment tech_image'>{this.techStack[num].value}</span>
                </span>
            </div>
        )
    }

    //each row of the skills section is contained here
    rows = [
        <div>   
            <span className='tech_keyword'>class </span> 
            <span className='tech_heading'>Skills </span>
            {"\u007B"}
        </div>,

        <div style={{paddingLeft:'15px'}}>  
            <span className='tech_comment'>// I love to learn new things to expand my skillset</span>
        </div>,

        <div style={{paddingLeft:'15px'}}>  
            <span className='tech_keyword'>constructor </span> ( ) {"\u007B"}
        </div>,

        <div style={{paddingLeft:'30px'}}>  
            <span className='tech_this'>this</span>.
            <span className='tech_heading'>integrity </span> = 
            <span className='tech_this'> true</span>
        </div>,

        <div style={{paddingLeft:'30px'}}>  
            <span className='tech_this'>this</span>.
            <span className='tech_heading'>hardWork </span> = 
            <span className='tech_this'> true</span>
        </div>,

        <div style={{paddingLeft:'30px'}}>  
            <span className='tech_this'>this</span>.
            <span className='tech_heading'>commonSense </span> = 
            <span className='tech_this'> true</span>
        </div>,

        <div style={{paddingLeft:'30px'}}>  
            <span className='tech_this'>this</span>.
            <span className='tech_heading'>adaptability </span> = 
            <span className='tech_number'> 10</span>
        </div>,

        <div style={{paddingLeft:'15px'}}>   
            {"\u007D"}
        </div>,

        <div style={{paddingLeft:'15px'}}>  
<<<<<<< HEAD
        <span className='tech_heading'>pythonic </span> ( ) {"\u007B"}
=======
            <span className='tech_heading'>frontEnd </span> ( ) {"\u007B"}
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        </div>,

        <div style={{paddingLeft:'30px'}}>  
        <span className='tech_keyword'>return </span> [
        </div>,

        this.createTech(0),
        this.createTech(1),
        this.createTech(2),
        this.createTech(3),
<<<<<<< HEAD
=======
        this.createTech(4),
        this.createTech(5),
        this.createTech(6),
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444

        <div style={{paddingLeft:'30px'}}>]</div>,

        <div style={{paddingLeft:'15px'}}>   
            {"\u007D"}
        </div>,

        <div style={{paddingLeft:'15px'}}>  
<<<<<<< HEAD
            <span className='tech_heading'>frontEnd </span> ( ) {"\u007B"}
=======
        <span className='tech_heading'>backEnd </span> ( ) {"\u007B"}
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        </div>,

        <div style={{paddingLeft:'30px'}}>  
        <span className='tech_keyword'>return </span> [
        </div>,

<<<<<<< HEAD
        this.createTech(4),
        this.createTech(5),
        this.createTech(6),
=======
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        this.createTech(7),
        this.createTech(8),
        this.createTech(9),
        this.createTech(10),
<<<<<<< HEAD
=======
        this.createTech(11),
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444

        <div style={{paddingLeft:'30px'}}>]</div>,

        <div style={{paddingLeft:'15px'}}>   
<<<<<<< HEAD
            {"\u007D"}
        </div>,

        <div style={{paddingLeft:'15px'}}>  
        <span className='tech_heading'>backEnd </span> ( ) {"\u007B"}
=======
        {"\u007D"}
        </div>,

        <div style={{paddingLeft:'15px'}}>  
        <span className='tech_heading'>platforms </span> ( ) {"\u007B"}
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        </div>,

        <div style={{paddingLeft:'30px'}}>  
        <span className='tech_keyword'>return </span> [
        </div>,

<<<<<<< HEAD
        this.createTech(11),
=======
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        this.createTech(12),
        this.createTech(13),
        this.createTech(14),
        this.createTech(15),
<<<<<<< HEAD
=======
        this.createTech(16),
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444

        <div style={{paddingLeft:'30px'}}>]</div>,

        <div style={{paddingLeft:'15px'}}>   
        {"\u007D"}
        </div>,
<<<<<<< HEAD

        <div style={{paddingLeft:'15px'}}>  
        <span className='tech_heading'>platforms </span> ( ) {"\u007B"}
=======
        
        <div style={{paddingLeft:'15px'}}>  
        <span className='tech_heading'>otherLanguages </span> ( ) {"\u007B"}
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        </div>,

        <div style={{paddingLeft:'30px'}}>  
        <span className='tech_keyword'>return </span> [
        </div>,

<<<<<<< HEAD
        this.createTech(16),
=======
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        this.createTech(17),
        this.createTech(18),
        this.createTech(19),
        this.createTech(20),

        <div style={{paddingLeft:'30px'}}>]</div>,

        <div style={{paddingLeft:'15px'}}>   
        {"\u007D"}
        </div>,
<<<<<<< HEAD
        
        <div style={{paddingLeft:'15px'}}>  
        <span className='tech_heading'>otherLanguages </span> ( ) {"\u007B"}
=======

        <div style={{paddingLeft:'15px'}}>  
        <span className='tech_heading'>miscAndEng </span> ( ) {"\u007B"}
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444
        </div>,

        <div style={{paddingLeft:'30px'}}>  
        <span className='tech_keyword'>return </span> [
        </div>,

        this.createTech(21),
        this.createTech(22),
        this.createTech(23),
        this.createTech(24),
<<<<<<< HEAD

        <div style={{paddingLeft:'30px'}}>]</div>,

        <div style={{paddingLeft:'15px'}}>   
        {"\u007D"}
        </div>,

        <div style={{paddingLeft:'15px'}}>  
        <span className='tech_heading'>miscAndEng </span> ( ) {"\u007B"}
        </div>,

        <div style={{paddingLeft:'30px'}}>  
        <span className='tech_keyword'>return </span> [
        </div>,

        this.createTech(25),
        this.createTech(26),
        this.createTech(27),
        this.createTech(28),
        this.createTech(29),
        this.createTech(30),
        this.createTech(31),
=======
        this.createTech(25),
        this.createTech(26),
        this.createTech(27),
>>>>>>> b74ab0d69e4e2fcb80a29d35ec54c8263555a444

        <div style={{paddingLeft:'30px'}}>]</div>,

        <div style={{paddingLeft:'15px'}}>   
        {"\u007D"}
        </div>,

        <div>   
            {"\u007D"}
        </div>
    ]

    //creates the skills section my mapping the rows array and counting the lines
    createRows() {
        return this.rows.map((row,i) => (
            <div key={i} className='techrow row'>
                <div className='two columns tech_line_num'>{i + 1}</div>
                <div className='eight columns tech_line'>{row}</div>
            </div>
        ))
    }

    render()
    {
        return(
        <div className='tech'>
            {this.createRows()}
        </div>
        )
    }
}

export default Tech;