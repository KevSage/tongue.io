import React from "react";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";
import EditUser from "../components/EditUser";
import { connect } from "react-redux";

function UserInfo(props) {
  return (
    <div>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <Image src={props.nation.flag} size="small" avatar />
            <p>Username: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>Country: {props.nation.name}</p>
            {/* <Icon name="pencil alternate" /> */}
            <EditUser user={props.user}></EditUser>
          </Grid.Column>
          <Grid.Column>
            <div>
              <p>
                {props.user.phrasebooks ? props.user.phrasebooks.length : 0}
              </p>
              <p>Phrasebook(s)</p>
            </div>
            <div>
              <p>{props.entries ? props.entries.length : 0}</p>
              <p>Translation(s)</p>
            </div>
          </Grid.Column>
        </Grid>

        <Divider vertical></Divider>
      </Segment>
      {/* <Translate user={props.user} /> */}
    </div>
  );
}

// const mapStateToProps = state => {
//   return { ...state.user };
// };

const mapStateToProps = state => {
  return { ...state.user };
};

// const mapDispatchToProps = state => {};
export default connect(mapStateToProps)(UserInfo);
