import React from 'react';

function Sobre() {
  return (
    <main className='custom-background'>
      <div className="grid grid-flow-raw grid-cols-2 gap-4">
        <div className="about-box grid">
          <div className="text-box">
            <h2>Quem Somos</h2>
            <p>
              Somos ums empresa de engenharia focada em entregar sempre o melhor resultado. Desde de 2025 horramos com nossos compromissos.
            </p>
          </div>
        </div>

        <div className="about-box grid">
          <div className="text-box">
            <h2>Princípios e Valores da [Nome da Empresa]</h2>
            <p>
              Na [Nome da Empresa], acreditamos que a engenharia é muito mais do que cálculos e concreto — é o compromisso com a segurança, funcionalidade e bem-estar das pessoas. Por isso, nossas ações são guiadas por princípios sólidos e valores que sustentam cada projeto, reforma ou obra que executamos.
            </p>

            <h2>Compromisso com a Qualidade</h2>
            <p>
              Entregamos soluções técnicas precisas, eficientes e duradouras. Trabalhamos com atenção aos detalhes e padrões rigorosos de qualidade em todas as etapas, desde o projeto até a entrega final da obra.
            </p>

            <h2>Responsabilidade Técnica e Legal</h2>
            <p>
              Agimos com total conformidade às normas e legislações vigentes, especialmente em projetos como o PPCI (Plano de Prevenção e Proteção Contra Incêndios), garantindo segurança, aprovação junto aos órgãos competentes e tranquilidade ao cliente.
            </p>

            <h2>Transparência e Ética</h2>
            <p>
              Mantemos uma comunicação clara e aberta com nossos clientes, parceiros e fornecedores. Ética, honestidade e respeito são a base de todas as nossas relações.
            </p>

            <h2>Inovação com Responsabilidade</h2>
            <p>
              Buscamos constantemente novas tecnologias, materiais e métodos construtivos que agreguem valor e eficiência aos nossos serviços, sem abrir mão da viabilidade e sustentabilidade.
            </p>

            <h2>Foco no Cliente</h2>
            <p>
              Cada projeto é único. Atuamos de forma personalizada, entendendo as necessidades de cada cliente para propor soluções que alinhem estética, técnica e funcionalidade.
            </p>

            <h2>Segurança em Primeiro Lugar</h2>
            <p>
              Zelamos pela segurança de todos os envolvidos — colaboradores, clientes e usuários finais — adotando boas práticas de engenharia e de prevenção em todas as fases do trabalho.
            </p>

            <h2>Sustentabilidade</h2>
            <p>
              Incorporamos práticas que minimizam impactos ambientais, promovendo um desenvolvimento responsável e consciente, sempre que possível.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Sobre;