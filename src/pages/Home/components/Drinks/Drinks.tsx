import { assets } from "../../../../assets/assets";

import "./Drinks.css";

function Drinks() {
  return (
    <section className='drinks-section'>
      <h2 className='drinks-title'>Drinks</h2>
      <div className='drinks-gallery'>
        {assets.drinks.map((src, i) => (
          <img key={i} src={src} className={`drink-img img${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
export default Drinks;
