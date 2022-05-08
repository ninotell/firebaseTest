import React from 'react'
import "./styles.css"
import { Button } from 'react-bootstrap'
import firebaseApp from '../../credentials'
import { getFirestore, updateDoc, doc } from 'firebase/firestore'

const firestore = getFirestore(firebaseApp)

const NoteItem = ({ note, userEmail, setUserNotes, userNotes }) => {

  const handleDeleteNote = async (noteId) => {
    const newNotesArray = userNotes.filter(n => n.id !== noteId)
    const documentReference = doc(firestore, `users/${userEmail}`)
    updateDoc(documentReference, { notes: [...newNotesArray] })
      .then(setUserNotes(newNotesArray))
      .catch(e => console.log(e))
  }

  return (
    <div className='note-item' >
      <span className='note-title'>{note.title}</span>
      <span className='note-content'>
        {note.content}
      </span>
      <button className='note-item-button' onClick={() => handleDeleteNote(note.id)}>Delete</button>
    </div>
  )
}

export default NoteItem