import React from "react";
import { Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu stackable>
      <Menu.Item>
        <p className="myFont">Tongue.io</p>
      </Menu.Item>

      <Menu.Item
        name="Dashboard"
        // active={activeItem === "dashboard"}
        // onClick={this.handleItemClick}
      >
        Dashboard
      </Menu.Item>

      <Menu.Item
        name="countries"
        // active={activeItem === "testimonials"}
        // onClick={this.handleItemClick}
      >
        Countries
      </Menu.Item>

      <Menu.Item
        name="log0ut"
        // active={activeItem === "log0ut"}
        // onClick={this.handleItemClick}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
}
export default Navbar;
