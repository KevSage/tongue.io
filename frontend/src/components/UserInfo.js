import React from "react";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";
import EditUser from "../components/EditUser";

function UserInfo(props) {
  return (
    <div>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <Image src={props.user.nation.flag} size="small" avatar />
            <p>Username: {props.user.user.username}</p>
            <p>Email: {props.user.user.email}</p>
            <p>Country: {props.user.nation.name}</p>
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
              <p>{props.entries ? props.user.entries.length : 0}</p>
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
export default UserInfo;
