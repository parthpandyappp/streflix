import "./App.css";
import { Routes } from "./routes/Routes"
import { Nav, Footer } from "./components"

function App() {
  return (
    <>
      <Nav />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
