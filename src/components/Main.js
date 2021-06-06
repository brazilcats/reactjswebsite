import React from 'react';
import Contact from "./main/Contact";
import Portfolio from "./main/Portfolio";
import About from "./main/About";
import Maps from "./main/Maps";
import ScrollToTop from "./Gotop";

export default class Main extends React.Component {

    render(){
        return(
            <div className="main" id="home">
                <Portfolio/>
                <About/>
                <Contact/>
                <Maps/>
                <ScrollToTop/>
            </div>
        );
    }
}