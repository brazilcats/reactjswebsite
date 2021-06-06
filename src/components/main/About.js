import React from 'react';

export default class About extends React.Component {

    render(){

        return(
            <div>

                <section className="page-section bg-primary text-white mb-0 about" id="about">
                    <div className="container">

                    {/* About Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-white">Sobre</h2>

                    {/* Icon Divider */}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                        <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    {/* About Section Content */}
                    <div className="row">
                        <div className="col-lg-4 ml-auto">
                        <p className="lead">Somos uma empresa dedicada a tornar seu dia mais prazeiroso.</p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                        <p className="lead">Aceitamos encomenda para Festas, Reuniões, Casamentos e Eventos em geral.</p>
                        </div>
                    </div>

                    {/* About Section Button */}
                    <div className="text-center mt-4">
                        <a className="btn btn-xl btn-outline-light" href={process.env.PUBLIC_URL+"/img/cardapio.jpg"}>
                        <i className="fa fa-download mr-2"></i>
                        Baixar Cardápio
                        </a>
                    </div>

                    </div>
                </section>

            </div>
       );
    }
}