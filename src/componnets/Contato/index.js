import React from "react";
import "./style.css" 
import {
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaEnvelope,
    
    
  } from "react-icons/fa";

export function Contato (){
    return(
        <div className="contato-info-form">
            <div className="contato-info">
              <p>
                <FaMapMarkerAlt /> Endereço: Rua Fictícia, 123 - Jaboticabal, SP
              </p>
              <p>
                <FaPhone /> Telefone: (16) 1234-5678
              </p>
              <p>
                <FaWhatsapp /> WhatsApp: (16) 98765-4321
              </p>
              <p>
                <FaEnvelope /> Caso queira enviar um email, preencha os campos
                abaixo:
              </p>
            </div>
            <form className="contato-form">
              <label>
                Nome:
                <input type="text" name="nome" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Mensagem:
                <textarea name="mensagem"></textarea>
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
        
    );
}

export default Contato;