import React from 'react';
import axios from "axios";

export default class Contact extends React.Component {

    constructor (props) {
        super (props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            msg: ''
        }

    }


    handleSubmit= (event) => {

        event.preventDefault()
        
        const mensagem = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            message: this.state.msg
          };
      
        var qs = require('qs');
        axios ({
            method: 'POST',
            url: 'controllers/contact_me.php',
            data: qs.stringify(mensagem),
            headers: {}, 
            transformRequest: [(data, headers) => {
                return data;
            }]
        }).then(function (response) {
            console.log('Success: ', response);
        
        }).catch(function (error) {
            console.log('Error: ', error);
        });
       
    }

    setName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    setEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    setPhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    setMsg = (event) => {
        this.setState({
            msg: event.target.value
        })
    }

    render(){

        console.log (this.state.name);

        return(
            <div>
    
                    <section className="page-section contact" id="contact">
                    <div className="container">

                     {/* Contact Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Entre em Contato</h2>

                     {/* Icon Divider */}
                     <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                        <i className="fa fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                     {/* Contact Section Form */}
                     <div className="row">
                        <div className="col-lg-8 mx-auto">
                        {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                        <form onSubmit={this.handleSubmit} name="sentMessage" id="contactFormulario" noValidate="noValidate">
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Nome</label>
                                <input className="form-control" id="name" name="name" value={this.state.name} onChange={this.setName} type="text" placeholder="Nome" required="required" data-validation-required-message="Entre com o seu nome."/>
                                <p className="help-block text-danger"></p>
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email</label>
                                <input className="form-control" id="email" name="email" value={this.state.email} onChange={this.setEmail} type="email" placeholder="Email" required="required" data-validation-required-message="Entre com o seu e-mail."/>
                                <p className="help-block text-danger"></p>
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Telefone</label>
                                <input className="form-control" id="phone" value={this.state.phone} onChange={this.setPhone} type="tel" placeholder="Telefone" required="required" data-validation-required-message="Entre com o seu telefone."/>
                                <p className="help-block text-danger"></p>
                            </div>
                            </div>
                            <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Mensagem</label>
                                <textarea className="form-control" id="message" value={this.state.Msg} onChange={this.setMsg} rows="5" placeholder="Mensagem" required="required" data-validation-required-message="Entre com a mensagem."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            </div>
                            <br/>
                            <div id="success"></div>
                            <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton">Enviar</button>
                            </div>
                        </form>
                        </div>
                    </div>

                    </div>
                </section>

    
            </div>
        );
    }
}