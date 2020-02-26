import React, { Component } from "react";
import { Form, Button, Container, Icon, Dropdown } from "semantic-ui-react";
import { Animated } from "react-animated-css";
class Translate extends Component {
  state = {
    input: "",
    translation: "",
    language: "",
    category: "",
    abbr: ""
    // Phrasebook: "French"
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  translate = () => {
    let phrase = {
      input: this.state.input,
      category: this.state.category,
      target: this.props.phrasebook.language.abbr
    };

    fetch("http://localhost:3000/phrases", {
      method: "post",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json"
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(phrase)
    })
      //   .then(res => res.json())
      .then(res => res.json())
      .then(data =>
        this.setState({
          translation: data.data.translations[0].translatedText
        })
      )

      .catch(err => console.log(err));
  };

  setCategory = e => {
    let cat = document.querySelector(".categoryDropdown");
    cat = cat.querySelector(".text").innerHTML;
    this.setState({
      category: cat
    });
    console.log(this.state);
  };
  render() {
    console.log(this.props);
    const categories = [
      {
        key: "Food",
        text: "Food",
        value: "Food",
        id: "Food",
        image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
      },
      {
        key: "Transportation",
        text: "Transportation",
        value: "Transportation",
        image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
      },
      {
        key: "Shopping",
        text: "Shopping",
        value: "Shopping",
        image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
      },
      {
        key: "Greetings",
        text: "Greetings",
        value: "Greetings",
        image: { avatar: true, src: "/images/avatar/small/christian.jpg" }
      },
      {
        key: "Emergency",
        text: "Emergency",
        value: "Emergency",
        image: { avatar: true, src: "/images/avatar/small/matt.jpg" }
      },
      {
        key: "Sightseeing",
        text: "Sightseeing",
        value: "Sightseeing",
        image: { avatar: true, src: "/images/avatar/small/justen.jpg" }
      },
      {
        key: "Money",
        text: "Money",
        value: "Money",
        image: { avatar: true, src: "/images/avatar/small/justen.jpg" }
      },
      {
        key: "Numbers and Time",
        text: "Numbers and Time",
        value: "Numbers and Time",
        image: { avatar: true, src: "/images/avatar/small/justen.jpg" }
      },
      {
        key: "Directions",
        text: "Directions",
        value: "Directions",
        image: { avatar: true, src: "/images/avatar/small/justen.jpg" }
      },
      {
        key: "Hotel",
        text: "Hotel",
        value: "Hotel",
        image: { avatar: true, src: "/images/avatar/small/justen.jpg" }
      }
    ];
    return (
      <Container>
        <div>
          <span>
            Select a Category
            <Dropdown
              inline
              options={categories}
              className="categoryDropdown"
              onChange={this.setCategory}
              name="category"
            />
          </span>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Translation"
                name="input"
                placeholder="Enter phrase to be translated"
                onChange={this.onChange}
                value={this.state.input}
              />
            </Form.Group>
          </Form>
          <div>{`Translation (${
            this.props.phrasebook.language
              ? this.props.phrasebook.language.name
              : "Choose a phrasebook"
          })`}</div>
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div
              fluid
              dangerouslySetInnerHTML={{ __html: this.state.translation }}
              className="translation-text"
            ></div>
          </Animated>

          <br />
          <br />

          <Button.Group vertical labeled icon>
            <Button
              basic
              color="green"
              icon="angle double right"
              content="Translate"
              onClick={this.translate}
            />
            <Button
              basic
              color="yellow"
              icon="angle double down"
              // disabled
              content="Save"
            />
            <Button icon="cancel" content="Clear" basic color="red" disabled />
          </Button.Group>
        </div>
      </Container>
    );
  }
}

export default Translate;
