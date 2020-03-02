import React, { Component } from "react";
import { Table, Icon } from "semantic-ui-react";
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

    return (
      <div>
        <div>
          {this.props.active_phrasebook.entries
            ? this.props.active_phrasebook.phrases.map(phrase => (
                <div>
                  {" "}
                  <p>{phrase.input}</p>
                </div>
              ))
            : "No phrases yet!"}
        </div>
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === "phrase" ? direction : null}
                onClick={this.handleSort("phrase")}
              >
                Phrase
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "translation" ? direction : null}
                onClick={this.handleSort("translation")}
              >
                Translation
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === "category" ? direction : null}
                onClick={this.handleSort("category")}
              >
                Category
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.map(data, ({ phrase, translation, category }) => (
              <Table.Row key={phrase}>
                <Table.Cell>{phrase}</Table.Cell>
                <Table.Cell>{translation}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
const mapstateToProps = state => {
  return { ...state.user, ...state.active_phrasebook };
};
export default connect(mapstateToProps)(EntryList);
