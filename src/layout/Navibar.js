import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';
import './Navibar.css';

const Navibar = () => {

    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //     <div className="container">
        //         <NavLink className="navbar-brand" to="/">React User</NavLink>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        <div>
            <Navbar bg="dark" variant="dark">
                <Nav>
                    <Navbar.Brand className="mx-4">
                        React
                    </Navbar.Brand>
                    <NavDropdown title="Hooks" className="nav-item">
                        <NavLink className="nav-link text-dark mx-3" exact="true" to="/">useState 1</NavLink>
                        <NavLink className="nav-link text-dark mx-3" exact="true" to="StateTut2">useState 2</NavLink>
                        <NavLink className="nav-link text-dark mx-3" exact="true" to="/ReducerTutorial">useReducer</NavLink>
                        <NavLink className="nav-link text-dark mx-3" exact="true" to="/EffectTutorial">useEffect</NavLink>
                        <NavLink className="nav-link text-dark mx-3" exact="true" to="/RefTutorial">useRef</NavLink>
                        <NavLink className="nav-link text-dark mx-3" exact="true" to="/LayoutEffectTutorial">useLayoutEffect</NavLink>
                        {/* <NavLink className="nav-link text-dark mx-3" exact="true" to="/ImperativehandleTutorial">useImperativeHandle</NavLink> */}
                        <NavLink className="nav-link text-dark mx-3" exact="true" to="/ContextTutorial">useContext</NavLink>
                        {/* <NavLink className="nav-link text-dark mx-3" exact="true" to="/LayoutEffectTutorial">useMemo</NavLink>
                        <NavLink className="nav-link text-dark mx-3" exact="true" to="/LayoutEffectTutorial">useContext</NavLink> */}

                    </NavDropdown>

                    <NavLink className="nav-link" exact="true" to="/Todo">To-Do App</NavLink>
                    {/* <NavLink className="nav-link" exact="true" to="/portfolio/Portfolio">Portfolio</NavLink> */}
                    <NavLink className="nav-link" exact="true" to="/Questions">Q & A</NavLink>

                </Nav>
            </Navbar>
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact="true" to="/">useState 1</NavLink>
                        </li>
                        <li className="nav-item">
                            'react-scripts' is not recognized as an internal or external command,
operable program or batch file.
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact="true" to="/ReducerTutorial">useReducer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact="true" to="/EffectTutorial">useEffect</NavLink>
                        </li>
                    </ul> */}
        </div>
        //     </div>
        // </nav>
    );

};

export default Navibar;