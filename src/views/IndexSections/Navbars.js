import React from "react";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Navbars() {
  return (
    <div className="section section-navbars">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path3.png").default}
      />
      <Container id="menu-dropdown">
        <Row>
        </Row>
        <h3 className="title mb-3">Navigation</h3>
      </Container>
      <div id="navbar">
        <div className="navigation-example">
          <Navbar className="navbar-transparent" expand="lg">
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                  Transparent
                </NavbarBrand>
                <button className="navbar-toggler" aria-expanded={false}>
                  <span className="navbar-toggler-bar bar1" />
                  <span className="navbar-toggler-bar bar2" />
                  <span className="navbar-toggler-bar bar3" />
                </button>
              </div>
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-facebook-square" />
                      Facebook
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-twitter" />
                      Twitter
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fab fa-instagram" />
                      Instagram
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          {/* End Navbar Transparent*/}
        </div>
      </div>
    </div>
  );
}
