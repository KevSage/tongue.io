import React from "react";
import { Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu stackable>
      <Menu.Item>
        <p className="myFont">Tongue.io</p>
      </Menu.Item>

      <Menu.Item
        name="features"
        // active={activeItem === "features"}
        // onClick={this.handleItemClick}
      >
        Features
      </Menu.Item>

      <Menu.Item
        name="testimonials"
        // active={activeItem === "testimonials"}
        // onClick={this.handleItemClick}
      >
        Testimonials
      </Menu.Item>

      <Menu.Item
        name="sign-in"
        // active={activeItem === "sign-in"}
        // onClick={this.handleItemClick}
      >
        Sign-in
      </Menu.Item>
    </Menu>
  );
}
export default Navbar;
