import "../styles/globals.css";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Home() {
  return (
      <div>
        <Header />
        <div className="black-333">
          <Body />
          <Footer />
        </div>
      </div>
  );
}
