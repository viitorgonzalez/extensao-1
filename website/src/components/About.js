import React from 'react';

function AboutPage() {
  return (
    <div id="about" className="flex flex-col justify-center min-h-screen bg-center bg-oficina pt-20 pb-12 bg-cover">
      <div className="">
        <div className='bg-white  w-full lg:w-1/2 bg-opacity-35 mx-auto pb-12  rounded-md'> 
          <h1 className='mt-0 pt-12 font-bold text-4xl m-10 p-2 font-mono text-center text-xl lg:text-4xl'>Quem é a Agrodispi?</h1>
          <div className=' w-full font-sans text-xl'>          
          <img src="/aboutPageImgs/imagem_chave.jpg" alt="Imagem de um chave" className='w-1/2 lg:w-1/3 h-full float-right lg:ml-2 mr-8 mt-8 rounded-lg'/> 
          <div className='p-4'>
            <p className='m-3 justify-start text-sm lg:text-lg'>Existente desde meados de 1945, e antes chamada de Oliveira Irmãos, a empresa Agrodspi Peças e Serviços Agrodiesel de Pimenta LTDA,
              foi pioneira no ramo de ferraria, solda e mecânica na cidade de Pimenta/MG, tendo surgido da união de três irmãos, José Segundo de Oliveira,
              Vercino José de Oliveira (ambos in memoriam) e Antônio de Oliveira.</p>

            <p className='m-3 text-sm lg:text-lg'> Seguindo as linhagens e tradições familiares, a partir de 1999, época em que se adotou o nome hoje utilizado,
              a empresa Agrodspi foi assumida pela segunda geração da família, passando a ser comandada por José Augusto de Oliveira,
              Ailton Augusto de Oliveira, Antônio Augusto de Oliveira e Elias Augusto de Oliveira, filhos do fundador, Sr. Antônio,
              os quais hoje integram seu quadro societário.</p>
            <img src='/aboutPageImgs/motor.jpg' alt="Imagem de um motor" className='float-left w-1/2 lg:w-1/3 h-full ml-4 mr-2 lg:mr-10 mt-4 rounded-lg'/>
            <p className='m-3 ml-4 text-sm lg:text-lg m-6'> Desde sua origem, a empresa vem especializando-se e aprimorando-se cada vez mais na área de mecânica de equipamentos a diesel,
              sistemas e equipamentos hidráulicos e parte elétrica automotiva em geral.</p>

            <p className='m-3 text-sm lg:text-lg'>Além disso, conta com uma loja de peças voltadas para a área de mecânica agrícola, tendo como base a qualidade de seus serviços,
              produtos e mercadorias, com uma política de preços justos e o respeito aos seus clientes.</p>
            
            <p className='m-3 mb-10 text-sm lg:text-lg mt-6'>Aproveite nosso site para relacionar-se conosco, informar-se de nossas novidades e acompanhar o nosso desenvolvimento.
              Será uma satisfação atendê-lo!</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;
