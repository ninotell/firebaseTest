import React from 'react'
import { Container, Stack, Form, Button } from 'react-bootstrap'
import firebaseApp from '../../credentials'
import { getFirestore, doc, updateDoc } from 'firebase/firestore'
const firestore = getFirestore(firebaseApp)

const AddNote = ({ setUserNotes, userNotes, userEmail }) => {

    const handleAddNote = async (e) => {
        e.preventDefault()
        const newNoteTitle = e.target.noteTitle.value
        const newNoteContent = e.target.noteContent.value
        const newNotesArray = [...userNotes, {
            id: new Date(),
            title: newNoteTitle,
            content: newNoteContent
        }]
        const documentReference = doc(firestore, `users/${userEmail}`)
        updateDoc(documentReference, { notes: newNotesArray })
            .then(setUserNotes(newNotesArray))
            .catch(e => console.log(e))

    }

    return (
        <Container  >
            <Stack className='px-4'>
                <h2 className='mx-auto'>Add note</h2>
                <Form onSubmit={handleAddNote}>
                    <Stack className='col-md-5 mx-auto'>
                        <Form.Group className="mb-3" controlId="noteTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="noteContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" placeholder="Content" />
                        </Form.Group>
                    </Stack>
                    <Stack className='col-md-4 mx-auto' gap={3}>
                        <Button
                            variant="success"
                            type="submit">
                            Add note!
                        </Button>
                    </Stack>
                </Form>
            </Stack>
        </Container>
    )
}

export default AddNote