import "./banner.css"

export default function Banner(props) {
  return (
    <section className="banner">
        <img src={props.src} alt="image banner" />
        <h1> {props.title} </h1>
    </section>
  )
}
