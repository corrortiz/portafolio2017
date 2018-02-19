import React from 'react';
import FooterApp from '../../FooterApp/FooterApp';
//Internal Component
import ContacList from '../../ContacList/ContacList';
//locale Assest
import { Contact } from '../../../Assets/diccionary';
/**
 * Layout of the contact rout
 */
const ContactRout = () => {
  return (
    <div>
      <FooterApp title={Contact} />
      <ContacList />
    </div>
  );
};

export default ContactRout;
