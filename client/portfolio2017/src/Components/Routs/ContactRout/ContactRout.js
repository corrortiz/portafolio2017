import React from 'react';
import FooterApp from '../../FooterApp/FooterApp';
//Internal Component
import ContacList from '../../ContacList/ContacList';
import ContactForm from '../../ContactForm/ContactForm';
//locale Assest
import { Contact } from '../../../Assets/diccionary';
/**
 * Layout of the contact rout
 */
const ContactRout = () => {
  return (
    <div className="otro">
      <FooterApp title={Contact} />
      <div className="contact box">
        <ContacList />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactRout;
