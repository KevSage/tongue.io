import React, { Component } from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";

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
        localStorage.setItem("token", data.token);
        this.props.history.push("/dashboard");
        console.log(localStorage);
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
export default Login;
