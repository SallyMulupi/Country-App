import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const linkStyles = {
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "white",
};
function NavBar() {
    return (
      <ListContainer className="ul">
        <NavLink
          to="/"
          exact="true"
          style={linkStyles}
          // activeStyle={{
          //   background: "darkblue",
          // }}
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/allcountries"
          exact="true"
          style={linkStyles}
          // activeStyle={{
          //   background: "darkblue",
          // }}
        >
          <li>All Countries</li>
        </NavLink>
        <NavLink
          to="/about"
          exact="true"
          style={linkStyles}
          // activeStyle={{
          //   background: "darkblue",
          // }}
        >
          <li>About</li>
        </NavLink>
        
        <NavLink
          to="/contact"
          exact="true"
          style={linkStyles}