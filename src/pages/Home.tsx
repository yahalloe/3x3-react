import "../styles/globals.css";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Others } from "../components/Others";
import { prefetchImages } from "../components/utils/prefetchImages";

export function Home() {
  const handleOthersHover = () => {
    const imageModules = import.meta.glob("/public/assets/*.{png,jpg,jpeg,webp}", { eager: true });
    const imagePaths = Object.keys(imageModules).map(path => path.replace("/public", "")); 
    prefetchImages(imagePaths);
  };

  return (
    <div>
      <Header title="YAHALLO'S 3X3" />
      <div className="black-333">
        <Body />
        <div onMouseEnter={handleOthersHover}>
          <Others />
        </div>
        <Footer />
      </div>
    </div>
  );
}