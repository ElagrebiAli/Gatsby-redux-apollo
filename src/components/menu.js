import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem ,Row } from 'reactstrap';

import searchImage from '../images/glass.svg'
import profileImage from '../images/profile.svg'
import brandImage from '../images/OptimalLOGO.svg'

    export default class Menu extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
              <Navbar fixed="top" light expand="md" style={{maxWidth:"1200px",margin:"0 auto"}}>
                <NavbarBrand href="/"><img src={brandImage} style={{width:"150px"}}/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar >
                  <Nav className="ml-auto" navbar style={{marginRight:"100px"}}>
                    <NavItem style={{marginRight:"50px"}}>
                      <NavLink href="/components/">ACCUEIL</NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:"50px"}}>
                      <NavLink href="https://github.com/reactstrap/reactstrap">SOLUTIONS</NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:"50px"}}>
                      <NavLink href="https://github.com/reactstrap/reactstrap">SHOP</NavLink>
                    </NavItem>
                    <NavItem style={{marginRight:"50px"}}>
                      <NavLink href="https://github.com/reactstrap/reactstrap">CONTACT</NavLink>
                    </NavItem>
                     <NavItem  className="d-block d-sm-none">
                         <NavLink href=""><img src={profileImage} style={{width:"20px"}}/></NavLink>
                     </NavItem>
                     <NavItem  className="d-block d-sm-none">
                         <NavLink href=""><img src={searchImage} style={{width:"20px"}}/></NavLink>
                     </NavItem>
                  </Nav>
                </Collapse>
                 <Nav className="d-sm-none d-md-block" style={{marginRight:"100px"}}>
                     <NavItem >
                         <NavLink href=""><img src={profileImage} style={{width:"20px"}}/></NavLink>
                     </NavItem>
                     <NavItem>
                         <NavLink href=""><img src={searchImage} style={{width:"20px"}}/></NavLink>
                     </NavItem>
                 </Nav>
              </Navbar>

          );
        }
      }