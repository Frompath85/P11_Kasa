import "./Card.css"

export default function Card(props) {
  return (
    <figure className="Card">
        <img src={props.cover} alt= {props.title} />
        <figcaption > {props.title} </figcaption>
    </figure>
  )
}
