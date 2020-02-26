import React, { Component } from "react";
import {
  Button,
  Card,
  Image,
  Container,
  Search,
  Icon,
  Header
} from "semantic-ui-react";
import Navbar from "../components/Navbar";
class NationList extends Component {
  state = {
    nations: [],
    search: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/nations")
      .then(res => res.json())
      .then(data =>
        this.setState({
          nations: data
        })
      );
  }
  render() {
    console.log(this.state.nations);
    return (
      <div>
        <Navbar />
        <Container className="country-container">
          <Header as="h2" icon>
            <Icon name="globe" color="violet" />
            Country/Language Database{" "}
            <Header.Subheader>
              Find the language of your next destination{" "}
            </Header.Subheader>
          </Header>
          <Search className="country-search" />

          <Card.Group>
            {this.state.nations.map(nation => (
              <Card className="country-card">
                <Card.Content>
                  <Image floated="right" size="tiny" src={nation.flag} />
                  <Card.Header>{nation.name}</Card.Header>
                  <Card.Meta>Capital City: {nation.capital}</Card.Meta>
                  <Card.Description>
                    The people of {nation.name} speak{" "}
                    <strong>{nation.language.name}</strong>.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">
                      See More
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}
export default NationList;