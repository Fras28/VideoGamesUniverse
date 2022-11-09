import React from "react";
import "./Styles/paginado.css"
function Paginado(props) {
  const numeroDepagina = [];

  for (let i = 0; i < Math.ceil(props.allGames / props.juegosPorPagina); i++) {
    numeroDepagina.push(i + 1);
  }

  return (
    <footer>
      <ul className="pagUl">
        {numeroDepagina?.map((numeroPagi) => {
          return (
            <button
            className="PaginadoBtn "
              key={numeroPagi}
              onClick={() => {
                props.paginado(numeroPagi);
              }}
            >
             <span className="button_top">{numeroPagi} </span> 
            </button>
          );
        })}
      </ul>
    </footer>
  );
}

export default Paginado;
