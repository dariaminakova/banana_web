import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-text">
          <h2>About</h2>
          <p>
            The Banana Magic is a whimsical and vibrant cafe concept designed to create a
            unique and delightful dining experience. It blends the playful charm of a tropical
            theme with a focus on creativity and fun.
          </p>
        </div>
      </section>

      <section className="key-elements">
        <h2>Our key elements</h2>
        <div className="elements-grid">
          <div className="element">
            <div className="icon yellow-circle">🎧</div>
            <h3>Tropical Ambiance</h3>
            <p>
              The cafe features a lively, tropical-inspired decor with bright colors, banana-themed decorations,
              and lush greenery. The atmosphere is designed to transport guests to a tropical paradise,
              making it an ideal spot for relaxation and enjoyment.
            </p>
          </div>
          <div className="element">
            <div className="icon yellow-circle">🍌</div>
            <h3>Innovative Menu</h3>
            <p>
              The menu at Banana Magic offers a variety of banana-inspired dishes and beverages. From banana
              smoothies and milkshakes to banana pancakes, desserts, and savory options, the cafe celebrates
              the versatility of this beloved fruit.
            </p>
          </div>
          <div className="element">
            <div className="icon yellow-circle">☕</div>
            <h3>Engaging Branding</h3>
            <p>
              The branding of the cafe is playful and memorable, featuring a mascot and engaging marketing campaigns
              that highlight the fun and magical aspects of the cafe.
            </p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        © 2024 Banana Magic
      </footer>
    </div>
  );
};

export default About;