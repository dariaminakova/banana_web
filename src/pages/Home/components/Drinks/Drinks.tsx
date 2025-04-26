import { assets } from "../../../../assets/assets";

import "./Drinks.css";

function Drinks() {
  return (
    <section className='drinks-section'>
      <span className='drinks-title'>Drinks</span>
      <div className='drinks-gallery'>
        {assets.drinks.map((src, i) => (
          <img key={i} src={src} className={`drink-img img_drink${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
export default Drinks;
