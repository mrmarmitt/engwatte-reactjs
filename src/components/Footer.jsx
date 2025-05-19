import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/vite.svg" alt="WATTE Engenharia Logo" />
          <p>WATTE ENGENHARIA</p>
        </div>
        <div className="footer-contact">
          <a href="mailto:info@meusite.com"><i className="fa fa-envelope"></i></a>
          <a href="https://wa.me/1234567890"><i className="fa fa-whatsapp"></i></a>
          <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
        </div>
        <div className="footer-address">
          <p>Azaleia e Cia Ltda. - CPF/CNPJ: 12.345.678/0000-01</p>
          <p>Av. Bernardino de Campos, 98 - São Paulo, SP 12345-678</p>
          <p>info@meusite.com</p>
          <p>Telefone: (11) 3456-7890</p>
          <p>Estimativa de entrega 2 - 5 dias úteis</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
