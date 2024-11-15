import { useState, useEffect } from 'react'
import api from './../api'
import Note from '../components/Note'
import '../styles/Home.css'

function Home() {
  const [notes, setNotes] = useState([])
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    getNotes()
  }, [])

  const getNotes = () => {
    api
      .get('/api/notes/')
      .then((res) => res.data)
      .then((data) => {
        setNotes(data)
        console.log(data)
      })
      .catch((err) => alert(err))
  }

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert('Note deleted!')
        else alert('Failed to delete note.')
        getNotes()
      })
      .catch((error) => alert(error))
  }

  const createNote = (e) => {
    e.preventDefault()
    api
      .post('/api/notes/', { content, title })
      .then((res) => {
        if (res.status === 201) alert('Note created!')
        else alert('Failed to make note.')
        getNotes()
      })
      .catch((err) => alert(err))
  }

  const updateNote = (id, newTitle, newContent) => {
    api
      .put(`/api/notes/update/${id}/`, { title: newTitle, content: newContent })
      .then((res) => {
        if (res.status === 200) {
          alert('Note updated!')
          getNotes()
        } else {
          alert('Failed to update note.')
        }
      })
      .catch((err) => alert(err))
  }

  return (
    <div>
      <div>
        <h2>Notas</h2>
        {notes.map((note) => (
          <Note
            note={note}
            onDelete={deleteNote}
            onUpdate={updateNote}
            key={note.id}
          />
        ))}
      </div>
      <h2 id="createNoteHeader">Criar Nota</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Título:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Conteúdo:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          rows="10"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  )
}

export default Home
