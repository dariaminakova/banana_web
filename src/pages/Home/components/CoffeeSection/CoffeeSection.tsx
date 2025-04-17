import coffeeJar from "../../../../assets/coffee.png";
import "./CoffeeSection.css";

export default function CoffeeSection() {
  return (
    <section className='coffee-container'>
      <div className='coffee-title'>
        We're excited to announce that we import exceptional coffee varieties
        from some of the finest regions in the world!
      </div>
      <div className='coffee-section'>
        <img src={coffeeJar} alt='Coffee Jar' className='coffee-image' />
      </div>
    </section>
  );
}
