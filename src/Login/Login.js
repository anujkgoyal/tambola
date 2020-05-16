import React, {Component} from 'react'
import classes from './login.module.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        console.log(target.name);
        // this.setState({username: })
        this.setState({[target.name]: target.value});
        console.log(this.state);
    }

    render (){
        return (
            <div className={classes.Login}>
                <div>Login(host only)</div>
                <div className="form-group">
                    <input className="form-control"
                           placeholder="Username"
                           name="username"
                           onChange={this.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => this.props.loginHandler(this.state.username, this.state.password)}>Submit</button>
            </div>
        )
    }
}

export default Login;