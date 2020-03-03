import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class PhrasebookList extends Component {
  chooseDeck = e => {
    console.log(e.target.value);
    let obj = this.props.phrasebooks.find(
      book => book.language.name === e.target.value
    );
    console.log(obj);

    // this.setState({
    //   activePhrasebook: obj
    // });
    this.props.set_active_phrasebook(obj);
  };
  deleteBook = e => {
    let bookId = e.target.value;
    // fetch("http://localhost:3000/phrasebooks/" + bookId, {
    //   method: "DELETE"
    // })
    //   .then(res => res.text())
    //   .then(data => {
    //     console.log(bookId);
    //     console.log(this.state.phrasebooks);
    //     let newArray = this.state.phrasebooks;
    //     let newestArr = newArray.filter(book => book.id !== parseInt(bookId));
    //     this.setState({
    //       phrasebooks: newestArr
    //     });
    //   });
    this.props.delete_phrasebook(bookId);
  };
  render() {
    return this.props.phrasebooks.map(book => (
      <div className="book_card">
        <Card>
          <Card.Content>
            <Card.Header>{book.language.name}</Card.Header>
            {/* {console.log(book.language.nations)} */}
            <Card.Meta>Country, Names, Here</Card.Meta>
            <Card.Description>Phrases: {book.entries.length}</Card.Description>
          </Card.Content>
          <Card.Content extra className="bookBtn">
            <div className={book.language.name}>
              <Button
                basic
                color="green"
                onClick={e => {
                  this.chooseDeck(e);
                }}
                value={book.language.name}
              >
                Study
              </Button>
              <Button
                basic
                color="red"
                onClick={e => {
                  this.deleteBook(e);
                }}
                value={book.id}
              >
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    ));
  }
}

const mapStateToProps = state => {
  return { ...state.user, ...state.phrasebooks };
};

const mapDispatchToProps = dispatch => {
  return {
    set_active_phrasebook: data =>
      dispatch({ type: "SET_ACTIVE_PHRASEBOOK", value: data }),
    delete_phrasebook: data =>
      dispatch({ type: "DELETE_PHRASEBOOK", value: data })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhrasebookList);
