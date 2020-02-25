import React, { Component } from "react";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";

class Dashboard extends Component {
  state = {
    user: {},
    nation: {},
    phrasebooks: [],
    entries: []
  };

  // componentDidMount() {
  //   if (localStorage.getItem("token")) {
  //     fetch("http://localhost:3001/login", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Token": localStorage.getItem("token")
  //       }
  //     })
  //       .then(res => res.json())
  //       .then(data =>
  //         this.setState({
  //           username: data.username,
  //           email: data.username,
  //           nation: data.nation

  //         })
  //       );
  //   }
  // }

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
          debugger
          this.setState({
            user: data,
            nation: data.nation,
            phrasebooks: data.phrasebooks,
            entries: data.phrasebooks.entries

          })
          console.log(this.state)

        }
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
