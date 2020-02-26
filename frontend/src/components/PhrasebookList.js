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
  console.log(e.target);
};

const handleSelection = e => {
  console.log(e.target);
};

const languages = { Languages };
const PhrasebookContainer = props =>
  props.user.phrasebooks.map(book => (
    <div>
      <Header as="h2" icon>
        <Icon name="language" color="violet" />
        My Phrasebooks
        <Header.Subheader>
          Study phrasebooks or add to your collection.
        </Header.Subheader>
      </Header>
      <Card>
        <Card.Content>
          <Card.Header>{book.language.name}</Card.Header>
          {console.log(book.language.nations)}
          <Card.Meta>Country, Names, Here</Card.Meta>
          <Card.Description>Phrases: {book.entries.length}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Study
            </Button>
            <Button basic color="red">
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>

      <div>
        <Container>
          <Dropdown
            placeholder="Select a Language"
            options={Languages}
            fluid
            selection
            // onChange={handleSelection}
          />

          <Button color="red">Add Book</Button>
        </Container>
      </div>
    </div>
  ));

export default PhrasebookContainer;
