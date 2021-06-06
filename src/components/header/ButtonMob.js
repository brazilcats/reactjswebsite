import React from 'react';

export default class ButtonMob extends React.Component {

    constructor()
    {
        super();
        this.state={
            visNav:'flex'
        }
    }

    /* Fará a função de toggle */
    clickMe()
    {
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav:'none'
            });
        }else{
            this.setState({
                visNav:'flex'
            });
        }
        document.querySelector(".navbar-collapse").style.display=this.state.visNav;
    }

    render(){
        return(
            <div className="buttonMob" onClick={this.clickMe.bind(this)}>
                     <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded buttonMob" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i> Menu
                    </button>
            </div>
        );
    }
}