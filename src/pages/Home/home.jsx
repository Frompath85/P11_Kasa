import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Card from "../../components/Card/Card";
import "./Home.css";
import logements from "/logements.json"

export default function Home() {
  const sourcebanner = "./src/assets/logo banner.png";
  const titrebanner = "Chez vous, partout et ailleurs";

  return (
    <>
      <Header />
      <Banner src={sourcebanner} title={titrebanner} />
      <section className="SectionCard">
        { 
          logements.map(data=>{
            return (
              <Card key={data.id} cover={data.cover} title={data.title}/>
              );
          })
        }
         
      </section>
      <Footer />
    </>
  );
}
