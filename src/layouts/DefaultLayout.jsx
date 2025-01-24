import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"

const DefaultLayout = () => {
  return (
    <>
      <header>
        <MainNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container d-flex align-items-end justify-content-center">
          <p>Copyright®</p>
        </div>
      </footer>
    </>
  )
}

export default DefaultLayout
