import React, { useEffect, useState } from 'react'
import "./styles.css"

import { Button } from 'react-bootstrap'

import firebaseApp from '../../credentials'
import { getAuth, signOut } from 'firebase/auth'
import AddNote from '../AddNote'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import NoteItem from '../NoteItem'

const firestore = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)



const Home = ({ userEmail }) => {

  const [userNotes, setUserNotes] = useState([])

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
    }
  ]
  async function searchDocumentOrCreateDocument(documentId) {
    // create reference to the document
    const documentReference = doc(firestore, `users/${documentId}`)

    // search document
    const userDocument = await getDoc(documentReference);

    // search if exists
    if (userDocument.exists()) {
      // if exists
      const docInfo = userDocument.data()
      return docInfo.notes;
    } else

    // if not exists
    {
      await setDoc(documentReference, {
        notes: [...arrayTareas]
      });
      const userDocument = await getDoc(documentReference);
      const docInfo = userDocument.data()
      return docInfo.notes;
    }
  }

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await searchDocumentOrCreateDocument(userEmail);
      setUserNotes(fetchedNotes)
    }
    fetchNotes();
  }, [])

  return (
    <div className='home'>
      <Button variant='danger' onClick={() => signOut(auth)}>Log Out</Button>
      <div className='notes-container'>
        {userNotes.map(n => (
          <NoteItem
            key={n.id}
            userEmail={userEmail}
            userNotes={userNotes}
            setUserNotes={setUserNotes}
            note={n} />
        ))}
      </div>
      <AddNote
        userEmail={userEmail}
        userNotes={userNotes}
        setUserNotes={setUserNotes} />
    </div>
  )
}

export default Home