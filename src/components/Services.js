import React from "react";

function Services() {
  return (
    <div id="services" className="min-h-screen">
      <div className="flex-1 flex-col flex items-center">
        <p className="mt-24 font-bold text-4xl text-white flex justify-center flex-col text-center h-20 bg-Green w-full">Serviços</p>
        <div className="container h-auto mx-auto p-5 my-10">

          {/* Serviços mecânicos*/}
          <h2 className="text-white text-2xl lg:text-3xl mb-8 font-bold text-center py-2 border-b-2 border-white ">Serviços Mecânicos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
            {/* Div 1*/}
            <div className="flex flex-col items-center bg-white bg-opacity-65 rounded-xl p-2">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/1-motor.png"
                      alt="Motor"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Motor</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Serviços em motores de veículos pesados: diagnóstico, manutenção preventiva, reparo de sistemas de combustível, lubrificação e ajustes de motor.</p>
              </div>

              {/* Div 2*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/2-embreagem.png"
                      alt="Embreagem"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Embreagem</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Oferecemos serviços especializados de manutenção de embreagens para máquinas agrícolas. Inspeção, lubrificação, substituição de discos e ajustes para garantir operação suave e confiável.</p>
              </div>

              {/* Div 3*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/3-caixa-de-cambio.png"
                      alt="Caixa de câmbio"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Caixa de câmbio</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Serviços de caixa de câmbio para máquinas agrícolas: diagnóstico preciso, reparo de engrenagens, sincronização e substituição de peças, assegurando funcionamento eficiente.</p>
              </div>

              {/* Div 4*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/pecas-de-reposicao.png"
                      alt="Motor"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Diferencial</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Reparos diferenciais para máquinas agrícolas: diagnóstico detalhado, reparos precisos, ajustes meticulosos e substituição de peças, visando desempenho confiável e durabilidade estendida.</p>
              </div>

              {/* Div 5*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/5-suspensao.png"
                      alt="Suspensão"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Suspensão</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção especializada de suspensão para máquinas agrícolas: diagnóstico detalhado, ajustes meticulosos, troca de componentes e garantia de operação suave e estável em qualquer terreno.</p>
              </div>

              {/* Div 6*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/6-freios.png"
                      alt="Freios"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Freios</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção de sistema de freio para máquinas agrícolas: diagnóstico minucioso, ajustes precisos, substituição de peças e garantia de segurança operacional em todas as condições.</p>
              </div>

              {/* Div 7*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/7-tracao.png"
                      alt="Eixo de comando"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Tração</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção da tração dianteira e traseira em máquinas agrícolas: diagnóstico minucioso, ajustes precisos, substituição de peças e garantia de desempenho confiável em variadas condições de terreno.</p>
              </div>

              {/* Div 8*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/8-hidraulico.png"
                      alt="Reduções finais
                      "
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Reduções finais</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Serviço de redução final: Personalizado para adequar a saída do motor às exigências da carga, assegurando eficiência, durabilidade e desempenho excepcionais.</p>
              </div>
            </div>

            {/* Serviços hidráulicos*/}
            <h2 className="text-white md:text-xl lg:text-3xl mb-8 mt-8 font-bold text-center py-2 border-b-2 border-white">Serviços Hidráulicos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
              {/* Div 9*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/9-pistoes.png"
                      alt="Pistão"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Pistões</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção de pistões em sistemas hidráulicos de máquinas agrícolas: inspeção detalhada, reparo especializado, substituição de peças e garantia de funcionamento eficiente e duradouro.</p>
              </div>

              {/* Div 10*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/10-valvula-hidraulica.png"
                      alt="Válvula hidráulica"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Válvulas hidráulicas</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Serviços de manutenção em válvulas para sistemas hidráulicos de máquinas agrícolas: diagnóstico detalhado, reparo especializado, substituição de componentes e garantia de operação confiável e eficaz.</p>
              </div>

              {/* Div 11*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/11-comando-hidraulico.png"
                      alt="Comando hidráulico"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Comando hidráulico</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção completa de sistemas de comando hidráulico : inspeção minuciosa, ajustes personalizados, substituição de componentes e garantia de operação precisa, confiável e eficiente</p>
              </div>

              {/* Div 12*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/12-mangueira-de-agua.png"
                      alt="Mangueira"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Mangueiras e conexões</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção especializada de mangueiras e conexões em sistemas hidráulicos: inspeção detalhada, reparo técnico e garantia de funcionamento seguro e eficaz.</p>
              </div>
            </div>

            {/* Serviços elétricos*/}
            <h2 className="text-white md:text-xl lg:text-3xl mb-8 mt-8 font-bold text-center py-2 border-b-2 border-white">Serviços Elétricos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
              {/* Div 13*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/13-alternador.png"
                      alt="Alternador"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Alternador</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção especializada de alternadores em sistemas elétricos de máquinas agrícolas: diagnóstico preciso, reparos técnicos, substituição de peças e garantia de funcionamento confiável.</p>
              </div>
              {/* Div 14*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/14-motor-de-partida.png"
                      alt="Motor de partida"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Motor de partida</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção de motores de partida para sistemas elétricos de máquinas agrícolas: diagnóstico detalhado, reparo especializado, substituição de peças e garantia de funcionamento confiável e eficiente.</p>
              </div>
              {/* Div 15*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/15-fios.png"
                      alt="Chicote elétrico"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Chicote elétrico</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção de chicotes elétricos em máquinas agrícolas: diagnóstico detalhado, reparo especializado, substituição de componentes e garantia de funcionamento seguro e eficiente dos sistemas elétricos.</p>
              </div>
              {/* Div 16*/}
              <div className="flex flex-col items-center bg-white p-2 bg-opacity-65 rounded-xl">
                  <div className=" img-container overflow-hidden pt-2 pb-2">
                    <img 
                      src="/serviceIcons/valvula.png"
                      alt="Válvulas elétricas"
                      className="p-3 border-2 border-black rounded-full  w-32 h-32 lg:w-72 lg:h-72"
                    />
                  </div>
                  <h2 className="mb-2 text-xl text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Conexões e Válvulas elétricas</h2> 
                  <p className="mb-2 text-black text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Manutenção de conexões e válvulas elétricas em máquinas agrícolas: inspeção detalhada, reparo técnico qualificado, substituição de componentes e garantia de operação eficiente dos sistemas elétricos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Services;
