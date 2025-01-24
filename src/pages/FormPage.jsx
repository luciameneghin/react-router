import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const initialFormData = {
    name: '',
    image: '',
    content: '',
    tags: []
  }

  const baseApiUrl = 'http://localhost:3000'
  const [formData, setFormData] = useState(initialFormData)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const tagsArr = formData.tags.split('|').map(item => item.trim())

    const newPost = { ...formData, tags: tagsArr }

    axios.post(`${baseApiUrl}/posts`, newPost)
      .then(res => {
        setFormData(initialFormData)
        navigate('/posts')
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }


  return (
    <div className="container">
      <div className="row row-cols-3 d-flex justify-content-center">
        <h1 className="d-flex align-items-center">Inserisci le info per il nuovo post </h1>

        <form action="" className="card my-3" onSubmit={handleSubmit}>

          {/* titolo */}
          <div className="form-group mt-3">
            <h5>Scrivi il titolo del nuovo form</h5>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Scrivi il titolo"
              value={FormData.title}
              onChange={handleChange}
            />
          </div>

          {/* immagine */}
          <div className="form-group mt-3">
            <h5>Inserisci l'url dell'immagine</h5>
            <input
              type="text"
              name="image"
              className="form-control"
              placeholder="Inserisci l'url"
              value={FormData.image}
              onChange={handleChange}
            />
          </div>

          {/* contenuto */}
          <div className="form-group mt-3">
            <h5>Inserisci la descrizione del tuo nuovo post</h5>
            <textarea
              type="text"
              name="content"
              className="form-control"
              placeholder="Inserisci la descrizione"
              value={FormData.content}
              onChange={handleChange}
            />
          </div>

          {/* tags */}
          <div className="form-group mt-3">
            <h5>Inserisci dei tags per il tuo nuovo post</h5>
            <input
              type="text"
              name="tags"
              className="form-control"
              placeholder="Inserisci i tag separati da virgola (es. tag1, tag2, ...)"
              value={FormData.tags}
              onChange={handleChange}
            />
          </div>

          <div className="text-center">
            <button className="btn btn-dark text-light m-3">
              Aggiungi post
            </button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default FormPage
