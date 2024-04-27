import React from "react";

function BestSellers() {
  return (
    <div id="bestSellers" className="min-h-screen bg-white">
      <div className="flex-1 flex-col flex items-center">
        <p className="mt-32 font-bold text-4xl text-Green">Mais vendidos</p>
        <div className="rounded-lg container mx-auto p-5 my-10 bg-green">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {/* 1 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/1-CorreiasIndustriaisBalflex.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Correias Industriais Balflex</h2> 
            </div>

            {/* 2 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/2-CorreiasAutomotivas.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Correias Automotivas</h2> 
            </div>

            {/* 3 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/3-Rolamentos.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Rolamentos</h2> 
            </div>

            {/* 4 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/4-RetentorArca.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                    />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Retentor Arca</h2> 
            </div>

            {/* 5 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/5-MancaisGBR.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Mancais GBR</h2> 
            </div>

            {/* 6 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/6-BateriaMoura.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Bateria Moura</h2> 
            </div>

            {/* 7 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/7-LinhaOrbioquimica.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Linha Orbioquimica</h2> 
            </div>

            {/* 8 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/8-FiltrosdeareCombustivelTecfilMannFilterDelphiParker.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Filtros de ar e Combustivel Tecfil MannFilter Delphi Parker</h2> 
            </div>

            {/* 9 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/9-OleosShelleLubrax.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Oleos Shell e Lubrax</h2> 
            </div>

            {/* 10 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/10-DiscoseEmbreagensLUK.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Discos e Embreagens LUK</h2> 
            </div>

            {/* 11 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/11-ReparoHidraulicoAPC.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Reparo Hidraulico APC</h2> 
            </div>

            {/* 12 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/12-TerminaleCruzetaCardanAemco.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Terminal e Cruzeta Cardan Aemco</h2> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
