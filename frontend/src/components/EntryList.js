import React, { Component } from "react";
import { Table, Icon, Button } from "semantic-ui-react";
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
    direction: null
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
    debugger;
    return (
      <div>
        <div>
          {this.props.active_phrasebook.entries &&
          this.props.active_phrasebook.entries.length > 0
            ? this.props.active_phrasebook.phrases.map(phrase => (
                <div>
                  {" "}
                  <p className="entry">
                    {phrase.input}
                    <Button
                      onClick={
                        (phrase = () => this.props.delete_phrase(phrase))
                      }
                      color="red"
                      size="mini"
                      className="entryBtn"
                    >
                      Delete
                    </Button>
                  </p>
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
