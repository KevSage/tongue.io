import React from "react";
import { Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu>
      <Menu.Item header name="editorials">
        Editorials
      </Menu.Item>

      <Menu.Item header name="reviews">
        Reviews
      </Menu.Item>

      <Menu.Item header name="upcomingEvents">
        Upcoming Events
      </Menu.Item>
    </Menu>
  );
}
export default Navbar;
