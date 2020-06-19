import React from 'react';
import Home from './components/home';
import Tech from './components/tech';
import Projects from './components/projects';
import Contact from './components/contact';
import MainLayout from './hoc/mainLayout';

//contains the main content wrapped in header and footer and sections to provide scroll points
const App = () => {
    return (
        <MainLayout>
            <section id='homesection'>
                <Home />
            </section>
            
            <section id='techsection'>
                <Tech/>
            </section>
            
            <section id='projectsection'>
                <Projects/>
            </section>
            
            <section id='contactsection'>
                <Contact/>
            </section>
        </MainLayout>
    )
}

export default App;