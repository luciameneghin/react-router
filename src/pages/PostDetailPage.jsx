import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const PostDetail = () => {
  const baseApiUrl = 'http://localhost:3000'

  const { id } = useParams();
  const [post, setPost] = useState(null)
  const navigate = useNavigate()

  const fetchPost = () => {
    axios.get(`${baseApiUrl}/posts/${id}`)
      .then(res => {
        console.log(res.data);
        setPost(res.data)
      })
      .catch(e => {
        console.log('Il post non è satto caricato correttamente: ', e);
      })
  }

  const handleRemovePost = () => {
    axios.delete(`${baseApiUrl}/posts/${id}`)
      .then(res => {
        navigate('/posts')
      })
      .catch(e => {
        console.log(e);
      }
      )
  }

  useEffect(() => {
    fetchPost()
  }, [])


  return (
    <>
      <div className="container my-3">
        <div className="card">
          <div className="card-body">
            {post === null ?
              (<h2>Loading...</h2>) : (
                <div>
                  <h1 className="text-center fw-bold">{post.title}</h1>
                  <img src={post.image} alt={post.title} className="img-fluid mx-auto d-block border border-5 border-dark my-3" />
                  <p className="text-justify">Contenuto: <br />{post.content}</p>
                  <p className="text-justify">Tags: <br />{post.tags.join(', ')}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-info text-white"
                      onClick={() => navigate(-1)}>
                      Pagina precedente
                    </button>
                    <button className="btn btn-danger text-white"
                      onClick={handleRemovePost}>
                      Elimina post
                    </button>
                  </div>
                </div>

              )
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail
