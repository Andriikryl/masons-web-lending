import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Printing from "./components/printing/Printing";
import RolString from "./components/rolString/RolString";
import Types from "./components/types/Types";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <RolString string="WE PRINTING ON" />
      <Printing />
      <RolString string=" Types of PRINTING" />
      <Types />
      <RolString string="OUR WORKS / OUR WORKS" />
    </main>
  );
}

export default App;
