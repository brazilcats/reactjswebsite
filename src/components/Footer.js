import React from 'react';

export default class Footer extends React.Component {

    render(){
        return(
            <div className="footer">


                <div className="container">
                <div className="row">

                    {/* Footer Location */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Localização</h4>
                    <p className="lead mb-0">Bauru/SP
                        <br/>Brasil</p>
                    </div>

                    {/* Footer Social Icons */}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Redes Sociais</h4>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/tuttibomsalgados">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/tuttibomsalgados/">
                        <i className="fa fa-instagram"></i>
                    </a>
                    </div>

                    {/* Footer About Text */}
                    <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">Contato</h4>
                    <p className="lead mb-0"><a href="https://api.whatsapp.com/send?phone=5514991571533&text=Olá gostaria de informações sobre"  rel="noopener noreferrer" target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i> (14) 99157-1533</a></p>
                    </div>

                </div>
                </div>


            </div>
        );
    }
}