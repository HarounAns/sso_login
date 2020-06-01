import React, { Component } from 'react';
import Card from './Card';

class EnterPassword extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            
        };
    }
    
    formatEmailOrPhone = () => {
        let { user } = this.props;
        return user.split('@')[0];
    }


    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    onNext = () => {
        console.log('NEXT PRESSED');

        let { value } = this.state;
        if (!value) {
            this.setState({ invalidPwd: true });
            return;
        }

        // login to app
        // TODO: add actual login logic, right now any non null password works
        this.props.login();
    }

    onForgotPassword = () => {
        console.log('FORGOT PASSWORD PRESSED');
    }

    pwdInput = () => {
        // checks if username is filled
        // TODO, make an api call with the input email/phone to check if user is in db, if not, make this input invalid also
        let { invalidPwd } = this.state;
        let className = "form-control";

        if (invalidPwd) className = className + " is-invalid";

        return <input type="password" className={className} value={this.state.value} onChange={this.handleChange} id="password" placeholder="Enter your password" />
    }

    render() {
        let user = this.formatEmailOrPhone();
        return (
            <Card>
                <div style={{ marginBottom: '20px' }}>
                    <h5 className="card-title" style={{ marginTop: '20px' }}>Welcome</h5>
                    {user}
                </div>
                <div style={{ margin: '20px' }}>
                    <div className="form-group">
                        {this.pwdInput()}
                        <p>
                            <small className="form-text text-muted" style={{ float: 'left', marginTop: '50px' }}>
                                <a href='#' onClick={this.onForgotPassword}>Forgot Password</a>
                            </small>
                        </p>
                        <button onClick={this.onNext} type="button" className="btn btn-primary" style={{ float: 'right', marginTop: '40px' }}>Next</button>
                    </div>
                </div>
            </Card>
        );
    }
}

export default EnterPassword;