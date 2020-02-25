import React from "react";
import { Card, Icon, Button, Header, Container } from "semantic-ui-react";
import Languages from 'languages-js'
import Select from "react-select";

const languages = [];

const addBook = e => {
  console.log(e.target);
};

const CardExampleCardProps = props =>
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
      
        <Button color="red">Add Book</Button>
        </Container>
      </div>
    </div>
  ));

export default CardExampleCardProps;
