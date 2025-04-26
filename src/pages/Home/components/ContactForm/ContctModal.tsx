import './ContactModal.css';
import ContactForm from '../../../Contact/ContactForm'; 


interface Props {
  onClose: () => void;
}

const ContactModal = ({ onClose }: Props) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="modal-body">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;