import { Outlet } from "react-router-dom"
import MainNav from "../components/MainNav"

const DefaultLayout = () => {
  return (
    <>
      <header className="bg-dark py-3">
        <MainNav />
      </header>
      <main className="bg-light py-5">
        <Outlet />
      </main>
      <footer className="bg-dark py-5">
        <div className="container d-flex align-items-end justify-content-center text-light">
          <p>Copyright®</p>
        </div>
      </footer>
    </>
  )
}

export default DefaultLayout
