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
      <RolString />
      <Printing />
      <RolString />
      <Types />
    </main>
  );
}

export default App;
