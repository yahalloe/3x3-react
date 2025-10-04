import "./styles/globals.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="black-333">
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;
