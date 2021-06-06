import React from 'react';

export default class Logo extends React.Component {

    render(){
        return(
        <div id="page-top">

                 {/* Masthead */}
                 <header className="masthead bg-primary text-white text-center">
                    <div className="container d-flex align-items-center flex-column">

                    {/* Masthead Avatar Image */}
                    <img className="masthead-avatar mb-5 logo" src={process.env.PUBLIC_URL+"/img/logomarca.png"} alt=""/>

                     {/* Masthead Subheading */}
                     <p className="masthead-subheading font-weight-light mb-0">Salgados Fritos ou Congelados</p>

                    </div>
                </header>

        </div>        );
    }
}