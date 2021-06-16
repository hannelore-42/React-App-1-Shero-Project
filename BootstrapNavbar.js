import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import About from './About';
import Sources from './Sources';
import App from '../App';
import './navbar.css'


class BootstrapNavbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#">Shero Project</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/App">Home</Nav.Link>
                                        <Nav.Link href="/About">About</Nav.Link>
                                        <Nav.Link href="/Sources">Sources</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            
                            <br />
                            <Switch>
                                <Route path="/About">
                                    <About />
                                </Route>
                                <Route path="/Sources">
                                    <Sources />
                                </Route>
                                <Route path="../App">
                                    <App />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}
export default BootstrapNavbar;