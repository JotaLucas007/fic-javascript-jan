import { Header } from "./Components/Header"
import "./App.css";
import Banner from "./Components/Banner";


function App() {

  return (
    <>
      <div className="container">
        <Header title="Logo New" subTitle="Outros" />


        <h1>Seja bem vindo!</h1>

        <Banner />


      </div>
    </>
  )
}

export default App
