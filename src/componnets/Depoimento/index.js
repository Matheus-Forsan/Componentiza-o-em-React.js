import React from "react";
import "./style.css" 

export function Depoimento ({nome , comentario}){
    return(
        <div className="card-depoimento">   
        <div className="depoimento-info">
          <h3>{nome}</h3>
          <blockquote>
            {comentario}
          </blockquote>
        </div>
      </div>
        
    );
}

export default Depoimento;