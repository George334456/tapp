import React from "react"
import { DropdownItem, Nav, Navbar, NavDropdown} from "react-bootstrap"
import { Link, Route } from "react-router-dom"

const CustomNavItem = ({ href, children }) => (
    <Nav.Link href={href}>{children}</Nav.Link>
)

const TappNavItems = () => (
    <Nav className="mr-auto">
        <CustomNavItem href="/tapp/positions">Positions</CustomNavItem>
        <CustomNavItem href="/tapp/applicants">Applicants by Course</CustomNavItem>
        <CustomNavItem href="/tapp/assigned">All Assigned</CustomNavItem>
        <CustomNavItem href="/tapp/unassigned">All Unassigned</CustomNavItem>
        <CustomNavItem href="/tapp/summary">Summary</CustomNavItem>
    </Nav>
)

const CpNavItems = () => <Nav className="mr-auto" />

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <Route path="/tapp" render={() => <Link to="/cp">TAPP</Link>} />
                    <Route path="/cp" render={() => <Link to="/tapp/positions">CP</Link>} />
                </Navbar.Brand>
                <Route path="/tapp" component={TappNavItems} />
                <Route path="/cp" component={CpNavItems} />
                <Nav>
                    <NavDropdown title="Tools" id="tools-dropdown">
                        <DropdownItem href="/tapp/positions/new">New Position</DropdownItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}

export default Header
