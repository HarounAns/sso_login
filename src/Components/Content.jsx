import React, { Component } from 'react';

class Content extends Component {
    render() {
        let { user, logout } = this.props;

        return (
            <div>
                <h1>{user} has successfully logged in!</h1>
                <button onClick={logout} type="button" className="btn btn-primary" style={{ marginTop: '50px' }}>Logout</button>
            </div>
        );
    }
}

export default Content;