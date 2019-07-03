import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.login(user);
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Login
          <br />
					{this.renderErrors()}
					<div className="login-form">
						<br />
						<label>Email:
              <input type="text"
								value={this.state.email}
								onChange={this.update('email')}
								className="login-input"
								/>
						</label>
						<br />
						<label>Password:
              <input type="password"
								value={this.state.password}
								onChange={this.update('password')}
								className="login-input"
								/>
						</label>
						<br />
						<input className="session-submit" type="submit" value="Log In"/>
						<br/>
						Don't have an account? <Link to={`/signup`}>Sign Up</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(SessionForm);
