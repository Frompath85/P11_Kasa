import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Slider from "../../components/Slider/Slider";
import Tag from "../../components/Tag/Tag";
import StarActive from "../../assets/StarActive.png"
import StarInactive from "../../assets/StarInactive.png"
import Collapse from "../../components/collapse/collapse";
import "./Logement.css"

import logements from "/logements.json"
import { useParams } from "react-router-dom";


export default function Logement() {

     //je recupère le id de l'article selectionné
  const {id}= useParams();
  let Logement = logements.find(
    (data) => data.id === id
);

const ListeTags = Logement.tags;

const NbreEtoiles = parseInt(Logement.rating)
const ArrayStar =[1,2,3,4,5];

  return (
    <>
      <Header />
      <Slider picture = {Logement.cover}/>

      <section className="description">
        <div className="Title-div">
          <h1> {Logement.title}</h1>
          <p> {Logement.location} </p>
        </div>
        <div className="Author-div">
          <p>{Logement.host.name}</p>
          <img src= {Logement.host.picture} alt="" />
        </div>
      
      </section>
      
      <section className="tag-and-rating">

        <div className="tag-div">
          {
            ListeTags.map((data, index) => {
              return (
                <Tag key ={`${index}`} tag={data} />
              );
            })
          }
        </div>

        <div className="rating-div" >
          {          
            ArrayStar.map(ele =>{
              return ele <= NbreEtoiles ? <img key={ele} src = {StarActive} alt="star active" /> : <img key={ele} src ={StarInactive} alt="star inactive" />;
              }
            )
          }
        </div>

      </section>

      <section className="Collapse">
      <Collapse key={Logement.id} title={Logement.description} content={Logement.equipments} />
      </section>
      
      <Footer />
    </>
  )
}