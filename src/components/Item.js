import React, {Component} from 'react';

class Welcome extends Component {

    render(){

        const {name, lastname} = this.props

        return(
            <div className="welcome">

                <h1>Class Component welcome: {name} {lastname}</h1>

            </div>
        );
    }
}

export default Welcome;