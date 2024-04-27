function Footer() {

  const googleMapsUrl = "https://www.google.com/maps?q=Avenida+Jair+Leite,+675,+Centro,+Pimenta/MG+35585-000";

  return (
    <footer id="contact" className="pt-5 bg-BackgroundImg bg-no-repeat bg-cover">
      <div className="grid grid-cols-1 gap-5 mx-5">

        {/* contato */}
        <div className="text-center">
          <h4 className="font-bold pb-2">Contato</h4>
              <p>
                <strong>Telefone / Whatsapp:</strong> (37) 3324-1406
              </p>
            <p>
              <strong>Email:</strong> agrodieselpecas@hotmail.com
            </p>
        </div>

        {/* endereço */}
        <div className="text-center">
        <h4 className="font-bold">Endereço</h4>
          <p>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Avenida Jair Leite, 675, Centro, Pimenta/MG CEP 35585-000
            </a>
          </p>
        </div>

        {/* redes sociais */}
        <div className="text-center">
          <h4 className="font-bold">Redes Sociais</h4>
          <ul className="">
            <li>
              <a href="https://www.instagram.com/agrodspi.pimenta?igsh=MThsMXp5dHd6eWRvZg==">
                Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className="text-center mt-10">
        <p>&copy; 2024 Agrodspi | Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
