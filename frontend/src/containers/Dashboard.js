import React, { Component } from "react";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";

class Dashboard extends Component {
  state = {
    user: [],
    nation: [],
    phrasebooks: [],
    entries: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/users/1")
      .then(res => res.json())
      .then(data =>
        this.setState({
          user: data,
          nation: data.nation
          //   phrasebooks: data.phrasebooks,
          //   entries: data.entries
        })
      );
    fetch("http://localhost:3000/phrasebooks/1")
      .then(res => res.json())
      .then(data =>
        this.setState({
          phrasebooks: [data],
          entries: [data.entries]
        })
      );
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <UserInfo user={this.state} />
      </div>
    );
  }
}
export default Dashboard;
