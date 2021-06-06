import React, {Component} from 'react';

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'welcome visitors'
        }
    }

    ChangeMessage(){
        this.setState({
            message: "Thanks for subscribing"
        })
    }

    render(){
        return(
            <div className="message">

                <h1>{ this.state.message}</h1>
                <button onClick={ () => this.ChangeMessage()}>Subscribe</button>

            </div>
        );
    }
}

export default Message;