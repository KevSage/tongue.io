import React, { Component } from "react";
import {
  Button,
  Card,
  Image,
  Container,
  Search,
  Icon,
  Header,
  Modal
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
  filterNotes = () => {
    let newFilter = [...this.state.nations];
    return newFilter.filter(nation => {
      return nation.name.toLowerCase().includes(this.state.search);
    });
  };

  handleSearch = event => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
    console.log(this.state.search);
  };
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
          <Search
            className="country-search"
            onChange={event => this.handleSearch(event)}
          />

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
                    <Modal
                      trigger={
                        <Button basic color="green">
                          Learn More
                        </Button>
                      }
                    >
                      {" "}
                      <Modal.Header>
                        {nation.name}, ({nation.region})
                      </Modal.Header>
                      <Modal.Content image>
                        <Image wrapped size="medium" src={nation.flag} />
                        <Modal.Description>
                          <Header>{nation.name}</Header>
                          <p>Region: {nation.region}</p>
                          <p>Capital City: {nation.capital}</p>
                          <p>Population: {nation.population}</p>
                          <p>Language: {nation.language.name}</p>
                          <p>
                            Currency: {nation.currency_symbol}
                            {nation.currency_code} ({nation.currency})
                          </p>
                        </Modal.Description>
                      </Modal.Content>
                    </Modal>
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
