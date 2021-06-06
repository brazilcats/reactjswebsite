import React from 'react';
import Mymodal from '../Mymodal';

export default class PortfolioItem extends React.Component{


    constructor(props) {
        super(props);
        this.state = {deps:[], Mymodal: false}
    }


    render(){

        //const {deps} = this.state;
        let addModalClose =() => this.setState({addModalShow: false}) 

        return(

                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-toggle="modal" onClick = {()=> this.setState({addModalShow:true})} >
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                                </div>
                                <img className="img-fluid" src={process.env.PUBLIC_URL+"/img/"+this.props.image} alt={this.props.alt} title={this.props.title}/>
                            </div>
                            <Mymodal show={this.state.addModalShow} imagem = {this.props.image} titulo = {this.props.alt} onHide = {addModalClose}/>
                        </div>

        );
    }
}