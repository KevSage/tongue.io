import React, { Component } from "react";
import { Table, Icon, Button, Popup } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";

const tableData = [
  { phrase: "John", translation: 15, category: "Male" },
  { phrase: "Amber", translation: 40, category: "Female" },
  { phrase: "Leslie", translation: 25, category: "Other" },
  { phrase: "Ben", translation: 70, category: "Male" }
];

class EntryList extends Component {
  state = {
    column: null,
    data: tableData,
    direction: null,
    hover: ""
  };

  hoverTranslate = e => {
    this.setState({
      hover: ""
    });
    let phrase = e.target.innerText.split("Delete");
    phrase = phrase[0];
    console.log(phrase);
    let fromLang = "en";
    let toLang = this.props.active_phrasebook.language.abbr;
    let text = phrase;

    const API_KEY = ["AIzaSyB63vqtGkeGtQ-Bl_6vxGldqQb8G1hpjko"];

    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += "&q=" + encodeURI(text);
    url += `&source=${fromLang}`;
    url += `&target=${toLang}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          hover: response["data"]["translations"][0]["translatedText"]
        });
      })
      .catch(error => {
        console.log("There was an error with the translation request: ", error);
      });
  };

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state;

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: "ascending"
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      direction: direction === "ascending" ? "descending" : "ascending"
    });
  };

  render() {
    const { column, data, direction } = this.state;

    const workingPhrases = [];
    return (
      <div>
        <div>
          {this.props.active_phrasebook.entries &&
          this.props.active_phrasebook.entries.length > 0
            ? this.props.active_phrasebook.phrases.map(phrase => (
                <div className="entryDiv">
                  {" "}
                  <Popup
                    inverted
                    mouseEnterDelay={500}
                    content={this.state.hover}
                    trigger={
                      <p
                        className="entry"
                        onMouseEnter={e => this.hoverTranslate(e)}
                      >
                        {phrase.input}
                        <Button
                          onClick={phrase => this.props.delete_phrase(phrase)}
                          color="red"
                          size="mini"
                          className="entryBtn"
                          id={phrase.id}
                          key={phrase.id}
                        >
                          Delete
                        </Button>
                      </p>
                    }
                  />
                </div>
              ))
            : "No phrases yet!"}
        </div>
      </div>
    );
  }
}
const mapstateToProps = state => {
  return { ...state.user, ...state.active_phrasebook };
};

const mapDispatchToProps = dispatch => {
  return {
    delete_phrase: data => dispatch({ type: "DELETE_PHRASE", value: data })
  };
};
export default connect(mapstateToProps, mapDispatchToProps)(EntryList);
