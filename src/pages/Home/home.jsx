import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Card from "../../components/Card/Card";
import "./Home.css";
import logements from "/logements.json"
import sourcebanner from "../../assets/logo banner.png"
import { Link } from "react-router-dom";

export default function Home() {

  const titrebanner = "Chez vous, partout et ailleurs";

  return (
    <>
      <Header />
      <Banner src={sourcebanner} title={titrebanner} />
      <section className="SectionCard">
        { 
          logements.map(data=>{
            return (
              <Card key={data.id} id={data.id} cover={data.cover} title={data.title}/>
               );
          })
        }
         
      </section>
      <Footer />
    </>
  );
}
