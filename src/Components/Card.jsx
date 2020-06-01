import React, { Component } from 'react';
import Logo from '../Images/Logo.png'; 

class Card extends Component {
    render() {
        return (

            <div className="card text-center centered" style={{ "width": "504px", marginTop: '40vh' }}>
                <div className="card-body">
                    <img src={Logo} style={{ width: '100px' }} alt="" />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;