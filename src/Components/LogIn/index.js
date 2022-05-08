import React, { useState } from 'react'
import { Stack, Container, Form, Button } from 'react-bootstrap'

import firebaseApp from '../../credentials'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithRedirect,
    GoogleAuthProvider
} from "firebase/auth"
import { async } from '@firebase/util'
const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()


const LogIn = () => {
    const [isRegistering, setIsRegistering] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        const email = e.target.formBasicEmail.value;
        const password = e.target.formBasicPassword.value;
        if (isRegistering) {
            const user = await createUserWithEmailAndPassword(auth, email, password)
        } else {
            const user = await signInWithEmailAndPassword(auth, email, password)
        }

    }

    return (
        <Container>
            <Stack className='px-4' gap={3}>
                <h1 className='mx-auto'>{isRegistering ? "Sign In" : "Log In"}</h1>
                <Form onSubmit={submitHandler}>
                    <Stack className='col-md-5 mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Stack>
                    <Stack className='col-md-4 mx-auto' gap={3}>
                        <Button variant="success" type="submit">
                            {isRegistering ? "Sign In" : "Log In"}
                        </Button>
                        <Button
                            variant="primary"
                            type="button"
                            onClick={() => signInWithRedirect(auth, googleProvider)}
                        >
                            Log In with Google
                        </Button>
                        <Button variant="outline-secondary" type="button" onClick={() => setIsRegistering(prev => !prev)}>
                            {isRegistering ? "Already have an account? Log In" : "Not have an account yet? Register"}
                        </Button>
                    </Stack>
                </Form>
            </Stack>
        </Container>
    )
}

export default LogIn