import React, { Component } from 'react';
import Card from './Card';
import EnterPassword from './EnterPassword';

class EnterUser extends Component {
    constructor(props) {
        super(props);

        // starts off on email screen, then asks for password
        this.state = {
            value: null,
            emailScreen: true,
            pwdScreen: false,
        };
    }

    onNext = () => {
        console.log('NEXT PRESSED');

        let { value } = this.state;

        // if no user email or phone make it red and return
        if (!value) {
            this.setState({ invalidEmailOrPhone: true });
            return;
        }

        // set the user
        this.props.setUser(value);
    }

    onCreateAccount = () => {
        console.log('CREATE ACCOUNT PRESSED');
    }

    onForgotEmail = () => {
        console.log('FORGOT EMAIL PRESSED');
    }

    onLearnMore = () => {
        console.log('LEARN MORE PRESSED');
    }

    emailOrPhoneInput = () => {
        // checks if username is filled
        // TODO, make an api call with the input email/phone to check if user is in db, if not, make this input invalid also
        let { invalidEmailOrPhone } = this.state;
        let className = "form-control";

        if (invalidEmailOrPhone) className = className + " is-invalid";

        return <input type="text" className={className} value={this.state.value} onChange={this.handleChange} id="emailOrPhone" placeholder="Email or Phone" />
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
            invalidEmailOrPhone: false
        });
    }

    render() {
        let { logo, appName } = this.props;
        return (
            <Card>
                <div style={{ marginBottom: '20px' }}>
                    <h5 className="card-title" style={{ marginTop: '20px' }}>Sign in</h5>
                    <p className="card-text" >to continue to {appName}</p>
                </div>
                <div style={{ margin: '20px' }}>
                    <div className="form-group">
                        {this.emailOrPhoneInput()}
                        <p><small className="form-text text-muted" style={{ float: 'left' }}><a href='#' onClick={this.onForgotEmail}>Forgot email?</a></small></p>
                    </div>
                    <div className="form-group">
                        <p><small className="form-text text-muted" style={{ float: 'left', marginTop: '50px' }}>Not your computer? Use Guest mode to sign in privately.
                            <a href='#' onClick={this.onLearnMore}>Learn more</a>
                        </small></p>
                    </div>
                    <div className="form-group">
                        <p>
                            <small className="form-text text-muted" style={{ float: 'left', marginTop: '50px' }}>
                                <a href='#' onClick={this.onCreateAccount}>Create account</a>
                            </small>
                        </p>
                        <button onClick={this.onNext} type="button" className="btn btn-primary" style={{ float: 'right', marginTop: '40px' }}>Next</button>
                    </div>
                </div>
            </Card>
        );
    }
}

export default EnterUser;

