import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/footer-logo-eng-watte.png" alt="WATTE Engenharia Logo" />
        </div>
        <div className="footer-contact">
          <a href="https://wa.me/1234567890">
            <img src="/whatsApp.svg" alt="WhatsApp" style={{ width: '40px', height: '50px', background: 'transparent' }}/>
          </a>
          <a href="https://instagram.com">
            <img src="/instagram.svg" alt="Instagram" style={{ width: '40px', height: '80px', background: 'transparent' }}/>
          </a>
        </div>
        <div className="footer-address">
          <p>Azaleia e Cia Ltda. - CPF/CNPJ: 12.345.678/0000-01</p>
          <p>Av. Bernardino de Campos, 98 - São Paulo, SP 12345-678</p>
          <p>info@meusite.com</p>
          <p>Telefone: (11) 3456-7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
