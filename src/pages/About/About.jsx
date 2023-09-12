import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";
import sourcebanner from "../../assets/banner AboutPage.png";

export default function About() {

  const DataCollapse = [
    { id: "1",
      title: "fiabilite",
      content:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    { id :"2",
      title: "respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    { id :"3",
      title: "service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    { id :"4",
      title: "securite",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
  ];

  return (
    <>
      <Header />
      <Banner src={sourcebanner} />
      <section className="CollapseSection">
        {DataCollapse.map((data) => {
          return (
            <Collapse key={data.id} title={data.title} content={data.content} />
          );
        })}
      </section>
      <Footer />
    </>
  );
}
