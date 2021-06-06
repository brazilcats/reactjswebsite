import React from 'react';

export default class Footer extends React.Component {

    render(){
        return(
            <div className="copyright">

                {/* Copyright Section */}
                <section className="copyright py-4 text-center text-white">
                    <div className="container">
                    <small>Todos os direitos reservados &copy; TuttiBom 2019</small>
                    </div>
                </section>

            </div>
        );
    }
}