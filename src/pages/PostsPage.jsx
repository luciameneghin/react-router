import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PostsPage = () => {

  const [posts, setPosts] = useState(null)

  const baseApiUrl = 'http://localhost:3000'
  // console.log(baseApiUrl);

  const fetchData = () => {
    axios.get(`${baseApiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(e => {
        console.log('Errore di caricamento: ', e);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container my-5">
      <h1 className="text-center">Galleria dei POSTS</h1>
      <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center">
        {posts === null ?
          (<h2>Loading...</h2>) : (
            posts.map(post => (
              <div className="card border-0 bg-light">
                <li key={post.id} className="list-group-item col my-3 text-center mx-3">
                  <div className="mt-3">
                    <h5 className="mb-3">{post.title}</h5>
                    <img src={post.image} alt={post.title} className="img-fluid border border-3 border-dark" width='250' />
                  </div>
                  <p className="mt-3 mb-3 mx-3 fw-bold">{post.tags.join(', ')}</p>
                  <NavLink className="btn btn-dark text-light mb-3" to={`/post-detail/${post.id}`}>Vedi post</NavLink>
                </li>
              </div>
            ))
          )
        }

      </ul>
    </div>
  )
}

export default PostsPage
