import React, { Component } from "react";
import { Button, Form, Container } from "semantic-ui-react";
import { connect } from "react-redux";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleFormInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: { ...this.state } })
    })
      .then(res => res.json())
      .then(data => {
        this.props.setUser(data);
        localStorage.setItem("token", data.token);

        this.props.history.push("/dashboard");
      });
  };

  render() {
    return (
      <div>
        <div className="loginHeader">Tongue.io</div>
        <Container>
          <Form onSubmit={event => this.handleSubmit(event)}>
            <Form.Field>
              <label>Email Address</label>
              <input
                placeholder="Email Address"
                name="email"
                value={this.state.name}
                onChange={this.handleFormInput}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleFormInput}
                type="password"
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

//Defining props
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: data =>
      dispatch({
        type: "SET_USER",
        data: data
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
