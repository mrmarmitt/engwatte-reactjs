import React from 'react';
import './Main.css';

function Main() {
  return (
    <main>
      <div className="grid grid-flow-raw grid-cols-2 gap-4">
        <div className="empty"></div>
        <div className="box grid text-left">
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
        


        {/* <div className="grid grid-cols-1 gap-4">
          <div className="box">
            Entre em contato para realizar um orçamento
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="box">
            PPCI
          </div>
          <div className="box">
            Construção e Reforma Residencial
          </div>

          <div className="box">
            Laudos e Vistorias
          </div>
        </div> */}
      </div>

      <div className="grid grid-flow-raw grid-cols-1 gap-4">
        <div className="box grid">03</div>
      </div>

      <div className="grid grid-flow-raw grid-cols-3 gap-4">
        <div className="box grid">04</div>
        <div className="box grid">05</div>
        <div className="box grid">06</div>
      </div>


    </main>
  );
}

export default Main;


        // <div className='box'>
        //   Na [Nome da Empresa], acreditamos que a engenharia é muito mais do que cálculos, 
        //   plantas e concreto — é a arte de transformar ideias em soluções seguras, funcionais e duradouras, 
        //   sempre com foco no bem-estar das pessoas e no desenvolvimento responsável do ambiente construído. 
        //   Por isso, nossas ações são guiadas por princípios sólidos e valores que norteiam cada etapa do nosso trabalho 
        //   — desde o estudo preliminar até a entrega final da obra 
        //   — garantindo excelência em projetos, reformas, construções e sistemas de proteção como o PPCI.
        // <div/>