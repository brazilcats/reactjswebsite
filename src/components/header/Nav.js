import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ButtonMob from './ButtonMob';

export default class Nav extends React.Component {

    /* Fará a função de toggle */
    clickMe(scopo)
    {
        console.log(scopo);
        //var este = scopo;
        //este.classList.add("active");
    }

    render(){
        return(
            <div>
                
                 {/* Navigation */}
                <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top mainNav" id="mainNav">
                    <div className="container">
                    <AnchorLink className="navbar-brand js-scroll-trigger" href="#page-top">tutti bom</AnchorLink>
                    <ButtonMob/>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <AnchorLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={this.clickMe.bind(this)} offset="70" href="#portfolio">Cardápio</AnchorLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <AnchorLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" offset="70" href="#about">Quem Somos</AnchorLink>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <AnchorLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" offset="70" href="#contact">Contato</AnchorLink>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>

            </div>
            );
    }
}