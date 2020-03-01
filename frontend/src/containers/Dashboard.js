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
    activePhrasebook: "",
    activePhrase: "",
    phrases: []
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
          let books = [];
          let entries = [];
          let phrases = [];

          data.phrasebooks.map(book => {
            book.entries.map(entry => {
              entries.push(entry);
            });
          });
          data.phrasebooks.map(book => {
            book.phrases.map(phrase => {
              phrases.push(phrase);
            });
          });
          console.log(entries);
          this.setState({
            user: data,
            nation: data.nation,
            phrasebooks: data.phrasebooks,
            entries: entries,
            phrases: phrases
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
  deleteBook = e => {
    let bookId = e.target.value;
    fetch("http://localhost:3000/phrasebooks/" + bookId, {
      method: "DELETE"
    })
      .then(res => res.text())
      .then(data => {
        console.log(bookId);
        console.log(this.state.phrasebooks);
        let newArray = this.state.phrasebooks;
        let newestArr = newArray.filter(book => book.id !== parseInt(bookId));
        this.setState({
          phrasebooks: newestArr
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

  createEntry = entry => {
    console.log(entry);
    let newEntry = {
      phrasebook_id: this.state.activePhrasebook.id,
      phrase_id: entry
    };

    fetch("http://localhost:3000/entries", {
      method: "POST",
      body: JSON.stringify(newEntry),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        debugger;
        let newEntries = [...this.state.entries, data];
        // let newUser = { ...this.state.user.entries, data };
        this.setState({
          entries: newEntries
        });
        this.setState(this.state);
      });
  };
  render() {
    console.log(this.state.phrasebooks);
    return (
      <div>
        <Navbar />
        <UserInfo
          user={this.state}
          entries={this.state.entries}
          phrasebooks={this.state.phrasebooks}
        />
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
                  deleteBook={this.deleteBook}
                />
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Translate
                phrasebook={this.state.activePhrasebook}
                entries={this.state.entries}
                createEntry={this.createEntry}
                activePhrasebook={this.state.activePhrasebook}
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
