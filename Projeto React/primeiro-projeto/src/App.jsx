import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Count from "./Components/Count";
import ImgCard from "./Components/ImgCard";
import TextComponents from "./Components/Texto";
import img1 from "./assets/img-1.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/img-3.jpg";
import "./App.css";

function App() {

  return (
    <>
      <div className="container">
        <Header title="Olá" subTitle="Outros" />
        <Banner>
          <h1>Seja bem vindo!</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>

        <TextComponents />

        <Count />

        <div>
          <ImgCard caption="Uma imagem legal" newImg={img1} />
          <ImgCard caption="Uma imagem legal" newImg={img2} />
          <ImgCard caption="Uma imagem legal" newImg={img3} />
        </div>


        <Card />
      </div>
    </>
  )
}

export default App
