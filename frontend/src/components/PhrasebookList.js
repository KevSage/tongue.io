import React from "react";
import {
  Card,
  Icon,
  Button,
  Header,
  Container,
  Dropdown
} from "semantic-ui-react";
import Languages from "../Languages";

const addBook = e => {
  console.log(e.target.value);
};

const languages = { Languages };
const PhrasebookContainer = props => {
  return props.phrasebooks.map(book => (
    <div className="book_card">
      <Card>
        <Card.Content>
          <Card.Header>{book.language.name}</Card.Header>
          {console.log(book.language.nations)}
          <Card.Meta>Country, Names, Here</Card.Meta>
          <Card.Description>Phrases: {book.entries.length}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className={book.language.name}>
            <Button
              basic
              color="green"
              onClick={e => {
                props.chooseDeck(e);
              }}
              value={book.language.name}
            >
              Study
            </Button>
            <Button
              basic
              color="red"
              onClick={e => {
                props.deleteBook(e);
              }}
              value={book.id}
            >
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>

      {/* <div>
        <Container>
          <Dropdown
            placeholder="Select a Language"
            options={Languages}
            fluid
            selection
            className="book_language"
            // onChange={handleSelection}
          />

          <Button color="red" onClick={(e) => {props.addBook(e)}}>Add Book</Button>
        </Container>
      </div> */}
    </div>
  ));
};

export default PhrasebookContainer;
