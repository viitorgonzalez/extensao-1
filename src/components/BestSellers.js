import React from "react";

function BestSellers() {
  return (
    <div id="bestSellers" className="min-h-screen"  >
      <div className="flex-1 flex-col flex items-center">
        <p className=" mt-24 lg:mt-24 font-bold text-4xl text-white flex justify-center flex-col text-center h-20 bg-Green w-full">Mais vendidos</p>
        <div className="rounded-lg container mx-auto p-5 my-10 bg-green">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {/* 1 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/1-CorreiasIndustriaisBalflex.png"
                    alt="Imagem Mais Vendida 1"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Correias Industriais Balflex</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 2 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/2-CorreiasAutomotivas.png"
                    alt="Imagem Mais Vendida 2"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Correias Automotivas</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc">
                  <button className="mt-6 lg:mt-0 py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 3 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/3-Rolamentos.png"
                    alt="Imagem Mais Vendida 3"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Rolamentos</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc">
                  <button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 4 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/4-RetentorArca.png"
                    alt="Imagem Mais Vendida 4"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                    />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Retentor Arca</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 5 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/5-MancaisGBR.png"
                    alt="Imagem Mais Vendida 5"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Mancais GBR</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 6 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/6-BateriaMoura.png"
                    alt="Imagem Mais Vendida 6"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Bateria Moura</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 7 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/7-LinhaOrbioquimica.png"
                    alt="Imagem Mais Vendida 7"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Linha Orbioquimica</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 8 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/8-FiltrosdeareCombustivelTecfilMannFilterDelphiParker.png"
                    alt="Imagem Mais Vendida 8"
                    className="w-32 h-28 md:h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Filtros de ar e Combustivel</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 9 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/9-OleosShelleLubrax.png"
                    alt="Imagem Mais Vendida 9"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Oleos Shell e Lubrax</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 10 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/10-DiscoseEmbreagensLUK.png"
                    alt="Imagem Mais Vendida 10"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Discos e Embreagens LUK</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 11 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/11-ReparoHidraulicoAPC.png"
                    alt="Imagem Mais Vendida 11"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Reparo Hidraulico APC</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>

            {/* 12 */}
            <div className="rounded-lg flex flex-col items-center justify-center bg-white border-2 border-black p-2">
                <div className="img-container overflow-hidden pt-2 pb-2">
                  <img
                    src="/maisVendidosImgs/12-TerminaleCruzetaCardanAemco.png"
                    alt="Imagem Mais Vendida 12"
                    className="w-32 h-32 lg:w-72 lg:h-72"
                  />
                </div>
                <h2 className="mb-2 text-Green text-sm lg:text-lg font-bold mb-0 pt-2 text-center">Terminal e Cruzeta Cardan</h2> 
                <a href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja." target="_blanc"><button className="py-2 px-6 bg-Green border-2 border-Green rounded-lg 
                  hover:bg-Green-dark hover:border-Green-dark hover:text-white 
                  hover:scale-105 transition duration-300">Ver produto</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers;
