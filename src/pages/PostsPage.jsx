import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="card">
        <div className="card-body">
          <h1 className="text-center">Posts</h1>
          <ul className="list-group">
            {posts === null ?
              (<h2>Loading...</h2>) : (
                posts.map(post => (
                  <li key={post.id} className="list-group-item d-flex justify-content-between">
                    {post.title}
                    <Link className="btn btn-info text-white" to={`/post-detail/${post.id}`}>Vedi post</Link>
                  </li>
                ))
              )
            }

          </ul>
        </div>
      </div>
    </div>
  )
}

export default PostsPage
