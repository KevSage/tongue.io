import React, { Component } from "react";
import { Container, Button, Form, Dropdown } from "semantic-ui-react";
import { COUNTRY_OPTIONS } from "../countriesData.js";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    nation: ""
  };

  handleFormInput = event => {
    let nation = document.querySelector(".country");
    nation = nation.querySelector("div").textContent;
    console.log(nation);
    this.setState({
      [event.target.name]: event.target.value,
      nation: nation
    });
    console.log(this.state);
  };

  createUser = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });

    let newUser = {
      user: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        nation: this.state.nation
      }
    };

    fetch("http://localhost:3000/users", {
      method: "post",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        debugger;
        this.props.history.push("/login");
      });

    console.log(this.state);

    // if (this.state.password !== this.state.confirmation) {
    //   alert("Passwords must match");
    // } else {
    //   this.setState({
    //     [event.target.name]: event.target.value
    //   });
    //   let newUser = {
    //     user: {
    //       name: this.state.name,
    //       password: this.state.password
    //     }
    //   };
    //   debugger;
    //   fetch("http://localhost:3000//api/v1/users", {
    //     method: "POST",
    //     body: JSON.stringify(newUser),
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json"
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       this.props.history.push("/login");
    //     });
    // }
  };

  render() {
    return (
      <div>
        <div className="loginHeader">Tongue.io</div>

        <Container>
          <Form onSubmit={event => this.createUser(event)}>
            <Form.Field>
              <label>Username</label>
              <input
                placeholder="Username"
                name="username"
                onChange={this.handleFormInput}
              />
            </Form.Field>
            <Form.Field>
              <label>Email Address</label>
              <input
                placeholder="Email Address"
                name="email"
                onChange={this.handleFormInput}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                name="password"
                onChange={this.handleFormInput}
                type="password"
              />
            </Form.Field>

            <Form.Field>
              <label htmlFor="country">Country</label>
              <Dropdown
                name="country"
                onChange={this.updateCountry}
                onChange={this.handleFormInput}
                options={COUNTRY_OPTIONS}
                search
                selection
                selectOnBlur={false}
                value={this.state.country}
                className="country"
              />
            </Form.Field>

            <br />
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Signup;
