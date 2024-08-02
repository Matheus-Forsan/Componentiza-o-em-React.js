import React from "react";
import "./App.css";
import Footer from "./componnets/Footer";
import Depoimento from "./componnets/Depoimento";
import Header from "./componnets/Header";
import Destino from "./componnets/DestinoPopular";
import Pacote from "./componnets/Pacote";
import Contato from "./componnets/Contato";


function App() {
  return (
    <div className="App">
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h2>Explore o Mundo com a Senai Viagens</h2>
          <p>
            Oferecemos os melhores pacotes de viagens para você e sua família.
            Experiências inesquecíveis aguardam você!
          </p>
          <div className="hero-buttons">
            <button className="btn-saiba-mais">Saiba Mais</button>
            <button className="btn-reserve-agora">Reserve Agora</button>
          </div>
        </div>
      </section>
      <section id="destinos" className="destinos-populares">
        <h2>Destinos Populares</h2>
        <div className="destinos-grid">
          <Destino 
          source='https://oficinadeinverno.com.br/cdn/shop/articles/eiffel-tower-sunrise1.jpg?v=1659494576'
          alt="Paris"
          flag="FRA"
          pais="Paris"
          descrição="Paris, conhecida como a cidade do amor, oferece uma mistura de
              cultura, arte e história. Visite a Torre Eiffel, o Museu do Louvre
              e explore as charmosas ruas de Montmartre."
          />
          <Destino 
          source='https://classic.exame.com/wp-content/uploads/2017/10/ny-1.jpg?quality=70&strip=info&w=1024'
          alt="Nova York"
          flag="USA"
          pais="Nova York"
          descrição="Paris, conhecida como a cidade do amor, oferece uma mistura de
              cultura, arte e história. Visite a Torre Eiffel, o Museu do Louvre
              e explore as charmosas ruas de Montmartre."
          />
          <Destino 
          source='https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/toquio-pontos-turisticos.jpg'
          alt="Tóquio"
          flag="JPN"
          pais="Tóquio"
          descrição="Tóquio é uma metrópole vibrante onde a tradição encontra a
              modernidade. Visite o Templo Senso-ji, o cruzamento de Shibuya e
              experimente a culinária local em izakayas e restaurantes."
          />
          
        </div>
      </section>

      <section id="pacotes" className="pacotes-viagem">
        <h2>Pacotes de Viagem</h2>
        <div className="pacotes-grid">
        <Pacote name="Pacote América do Sul" precoant="4.000" precoatu="3.500" desc="Desfrute de 7 dias encantadores em Buenos Aires, Santiago e Lima,
              com hospedagem em hotéis 4 estrelas, passagens aéreas e passeios
              guiados pelos principais pontos turísticos."/>

        <Pacote name="Pacote EUA" precoant="5.500" precoatu="4.500" desc="Explore as cidades vibrantes de Nova York e Los Angeles por 7
              dias, com hospedagem em hotéis 4 estrelas, passagens aéreas e
              tours guiados pelos pontos mais famosos."/>

        <Pacote name="Pacote Ásia" precoant="7.000" precoatu="6.000" desc="Descubra a cultura e modernidade de Tóquio, Seul e Pequim em uma
              viagem de 10 dias, com hospedagem luxuosa, passagens aéreas
              inclusas e tours guiados."/>
        
          
        </div>
      </section>

      <section id="depoimentos" className="depoimentos">
        <h2>Depoimentos</h2>
        <div className="depoimentos-grid">
      <Depoimento nome="João Silva" comentario="Foi a melhor viagem da minha vida!"/>
      <Depoimento nome="Maria Santos" comentario="Experiência incrível e atendimento excelente."/>
      <Depoimento nome="Ana Costa" comentario="Recomendo a todos, vale cada centavo."/>
      <Depoimento nome="Pedro Oliveira" comentario="Excelente custo-benefício e ótimos guias turísticos."/>
      
        </div>
      </section>
      <section id="contato" className="contato">
        <h2>Contato</h2>
        <div className="contato-container">
          <Contato />
          <div className="contato-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.2810841259775!2d-48.35436492509229!3d-21.613967992949075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8e1d1fc68a2a7%3A0x72c0741034cbcc!2sSENAI%20-%20Servi%C3%A7o%20Nacional%20de%20Aprendizagem%20Industrial!5e0!3m2!1spt-BR!2sbr!4v1722442541179!5m2!1spt-BR!2sbr"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Agência de Viagens"
            ></iframe>
          </div>
        </div>
        <Footer />
      </section>
    

    </div>
  );
}

export default App;
