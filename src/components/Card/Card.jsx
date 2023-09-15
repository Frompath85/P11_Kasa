import { Link } from "react-router-dom"
import "./Card.css"

export default function Card(props) {
  return (
    // <Link to={`/Logement/${props.id}`}>
    <Link to={`/Logement/${props.id}`}>

      <figure className="Card">
          <div className="FondGris" > </div>
          <img src={props.cover} alt= {props.title} />
          <figcaption > {props.title} </figcaption>
      </figure>
    </Link>
  )
}
