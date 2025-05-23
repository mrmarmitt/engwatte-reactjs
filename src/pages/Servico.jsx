import React from 'react';
// import './Sobre.css';

function Servico() {
  return (
    <main className='custom-background'>
      <div className="grid grid-flow-raw grid-cols-3 gap-4">
        <div className="service-box grid">
          <div className='service-icon'>
            <img src="/build.svg" alt="build" style={{ width: '200px', height: '100px', background: 'transparent' }} />
          </div>
          <div className="text-box-service">
            <h1>Construção e Reforma</h1>
            <p>Planejamento e execução de obras residenciais e comerciais com qualidade e responsabilidade.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-raw grid-cols-3 gap-4">
        <div className="service-box grid">
          <div className='service-icon'>
            <img src="/fire-extinguisher.svg" alt="fire-extinguisher" style={{ width: '200px', height: '100px', background: 'transparent' }} />
          </div>
          <div className="text-box-service">
            <h1>PPCI</h1>
            <p>Elaboração e execução do Plano de Prevenção contra Incêndios conforme normas vigentes.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-raw grid-cols-3 gap-4">
        <div className="service-box grid">
          <div className='service-icon'>
            <img src="/note2.svg" alt="note" style={{ width: '200px', height: '100px', background: 'transparent' }} />
          </div>
          <div className="text-box-service">
            <h1>Laudos e Vistorias</h1>
            <p>Avaliações técnicas detalhadas com emissão de laudos conforme a necessidade do seu imóvel.</p>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Servico;