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

//console.log(Logement.pictures)

const ListeTags = Logement.tags;

const NbreEtoiles = parseInt(Logement.rating)
const ArrayStar =[1,2,3,4,5];

  return (
    <>
      <Header />
      
      <Slider picture = {Logement.cover} AllPictures={Logement.pictures}/>  

    <section className="Logement-div">
      <section className="description-and-tag">
        <div className="Title-div">
          <h1> {Logement.title}</h1>
          <p> {Logement.location} </p>
        </div>
        <div className="tag-div">
          {
            ListeTags.map((data, index) => {
              return (
                <Tag key ={`${index}`} tag={data} />
              );
            })
          }
        </div>      
      </section>
      
      <section className="Author-and-rating">
        <div className="Author-div">
            <p>{Logement.host.name}</p>
            <img src= {Logement.host.picture} alt="" />
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
    </section>
      <section className="CollapseSectionLogement">

      <Collapse key={`Desc${Logement.id}`} title="Description" content={Logement.description} />

      <Collapse key={`equip${Logement.id}`} title="Equipements" content={Logement.equipments} />

      </section>
      
      <Footer />
    </>
  )
}
