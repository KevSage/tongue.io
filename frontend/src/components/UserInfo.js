import React from "react";
import { Divider, Grid, Image, Segment } from "semantic-ui-react";
import Translate from "../components/Translate";

function UserInfo(props) {
  //   let entries = props.user.phrasebooks.forEach(book =>
  //     console.log(book.entries)
  //   );
  
  return (
    <div>
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <Image src={props.user.nation.flag} size="small" avatar />
            <p>{props.user.user.username}</p>
          </Grid.Column>
          <Grid.Column>
            <div>
              <p>{props.user.phrasebooks.length}</p>
              <p>Phrasebook(s)</p>
            </div>
            <div>
              <p>{props.user.entries.length}</p>
              <p>Translation(s)</p>
            </div>
          </Grid.Column>
        </Grid>

        <Divider vertical></Divider>
      </Segment>
      <Translate user={props.user} />
    </div>
  );
}
export default UserInfo;
