import {card, content} from "./Card.module.css";
import coffeeImage from "../assets/new.jpg";

export default function Card() {
  return (
    <div className={card}>
      <div className={content}>
        <h2>FRESH COFFEE</h2>
        <h1>WORTH DRINKING</h1>

        <p>
          At CoffeeVerse, we believe every cup tells a story. Our premium coffee is made from handpicked beans, roasted with care, and brewed to perfection to bring out rich flavors and irresistible aromas. From classic espresso to creamy cappuccinos, we offer a variety of beverages crafted to satisfy every coffee lover. Step into a warm and welcoming atmosphere where great coffee, comfort, and memorable moments come together
        </p>
        <button>Visit Us Today!</button>
       
      </div>

      <div>
        <img src={coffeeImage} alt="Coffee" />
      </div>
      
    </div>
  );
}