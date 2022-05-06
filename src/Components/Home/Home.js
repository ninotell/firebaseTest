import React from 'react'

import { Button, Container, Stack, Card, Col, Row } from 'react-bootstrap'

import firebaseApp from '../../credentials'
import { getAuth, signOut } from 'firebase/auth'
import AddNote from '../AddNote/AddNote'

const auth = getAuth(firebaseApp)



const Home = () => {

  const arrayTareas = [
    {
      id: 1,
      title: "Title notes 1",
      content: "Note 1"
    },
    {
      id: 2,
      title: "Title notes 2",
      content: "Note 1"
    },
    {
      id: 3,
      title: "Title notes 3",
      content: "Note 1"
    },
    {
      id: 2,
      title: "Title notes 2",
      content: "Note 1"
    },
    {
      id: 3,
      title: "Title notes 3",
      content: "Note 1"
    },
    {
      id: 2,
      title: "Title notes 2",
      content: "Note 1"
    },
    {
      id: 3,
      title: "Title notes 3",
      content: "Note 1"
    },
  ]


  return (
    <Container className='mx-auto'>
      <Button variant='danger' onClick={() => signOut(auth)}>Log Out</Button>
      <Stack direction="horizontal" className="my-5">
        <Row xs={1} md={3} className="g-4">
          {arrayTareas.map(n => (
            <Col key={n.id}>
              <Card style={{ borderRadius: "15px" }} className='m-2 mx-auto' >
                <Card.Body>
                  <Card.Title>{n.title}</Card.Title>
                  <Card.Text>
                    {n.content}
                  </Card.Text>
                  <Button variant="danger">Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Stack>
      <AddNote />
    </Container>
  )
}

export default Home