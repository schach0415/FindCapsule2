import React, { Component } from 'react'
import { auth } from '../helpers/auth'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerError: null,
      email: '',
      password: ''
    }
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault()
    auth(this.state.email, this.state.password)
      .catch(err => this.setState(setErrorMsg(err)))
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit} style={style.container}>
        <h3>Register</h3>
        <TextField
          hintText="Enter your Email"
          floatingLabelText="Email"
          onChange={(event, newValue) => this.setState({ email: newValue })}
        />
        <br />
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        {this.state.registerError && (
          <div className="alert alert-danger" role="alert">
            <span
              className="glyphicon glyphicon-exclamation-sign"
              aria-hidden="true"
            />
            <span className="sr-only">Error:</span>
            &nbsp;{this.state.registerError}
          </div>
        )}
        <RaisedButton
          label="Register"
          primary={true}
          style={style.raisedBtn}
          type="submit"
        />
      </form>
    );
  }
}

const style = {
  raisedBtn: { margin: 15 },
  container: { textAlign: 'center' }
};
