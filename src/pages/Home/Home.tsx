import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Slider from './components/Slider/Slider';
import Deserts from './components/Deserts/Deserts';
import CoffeeSection from './components/CoffeeSection/CoffeeSection';
import ContactForm from './components/ContactForm/ContactForm'
import { Drinks } from './components';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Slider />
      <Deserts />
      <Drinks />
      <CoffeeSection />
      <ContactForm />
    </>
  );
};

export default Home;