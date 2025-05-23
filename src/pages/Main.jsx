import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className='custom-background'>
      <div className="grid grid-flow-raw grid-cols-3 gap-4">
        <div className="about-box grid col-start-3">
          <div className="text-box">
            <h1>Seu projeto, nossa engenharia</h1>
            <p>
              Na Watte Engenharia, acreditamos que a engenharia é muito mais do que cálculos,
              plantas e concreto, é a arte de transformar ideias em soluções seguras, funcionais e duradouras,
              sempre com foco no bem-estar das pessoas e no desenvolvimento responsável do ambiente construído.
            </p>
            <p>
              Por isso, nossas ações são guiadas por princípios sólidos e valores que norteiam cada etapa do nosso trabalho,
              desde o estudo preliminar até a entrega final da obra,
              garantindo excelência em projetos, reformas, construções e sistemas de proteção.
            </p>
          </div>
        </div>
      </div>

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
        <div className="service-box grid">
          <div className='service-icon'>
            <img src="/fire-extinguisher.svg" alt="fire-extinguisher" style={{ width: '200px', height: '100px', background: 'transparent' }} />
          </div>
          <div className="text-box-service">
            <h1>PPCI</h1>
            <p>Elaboração e execução do Plano de Prevenção contra Incêndios conforme normas vigentes.</p>
          </div>
        </div>
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

export default Main;