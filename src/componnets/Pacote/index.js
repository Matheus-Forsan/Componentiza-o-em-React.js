import React from "react";
import "./style.css"
import {
    FaHotel,
    FaPlane,
    FaWalking,
    FaBus,
    
  } from "react-icons/fa";

export function Pacote({name, precoant, precoatu, desc, }){
    return(
        <div className="card-pacote">
            <div className="pacote-header">
              <h3>{name}</h3>
              <div className="preco">
                <span className="preco-anterior">R$ {precoant}</span>
                <span className="preco-atual">R$ {precoatu}</span>
              </div>
            </div>
            <p>
              {desc}
            </p>
            <p>Incluem:</p>
            <ul>
              <li>
                <FaHotel /> Hospedagem em hotéis 4 estrelas
              </li>
              <li>
                <FaPlane /> Passagens aéreas ida e volta
              </li>
              <li>
                <FaWalking /> Passeios guiados nas cidades
              </li>
              <li>
                <FaBus /> Transporte entre as cidades
              </li>
            </ul>
            <button type="button" className="btn-comprar">
              Comprar
            </button>
          </div>
            
    );
}

export default Pacote;