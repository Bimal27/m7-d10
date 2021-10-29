
import {Navbar,Container, Nav, NavDropdown,Form,FormControl} from 'react-bootstrap'

const MyNavBar = () => {
    return(
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#4d4a4a'}} variant="dark">
            <Container>
            <Navbar.Brand href="#home" ><img src="https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/OPENWEATHER-300x136.png"  style={{height:'48px', width:'100px',backGround:'black'}} alt='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Form className="d-flex" >
                    <FormControl
                    style={{backgroundColor:"#4d4a4a" ,borderRadius:'50px'}}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                   
                </Form>
                <Nav className="me-auto">
                
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Guide</Nav.Link>
                <Nav.Link href="#deets">Api</Nav.Link>
                <Nav.Link href="#deets">Pricing</Nav.Link>
                <Nav.Link href="#deets">Map</Nav.Link>
                <Nav.Link href="#deets">Our Initiatives</Nav.Link>
                <Nav.Link href="#deets">Partners</Nav.Link>
                <Nav.Link href="#deets">Blog</Nav.Link>
                <NavDropdown title="Bimal..." id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Support" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default MyNavBar