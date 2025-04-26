import { assets } from "../../../../assets/assets";

import "./Dessert.css";

function Dessert() {
  return (
    <div className='dessert-section'>
      <span className='dessert-title'>Our Dessert</span>
      <div className='dessert-gallery'>
      {assets.desserts.map((src, i) => (
          <img key={i} src={src} className={`dessert-img img${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
export default Dessert;
