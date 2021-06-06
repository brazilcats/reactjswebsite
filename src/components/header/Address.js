import React from 'react';

export default class Address extends React.Component {

    render(){
        return(
            <div className="address">

            <picture>
                <source media="(max-width: 768px)" srcSet={process.env.PUBLIC_URL+"/img/whatsapp.png"} />
                <source media="(min-width: 769px)" srcSet={process.env.PUBLIC_URL+"/img/whatsapp.png"} />
                <img src={process.env.PUBLIC_URL+"/img/whatsapp.png"} width="35" alt="Logomarca WEF Imóveis"/>
            </picture>

            <strong> (xx) xxxx-xxxx</strong><br/>
            Endereço
        </div>
        );
    }
}