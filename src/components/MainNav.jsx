import { NavLink } from "react-router-dom"

const MainNav = () => {
  return (
    <div className="container">
      <nav className="d-flex justify-content-between list-unstyled fw-bold">
        <li>
          <NavLink to='/' className="text-decoration-none text-dark">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/posts' className="text-decoration-none text-dark">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className="text-decoration-none text-dark">
            About
          </NavLink>
        </li>
      </nav>
    </div>
  )
}

export default MainNav
