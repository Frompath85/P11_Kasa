import { NavLink, Link } from 'react-router-dom'
import Logo from "../../assets/LOGO.png"
import "./header.css"

export default function Header() {
  // Nav et NavLink
  return (
    <header>
       <Link to="/"><img src={Logo} alt="logo de kasa" /></Link>
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/about">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
