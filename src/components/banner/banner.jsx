import "./banner.css"

export default function Banner(props) {
  return (
    <section className="banner">
        <img src={props.src} alt="image banner" />
        {
          props.title ? <h1>{props.title} </h1>  : <h1> </h1> 
        }  
    </section>
  )
}
