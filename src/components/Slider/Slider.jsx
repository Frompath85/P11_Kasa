import "./Slider.css"
import ChevronNext from "../../assets/Chevron_next.png"
import ChevronBack from "../../assets/Chevron_back.png"
import exp from "../../assets/coverexemple.jpg"


export default function Slider(props) {
  return (
    <section className="Carrousel">
      <img className="LogementImage" src={props.picture} alt="" />
      <br />
      <button className="ChevronNext">
        <img src={ChevronNext} alt="chevron next" />
      </button>
      <button className="ChevronBack">
        <img src = {ChevronBack} alt="chevron back" />
      </button>
      <p className="NumberPage">1/4</p>      
      </section>
  )
}
