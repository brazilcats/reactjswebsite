import React from 'react';

export default class Maps extends React.Component {

    render(){
        return(
            <div className="mapsImovel" id="mapa">
                <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.517439289106!2d-44.03480858508463!3d-19.986786386571918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6be65a53292b9%3A0xf61da899a0c0b9d9!2sR.+Me.+Paulina%2C+210+-+Diamante%2C+Belo+Horizonte+-+MG%2C+30660-630!5e0!3m2!1spt-BR!2sbr!4v1539554138845" allowFullScreen></iframe>
            </div>
        );
    }
}