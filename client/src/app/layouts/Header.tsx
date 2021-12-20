import React from "react";
import { Icon } from "@rsuite/icons";
import { Link } from "react-router-dom";
import { Navbar, Nav, Dropdown, Badge, Button } from "rsuite";

import { FaShoppingBasket as ShoppinCart } from "react-icons/fa";

export default function Header() {
  const [activeKey, setActiveKey] = React.useState(null);

  const midLinks = [
    { title: "catalog", path: "/catalog", eventKey: "1" },
    { title: "about", path: "/about", eventKey: "2" },
    { title: "contact", path: "/contact", eventKey: "3" },
  ];

  const rightLinks = [
    { title: "login", path: "/login", eventKey: "4" },
    { title: "register", path: "/register", eventKey: "5" },
  ];
  return (
    <Navbar
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Navbar.Brand as="div">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          RE-STORE
        </Link>
      </Navbar.Brand>
      <Nav onSelect={setActiveKey} activeKey={activeKey}>
        {midLinks.map((item, index) => (
          <Nav.Item as="div" key={index} eventKey={item.eventKey + ""}>
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.title.toUpperCase()}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
      <Nav>
        <Nav.Item as="div">
          <Badge content={999}>
            <Icon
              as={ShoppinCart}
              style={{ fontSize: "30px", marginRight: 10 }}
            />
          </Badge>
        </Nav.Item>
      </Nav>
      <Nav onSelect={setActiveKey} activeKey={activeKey}>
        {rightLinks.map((item, index) => (
          <Nav.Item as="div" key={index} eventKey={item.eventKey + ""}>
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.title.toUpperCase()}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
}
