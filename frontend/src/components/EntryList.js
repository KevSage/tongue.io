import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";

class EntryList extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    //Create a translateOrganize method in the entries controller that
    //organizes them into categories, and returns an array of arrays back
    //to the frontend. Build an Accordian for each category. Then we need to
    //translate each entry.

    return (
      <div>
        {this.props.activePhrasebook
          ? this.props.activePhrasebook.phrases.map(phrase => (
              <p>{phrase.input}</p>
            ))
          : "No Phrases yet?"}
      </div>
    );
  }
}
export default EntryList;
