import './Slider.css';

const steps = [
  'Picking a bunch of bananas from a palm tree',
  'Processing and preparing bananas for desserts',
  'Serving with magic and love'
];

const Slider = () => {
  return (
    <section className="slider">
      <h2>How do we work?</h2>
      <div className="slider-container">
        {steps.map((step, index) => (
          <div key={index} className="slider-item">
            <div className="circle">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;