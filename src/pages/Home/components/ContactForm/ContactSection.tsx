import { useState } from "react";
import "./ContactSection.css";
import ContactModal from "./ContctModal";
import { mailIcon } from "../../../../assets/assets";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='contact-section'>
      <div className='contact-title'>Contact</div>
      <div className='contact-card'>
        <div className='contact-icon'>
          <img src={mailIcon} alt='' className='mail-icon' />
        </div>
        <div className='contact-info'>
          <p className='contact-label'>Email</p>
          <p className='contact-email'>dimadi1908@gmail.com</p>
        </div>
        <button className='contact-button' onClick={() => setIsModalOpen(true)}>
          Contact Us
        </button>
      </div>

      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default ContactSection;
