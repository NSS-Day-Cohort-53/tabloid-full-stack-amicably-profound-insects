import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { logout } from "../modules/authManager";

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">
          Tabloid
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavLink href="/posts">Posts</NavLink>
                <NavItem>
              <NavLink tag={RRNavLink} to="/tag">Tag Management</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/category">Category Management</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="/reaction/add">Add Reaction</NavLink>
            </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/category">
                    Category Management
                  </NavLink>
                </NavItem>
                <NavLink tag={RRNavLink} to="/userProfiles">
                  User Profiles
                </NavLink>
              </>
            )}
          </Nav>
          <Nav navbar>
            {isLoggedIn && (
              <>
                <NavItem>
                  <a
                    aria-current="page"
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
                    Logout
                  </a>
                </NavItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
