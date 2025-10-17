import { Navbar, Nav, Form, FormControl, Button, Spinner, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, searchSongs, clearSearchResults } from '../redux/reducer/searchReducer';

const Sidebar = (props) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.search);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(setSearchQuery(query));
      dispatch(searchSongs(query));
    }
  };

  return (
    <aside className="col col-2">
      <Navbar expand="md" className="flex-column fixed-left h-100">
        <Container className="flex-column align-items-start h-100 d-flex">
          {/* Logo e pulsante hamburger */}
          <div className="d-flex justify-content-between w-100">
            <Link className="navbar-brand" to="/">
              <img
                src={props.logoImage}
                alt="Spotify Logo"
                width="131"
                height="40"
              />
            </Link>
            <Navbar.Toggle aria-controls="sidebar-nav" className="d-md-none" />
          </div>
          
          {/* Link di navigazione e barra di ricerca */}
          <Nav className="flex-column w-100 mt-3">
            <Nav.Item className="my-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-item nav-link d-flex align-items-center ${isActive ? "active" : ""}`
                }
                onClick={() => dispatch(clearSearchResults())}
              >
                <FaHome className="fs-3"/>&nbsp; Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/library"
                className={({ isActive }) =>
                  `nav-item nav-link d-flex align-items-center ${isActive ? "active" : ""}`
                }
              >
                <FaBookOpen className="fs-3" />&nbsp; La tua Libreria
              </NavLink>
            </Nav.Item>
            <Nav.Item className="mt-3">
              <Form onSubmit={handleSearchSubmit}>
                <div className="d-flex">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={query}
                    onChange={handleSearchChange}
                    disabled={loading}
                    className="text-black bg-white"
                  />
                  <Button 
                    variant="outline-secondary" 
                    type="submit" 
                    disabled={loading}
                    className="d-flex align-items-center justify-content-center"
                  >
                    {loading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      <FaSearch />
                    )}
                  </Button>
                </div>
              </Form>
            </Nav.Item>
          </Nav>
          
          {/* buttons bottom sidebar */}
          <div className="nav-btn d-flex flex-column mx-auto mt-3 mb-3">
            <Button className="signup-btn mb-2" type="button">
              Sign Up
            </Button>
            <Button className="login-btn mb-2" type="button">
              Login
            </Button>
            <div>
              <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
            </div>
          </div>
        </Container>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
