import React from 'react';

function AboutPage() {
  return (
    <div id="about" className="flex flex-col min-h-screen">
      <div className="bg-cover bg-center flex-1 flex-col items-center justify-center bg-colhedeira">
        <div className='bg-white flex items-center flex-col w-full bg-opacity-65 mx-auto '>
          <h1 className='mt-20 text-center font-bold text-4xl m-10 p-2 font-mono'>Quem é a Agrodispi?</h1>
          <div className=' w-2/3 flex flex-col font-sans text-xl'>

            <p className='m-3'>Existente desde meados de 1945, e antes chamada de Oliveira Irmãos, a empresa Agrodspi Peças e Serviços Agrodiesel de Pimenta LTDA,
              foi pioneira no ramo de ferraria, solda e mecânica na cidade de Pimenta/MG, tendo surgido da união de três irmãos, José Segundo de Oliveira,
              Vercino José de Oliveira (ambos in memoriam) e Antônio de Oliveira.</p>

            <p className='m-3'> Seguindo as linhagens e tradições familiares, a partir de 1999, época em que se adotou o nome hoje utilizado,
              a empresa Agrodspi foi assumida pela segunda geração da família, passando a ser comandada por José Augusto de Oliveira,
              Ailton Augusto de Oliveira, Antônio Augusto de Oliveira e Elias Augusto de Oliveira, filhos do fundador, Sr. Antônio,
              os quais hoje integram seu quadro societário.</p>

            <p className='m-3'> Desde sua origem, a empresa vem especializando-se e aprimorando-se cada vez mais na área de mecânica de equipamentos a diesel,
              sistemas e equipamentos hidráulicos e parte elétrica automotiva em geral.</p>

            <p className='m-3'>Além disso, conta com uma loja de peças voltadas para a área de mecânica agrícola, tendo como base a qualidade de seus serviços,
              produtos e mercadorias, com uma política de preços justos e o respeito aos seus clientes.</p>

            <p className='m-3 mb-10'>Aproveite nosso site para relacionar-se conosco, informar-se de nossas novidades e acompanhar o nosso desenvolvimento.
              Será uma satisfação atendê-lo!</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AboutPage;
