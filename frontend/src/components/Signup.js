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
    nation = nation.querySelector("div").innerHTML;
    console.log(nation);
    this.setState({
      [event.target.name]: event.target.value,
      nation: nation
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="loginHeader">Tongue.io</div>

        <Container>
          <Form>
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
