import "./App.css";
import "./styles/login.css"
import "./styles/videolist.css"
import "./styles/videohistory.css"
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
