import "../styles/globals.css";
import { Header } from "../components/Header";
import { AboutmeBody } from "../components/AboutmeBody";
import { AboutmeFooter } from "../components/AboutmeFooter";

export function About() {
  return (
    <div>
      <Header />
      <div className="black-333">
        <AboutmeBody />
        <AboutmeFooter />
      </div>
    </div>
  );
}
