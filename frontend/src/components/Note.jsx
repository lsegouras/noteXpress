import PropTypes from 'prop-types'
import '../styles/Note.css'
import { useState } from 'react'
import Modal from './Modal'

function Note({ note, onDelete, onUpdate }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString('pt-BR')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleUpdate = (e) => {
    e.preventDefault()
    onUpdate(note.id, title, content)
    closeModal()
  }
  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      <div className="note-buttons">
        <button className="delete-button" onClick={() => onDelete(note.id)}>
          Deletar
        </button>
        <button className="edit-button" onClick={openModal}>
          Alterar
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleUpdate}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
      />
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default Note
