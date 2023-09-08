import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { Link } from "react-router-dom";
import "./NotFoundPage.css"


export default function NotFound() {
  return (
    <>
    <Header />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="LinkHomePage" to="/" >Retourner sur la page d’accueil</Link>
    <Footer/>
  </>
    
  )
}
