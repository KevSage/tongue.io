import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>

      <Menu.Item
        name="countries"
        // active={activeItem === "testimonials"}
        // onClick={this.handleItemClick}
      >
        <Link to="/countries">Countries</Link>{" "}
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
