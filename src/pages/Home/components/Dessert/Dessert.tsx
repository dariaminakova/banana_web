import { assets } from "../../../../assets/assets";

import "./Dessert.css";

function Dessert() {
  return (
    <section className='dessert-section'>
      <h2 className='dessert-title'>Our Dessert</h2>
      <div className='dessert-gallery'>
      {assets.desserts.map((src, i) => (
          <img key={i} src={src} className={`dessert-img img${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
export default Dessert;
