import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useNewUsersContext } from "../../Context/NewUsersContext";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

function Header() {
  const { setCurrentUser } = useNewUsersContext();
  const navigate = useNavigate();

  const loggedUser = localStorage.getItem("user");

  function handleLogOut() {
    localStorage.clear();
    setCurrentUser({});
    navigate("/");
  }

  return (
    <nav className="Header">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="brand">
            <Link to={"/"} className="nav-link">
              Library
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link as="li" href="#home">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </Nav.Link>
            {loggedUser && (
              <>
                <Nav.Link as="li" href="#home">
                  <Link to={"/add-book"} className="nav-link books">
                    Add Book 📕
                  </Link>
                </Nav.Link>
              </>
            )}

            <Nav.Link as="li" href="#search" className="move-right">
              <Link to={"/search"} className="nav-link">
                <SearchIcon className="search-icon" />
              </Link>
            </Nav.Link>

            {!loggedUser && (
              <>
                <Nav.Link as="li" href="#login">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </Nav.Link>

                <Nav.Link as="li" href="#sign-up">
                  <Link to={"/sign-up"} className="nav-link">
                    Sign-up
                  </Link>
                </Nav.Link>
              </>
            )}

            {loggedUser && (
              <>
                <Nav.Link as="li" href="#library">
                  <Link to={"/library"} className="nav-link library">
                    Library
                  </Link>
                </Nav.Link>

                <Nav.Link as="li" href="#home">
                  <Link to={"/my-books"} className="nav-link books">
                    My Books 📚
                  </Link>
                </Nav.Link>

                <Nav.Link as="li" href="#home" onClick={handleLogOut}>
                  <Link to={"/"} className="nav-link">
                    Log-out
                  </Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Header;
