function Footer() {

  const googleMapsUrl = "https://www.google.com/maps?q=Avenida+Jair+Leite,+675,+Centro,+Pimenta/MG+35585-000";

  return (
    <footer id="contact" className="pt-5 bg-Green">
      <div className="grid grid-cols-1 gap-5 mx-5">

        {/* contato */}
        <div className="text-center">
          <h4 className="font-bold pb-2">Contato</h4>
            <button>
            <a href="tel:+550153733241406" className="flex items-center justify-center space-x-2">
              <img src="../iconSocialMedia/telefone-tocando.png" alt="celular" className="w-12 h-12" />
              <span>(37) 3324-1406</span>
            </a>
            </button>
            <p className="mt-2">
              <strong>Email:</strong> agrodieselpecas@hotmail.com
            </p>
        </div>

        {/* endereço */}
        <div className="text-center">
        <h4 className="font-bold">Endereço</h4>
            <button>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <img src="../iconSocialMedia/mapa.png" alt="Google maps" className="w-12 h-12 mx-auto mb-2"></img>
              Avenida Jair Leite, 675, Centro, Pimenta/MG CEP 35585-000
            </a>
            </button>
        </div>

        {/* redes sociais */}
        <div className="text-center">
          <h4 className="font-bold">Redes Sociais</h4>
            <div className="flex justify-center">
              <button>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/agrodspi.pimenta?igsh=MThsMXp5dHd6eWRvZg==">
                <img src="../IconSocialMedia/instagram.png" alt="Instagram icon"></img>
              </a>
              </button>

             <button>
              <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=553733241406&text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20loja.">
                <img src="../IconSocialMedia/whatsapp.png" alt="Whatsapp icon"></img>
              </a>
              </button>
            </div>
        </div>

      </div>
      <div className="text-center mt-2">
        <p>&copy; 2024 Agrodspi | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
