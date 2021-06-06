import React from 'react';
import PortfolioItem from './PortfolioItem';

export default class Portfolio extends React.Component {


    render(){

        return(
            <div>

                 {/* Portfolio Section */}
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">

                        {/* Portfolio Section Heading */}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Cardápio</h2>

                        {/* Icon Divider */}
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon">
                            <i className="fa fa-star"></i>
                            </div>
                            <div className="divider-custom-line"></div>
                        </div>

                        {/* Portfolio Grid Items */}
                            <div className="row">
                            <PortfolioItem image="coxinhafrango.jpg" alt="Coxinha de Frango" title="Coxinha de Frango" text="Coxinha de Frango"/>
                            <PortfolioItem image="coxinhamandioca.jpg" alt="Coxinha de Mandioca" title="Coxinha de Mandioca" text="Coxinha de Mandioca"/>
                            <PortfolioItem image="coxinhafrango.jpg" alt="Coxinha de Frango" title="Coxinha de Frango" text="Coxinha de Frango"/>
                            <PortfolioItem image="coxinhamandioca.jpg" alt="Coxinha de Mandioca" title="Coxinha de Mandioca" text="Coxinha de Mandioca"/>
                            <PortfolioItem image="coxinhafrango.jpg" alt="Coxinha de Frango" title="Coxinha de Frango" text="Coxinha de Frango"/>
                            <PortfolioItem image="coxinhamandioca.jpg" alt="Coxinha de Mandioca" title="Coxinha de Mandioca" text="Coxinha de Mandioca"/>
                            </div>
                        {/* Final da linha */}

                    </div>
                </section>


            </div>
       );
    }
}