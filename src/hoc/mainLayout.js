import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer'

//wraps main app content with header and footer
const MainLayout = (props) => {
    return(
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}

export default MainLayout;