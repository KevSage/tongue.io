import React, { Component } from "react";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import PhrasebookList from "../components/PhrasebookList";
import { Container, Segment, Grid, Divider } from "semantic-ui-react";
import AddBook from "../components/AddBook";
import PhrasebookHeader from "../components/PhrasebookHeader";
import Translate from "../components/Translate";
class Dashboard extends Component {
  state = {
    user: {},
    nation: {},
    phrasebooks: [],
    entries: [],
    activePhrasebook: ""
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
    let lang = document.querySelector(".book_language div").textContent;

    let newBook = {
      user_id: this.state.user.id,
      average_score: 0,
      language: lang
    };
    console.log(newBook);
    fetch("http://localhost:3000/phrasebooks", {
      method: "post",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(book => {
        let newBookList = [...this.state.phrasebooks, book];
        this.setState({
          phrasebooks: newBookList
        });
      });
  };

  chooseDeck = e => {
    console.log(e.target.value);
    let obj = this.state.phrasebooks.find(
      book => book.language.name === e.target.value
    );
    console.log(obj);

    this.setState({
      activePhrasebook: obj
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Navbar />
        <UserInfo user={this.state} />
        <Segment>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Container className="main">
                <PhrasebookHeader />
                <AddBook user={this.state} addBook={this.addBook} />

                <PhrasebookList
                  user={this.state}
                  addBook={this.addBook}
                  chooseDeck={this.chooseDeck}
                  phrasebooks={this.state.phrasebooks}
                />
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Translate
                phrasebook={this.state.activePhrasebook}
                entries={this.state.phrasebooks}
              />
            </Grid.Column>
          </Grid>

          <Divider vertical>Translate</Divider>
        </Segment>
      </div>
    );
  }
}
export default Dashboard;
