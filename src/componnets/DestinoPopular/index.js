import React from "react";
import Flag from "react-world-flags";
import "./style.css"

export function Destino({source, alt, flag, pais, descrição}){
    return(
        <div className="card-destino">
            <img
              src={source}
              alt={alt}
              className="imagem-destino"
            />
            <h3>
              <Flag code={flag} height="16" className="bandeira" /> {pais}
            </h3>
            <p>
              {descrição}
            </p>
          </div>
    );
}

export default Destino;