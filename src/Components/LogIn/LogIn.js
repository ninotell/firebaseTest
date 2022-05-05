import React, { useState } from 'react'
import { Stack, Container, Form, Button } from 'react-bootstrap'


const LogIn = () => {
    const [isRegistering, setIsRegistering] = useState(true)

    return (
        <Container>
            <Stack gap={3}>
                <h1>{isRegistering ? "Sign In" : "Log In"}</h1>
                <Form>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Stack gap={3}>
                        <Stack className='mx-auto' direction="horizontal" gap={2}>
                            <Button variant="outline-primary" type="submit">
                                Submit
                            </Button>
                            <Button variant="success" type="submit">
                                {isRegistering ? "Sign In" : "Log In"}
                            </Button>
                            <Button variant="primary" type="submit">
                                Log In with Google
                            </Button>
                        </Stack>
                        <Button variant="primary" type="submit">
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