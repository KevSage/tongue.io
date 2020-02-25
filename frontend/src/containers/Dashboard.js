import React, { Component } from "react";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import PhrasebookList from "../components/PhrasebookList";
import { Container } from "semantic-ui-react";
class Dashboard extends Component {
  state = {
    user: {},
    nation: {},
    phrasebooks: [],
    entries: []
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:3000/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);

          this.setState({
            user: data,
            nation: data.nation,
            phrasebooks: data.phrasebooks
            // entries: data.phrasebooks.entries
          });
        });
    }
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <UserInfo user={this.state} />
        <Container>
          <PhrasebookList user={this.state} />
        </Container>
      </div>
    );
  }
}
export default Dashboard;
