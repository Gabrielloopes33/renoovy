// Simple test version of Home page

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">
            Renoovy+ 
          </h1>
          <p className="text-xl text-gray-600">
            Desperte Sua Melhor Versão
          </p>
        </header>
        
        <main className="py-16">
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Rejuvenesça até 10 anos com nossa fórmula exclusiva
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 rounded-lg border border-purple-200">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">Pele Radiante</h3>
                <p className="text-gray-600">Colágeno e vitaminas para uma pele saudável</p>
              </div>
              
              <div className="p-6 rounded-lg border border-purple-200">
                <div className="text-4xl mb-4">💇‍♀️</div>
                <h3 className="text-xl font-semibold mb-2">Cabelos Fortes</h3>
                <p className="text-gray-600">Biotina e minerais essenciais</p>
              </div>
              
              <div className="p-6 rounded-lg border border-purple-200">
                <div className="text-4xl mb-4">💅</div>
                <h3 className="text-xl font-semibold mb-2">Unhas Saudáveis</h3>
                <p className="text-gray-600">Fortalece e acelera o crescimento</p>
              </div>
            </div>
            
            <div className="mt-16">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition">
                Comprar Agora
              </button>
            </div>
          </section>
        </main>
        
        <footer className="text-center py-8 border-t border-gray-200 mt-16">
          <p className="text-gray-600">
            © 2024 Renoovy+. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}