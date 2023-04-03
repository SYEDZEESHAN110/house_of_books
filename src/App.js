import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookshelf" viewBox="0 0 16 16">
              <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z"/>
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand href="#home">House of Books</Navbar.Brand>
            </Nav>
            <Nav>
              <Nav.Link href="#login">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <form className='mt-3' style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "400px", margin: "0 auto"}}>
          <input type="text" placeholder="Search your Book" style={{padding: "0.5rem",borderRadius: "0.25rem 0 0 0.25rem"}}/>
          <button type="submit" style={{ backgroundColor: "blue", color: "white", padding: "0.5rem 1rem",borderRadius: "0 0.25rem 0.25rem 0",}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
              <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
          </button>
        </form>
        <Row className='m-5'>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='m-5'>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={2} className='px-4'>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/100/120" />
              <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                  Book Description
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>

      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          © 2023 House of Books by CONTOUR
        </div>
      </footer>
    </div>
  );
}

export default App;