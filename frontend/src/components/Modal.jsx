// src/components/Modal.jsx
import PropTypes from 'prop-types'
import '../styles/Modal.css'

function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  setTitle,
  content,
  setContent,
}) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Nota</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="modal-title">Título:</label>
          <br />
          <input
            type="text"
            id="modal-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label htmlFor="modal-content">Conteúdo:</label>
          <br />
          <textarea
            id="modal-content"
            value={content}
            rows="10"
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
          <br />
          <div className="modal-buttons">
            <button className="modal-submit-button" type="submit">
              Salvar Alterações
            </button>
            <button
              className="modal-cancel-button"
              type="button"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
}

export default Modal
