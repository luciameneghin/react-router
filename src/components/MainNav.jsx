import { NavLink } from "react-router-dom"

const navItems = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/posts', name: 'Posts' },
  { id: 3, path: '/about', name: 'About' },
];

const MainNav = () => {
  return (
    <div className="container">
      <nav className="d-flex justify-content-between list-unstyled fw-bold">
        {navItems.map(item => (
          <li key={item.id}>
            <NavLink to={item.path} className="text-decoration-none text-dark">
              {item.name}
            </NavLink>
          </li>

        ))}
      </nav>
    </div>
  )
}

export default MainNav
