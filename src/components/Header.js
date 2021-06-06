import React from 'react';
import Nav from "./header/Nav";
import Logo from "./header/Logo";

export default class Header extends React.Component {

    render(){
        return(
            <div>
                <Nav/>
                <Logo/>
            </div>
        );
    }
}