import React, { Component } from "react";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import PhrasebookList from "../components/PhrasebookList";
import { Container } from "semantic-ui-react";
import AddBook from "../components/AddBook";
import PhrasebookHeader from "../components/PhrasebookHeader";
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

  addBook = e => {
    let lang = document.querySelector('.book_language div').textContent
    
    let newBook = {
      user_id: this.state.user.id,
      average_score: 0,
      language : lang
    }
    console.log(newBook);
    fetch('http://localhost:3000/phrasebooks', {
      method: 'post',
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(res => res.json)
    .then(console.log)
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <UserInfo user={this.state} />
        <Container>
          <PhrasebookHeader/>
          <PhrasebookList user={this.state} addBook={this.addBook} />
          <AddBook user={this.state} addBook={this.addBook} />

        </Container>
      </div>
    );
  }
}
export default Dashboard;
