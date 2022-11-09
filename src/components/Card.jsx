import React from "react";
import LOGO from "./Assets/GU.png"
import "./Styles/Card.css"

export default function Card ({ name, img, desc }) {
  return (
     <div className="bordeCard">
    <div className="card">
      <div className="card-image">
        {
          img?
          <img className="imgCard" src={img}  alt={name + "portada"} />:
          <img className="imgCard" src={LOGO} alt="Logo"/>
          
        }
      </div>
     
      <div className="card-description">
        <p className="text-title"> {name}</p>
        <p className="text-body">{desc}</p>
      </div>
    </div>
 </div> );
}

/*   img?
        <img className="imgCard" src={img} alt={name + "portada"} />:
        <img className="imgCard" src={LOGO} */