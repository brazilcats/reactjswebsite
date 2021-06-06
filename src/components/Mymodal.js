import React, {Component} from 'react';
import {Modal, Button } from 'react-bootstrap';

export default class Mymodal extends Component {
 
    
  render () {
    return (
 
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{this.props.titulo}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img className="img-fluid rounded mb-5" src={process.env.PUBLIC_URL+"/img/"+ this.props.imagem} alt=""/>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
              </div>
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Fechar Janela</Button>
      </Modal.Footer>
    </Modal>
 
      );
  }
}
