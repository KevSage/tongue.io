import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

class EntryList extends Component {
  state = { activeIndex: 0, workingPhrases: [] };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  // translate = phrase => {
  //   let translation = {
  //     input: phrase.input,
  //     category: this.state.category,
  //     target: this.props.activePhrasebook.language.abbr
  //   };

  //   fetch("http://localhost:3000/phrases", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },

  //     body: JSON.stringify(translation)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       let newEntry = data[0].data.translations[0].translatedText;
  //       let newEntries = [...this.state.workingPhrases, newEntry];
  //       this.setState({
  //         workingPhrases: newEntries
  //       });
  //     });

  //   // .catch(err => console.log(err));
  // };

  render() {
    const { activeIndex } = this.state;
    const workingPhrases = [];
    // if (this.props.activePhrasebook !== "") {
    //   this.props.activePhrasebook.phrases.map(phrase => {
    //     workingPhrases.push(this.translate(phrase));
    //   });
    // }
    // console.log(this.state.workingPhrases);
    return (
      <div>
        {this.props.activePhrasebook === "" ||
        this.props.activePhrasebook.phrases === undefined
          ? "No Phrases yet?"
          : this.props.activePhrasebook.phrases.map(phrase => (
              <div>
                {" "}
                <p>{phrase.input}</p>
              </div>
            ))}
      </div>
    );
  }
}
export default EntryList;
