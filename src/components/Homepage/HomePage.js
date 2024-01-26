import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authActions } from '../store/auth';

function HomePage() {
    const isAuth=useSelector(state=>state.auth.isAuthenticated)
    const dispatch=useDispatch()
    console.log(isAuth)
    const logoutHandler=()=>{
        dispatch(authActions.logout())
    }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Mail Box Client</Navbar.Brand>
          <Nav className="me-auto">
           { !isAuth && <Nav.Link href="/home">Home</Nav.Link>}
            { !isAuth && <Nav.Link href="/auth">SignUp</Nav.Link>}
           
            { isAuth && <button onClick={logoutHandler}>Logout</button>}
          </Nav>
        </Container>
      </Navbar>
      <br />
      

      <br />
    
    </>
  );
}

export default HomePage;