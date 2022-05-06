import React from 'react'
import { Container, Stack, Form, Button, Row } from 'react-bootstrap'

const AddNote = () => {
    return (
        <Container  >
           <Stack className='px-4'>
                <h2 className='mx-auto'>Add note</h2>
                <Form>
                    <Stack className='col-md-5 mx-auto'>
                        <Form.Group className="mb-3" controlId="notesTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="notesContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" placeholder="Content" />
                        </Form.Group>
                    </Stack>
                    <Stack className='col-md-4 mx-auto' gap={3}>
                        <Button variant="success" type="submit">
                            Add note!
                        </Button>
                    </Stack>
                </Form>
            </Stack>
        </Container>
    )
}

export default AddNote