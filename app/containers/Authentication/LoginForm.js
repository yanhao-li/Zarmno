import React from 'react';

export default class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="control-label" htmlFor="email">Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.onChange}
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="password">Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
                Log in
          </button>
        </div>
      </form>
    );
  }
}