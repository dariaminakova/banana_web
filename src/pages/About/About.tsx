import { about } from "../../assets/assets";
import "./About.css";

const About = () => {
  return (
    <>
      <section className='about-section'>
        <div className='about-text'>
          <div className='about_title'>About</div>
          <div className='about_info'>
            The Banana Magic is a whimsical and vibrant cafe concept designed to
            create a unique and delightful dining experience. It blends the
            playful charm of a tropical theme with a focus on creativity and
            fun.
          </div>
        </div>
        <img className='about_img' src={about} alt='about' />
      </section>
      <div className='wave_wrapper'>
        <section className='key-elements'>
          <span className='key-elements_title'>Our key elements</span>
          <div className='elements-grid'>
            <div className='element'>
              <div className='icon yellow-circle'>🎧</div>
              <div className='element_title'>Tropical Ambiance</div>
              <div className='element_details'>
                The cafe features a lively, tropical-inspired decor with bright
                colors, banana-themed decorations, and lush greenery. The
                atmosphere is designed to transport guests to a tropical
                paradise, making it an ideal spot for relaxation and enjoyment.
              </div>
            </div>
            <div className='element'>
              <div className='icon yellow-circle'>🍌</div>
              <div className='element_title'>Innovative Menu</div>
              <div className='element_details'>
                The menu at Banana Magic offers a variety of banana-inspired
                dishes and beverages. From banana smoothies and milkshakes to
                banana pancakes, desserts, and savory options, the cafe
                celebrates the versatility of this beloved fruit.
              </div>
            </div>
            <div className='element'>
              <div className='icon yellow-circle'>☕</div>
              <div className='element_title'>Engaging Branding</div>
              <div className='element_details'>
                The branding of the cafe is playful and memorable, featuring a
                mascot and engaging marketing campaigns that highlight the fun
                and magical aspects of the cafe.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
