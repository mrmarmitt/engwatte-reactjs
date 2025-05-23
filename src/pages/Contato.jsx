import React from 'react';
// import './Sobre.css';

function Contato() {
  return (
    <main className='custom-background'>
      <div className="grid grid-flow-raw grid-cols-3 gap-4">
        <div className="about-box grid">
          <div className="text-box-service">
            <h1>Transforme seu projeto em realidade</h1>
            <p>Solicite agora seu orçamento e tenha a certeza de um serviço de qualidade e excelência.</p>

            <div className="grid grid-flow-raw grid-raw-3 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div >
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div >
                <input
                  type="text"
                  placeholder="Assunto"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensagem"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
              </div>
              <div>
                <button 
                className="bg-[#0e3b50] hover:bg-[#14506d] text-white font-medium px-6 py-2 rounded-md transition duration-300">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default Contato;