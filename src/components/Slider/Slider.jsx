import "./Slider.css"
import ChevronNext from "../../assets/Chevron_next.png"
import ChevronBack from "../../assets/Chevron_back.png"
import exp from "../../assets/coverexemple.jpg"
import { useState } from 'react'


export default function Slider(props) {
 // console.log(props.AllPictures)
  const NbrPictures = props.AllPictures.length;
  console.log(NbrPictures);

  const [currentIndex, SetCurrentIndex] = useState(0)

  const NextPicture = () => {
    SetCurrentIndex(currentIndex + 1)
    if(currentIndex == NbrPictures - 1)
       SetCurrentIndex(0);
  }
  const PreviousPicture = () => {
    SetCurrentIndex(currentIndex - 1) 
    if(currentIndex == 0)
      SetCurrentIndex(NbrPictures -1)
  }

  return (
    <section className="Carrousel">
      { NbrPictures == 1 ?
      <>
           <img className="LogementImage" src={props.AllPictures[currentIndex]} alt="Appartement" />
           <p className="NumberPage"> {currentIndex + 1} / {NbrPictures}</p> 
        </>  
         : 
        <>
           <img className="LogementImage" src={props.AllPictures[currentIndex]} alt="Appartement" />
           <br />
           <button className="ChevronNext" onClick={NextPicture}>
             <img src={ChevronNext} alt="chevron next" />
           </button>
           <button className="ChevronBack" onClick={PreviousPicture}>
             <img src = {ChevronBack} alt="chevron back" />
           </button>
           <p className="NumberPage"> {currentIndex + 1} / {NbrPictures}</p>  
        </>
      }
          
      </section>
  )
}
