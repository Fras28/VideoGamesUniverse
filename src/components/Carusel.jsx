import React from "react";
import "./Styles/carusel.css"

export const Carousel = ()=>{

    return(
        <div className="carrusCont">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <a href="https://blockbuster-pf.vercel.app/" target="_blank" rel="noreferrer" >
    <div className="carousel-item active">
    
      <p className="project">Dota 2 Champions 2022</p>
    
      
      <img src='https://media.tycsports.com/files/2021/10/17/346791/the-international_1440x810_wmk.jpg' className="d-block" alt="..."/>
    </div>  </a>
    <div className="carousel-item">
    <p className="project">LOL 2022</p>
      <img src='https://culturageek.com.ar/wp-content/uploads/2022/08/Diseno-sin-titulo-2022-08-29T104434.699.jpg' className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
    <p className="project">CS Champions 2022</p>
      
      <img src='https://esports.as.com/2022/09/13/league-of-legends/roster-Team-Liquid-seguira-igual_1610548933_1039178_1075x600.jpg' className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
    <p className="project">Overwatch Champions 2022</p>
     
       <img src='https://estnn.com/wp-content/uploads/2022/09/jdgworlds2022.png.webp' className="d-block" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}