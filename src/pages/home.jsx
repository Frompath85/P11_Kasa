
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";

export default function Home() {

  const sourcebanner ="./src/assets/logo banner.png";
  const titrebanner = "Chez vous, partout et ailleurs"

  return (
    <>
      <Header />
      <Banner src={sourcebanner} title ={titrebanner}/>
      <h2> page d'accueil</h2>
      <Footer/>
    </>
  );
}
