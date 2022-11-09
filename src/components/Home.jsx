import React, { useEffect, useState } from "react";
import "./Styles/Home.css";
//import Nav from "./components/Nav.jsx";
import Cards from "./Cards"
import Nav from "./Nav";
import { Route } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import Paginado from "./Paginado";
import { getAllGames, orden } from "../redux/action";






export default function Home(){
  const dispatch = useDispatch()
  let allGames = useSelector(state =>state.games)
  console.log(allGames)
function zort (e){
  e.preventDefault(e);
  dispatch(orden(e.target.value))
  setPaginaActual(1)
  setOrder(`${e.target.value}`)
}
const [order, setOrder] = useState('')
useEffect(()=>{
  dispatch(getAllGames())
 },[dispatch])
    /** ----- paginado ------- */
    const [paginaActual, setPaginaActual] = useState(1)
    const [juegosPorPagina, setJuegosPorpagina] = useState(15)
    const indexUltimoJuego = (paginaActual * juegosPorPagina)
    const indexPrimerJuego = indexUltimoJuego - juegosPorPagina
    const juegosActuales = allGames?.slice(indexPrimerJuego,indexUltimoJuego)

    const paginado = (numeroDePagina)=>{
        setPaginaActual(numeroDePagina)
    }
    /** ----- paginado ------- */
    
    return (
      <div path="/Home" className="cointainerH">
        <select className="input" onChange={e=>zort(e)}>
          <option value="min" >A-Z</option>
          <option value="max">Z-A</option>
        </select>
        <select  className="input" onChange={e=>zort(e)}>
          <option value="rating+" >+⭐</option>
          <option value="rating-">-⭐</option>
          </select>
        <div>
      <Paginado juegosPorPagina={juegosPorPagina} allGames={allGames.length} paginado={paginado}/>
      </div>
      {juegosActuales.length === 0?
       (<div><div className="loader">
       <div className="loader-square"></div>
       <div className="loader-square"></div>
       <div className="loader-square"></div>
       <div className="loader-square"></div>
       <div className="loader-square"></div>
       <div className="loader-square"></div>
       <div className="loader-square"></div>
       </div></div>):
        (<div className="cartitas">
          <Cards juegosActuales={juegosActuales}/>
        </div>)}
      <div>
      <Paginado juegosPorPagina={juegosPorPagina} allGames={allGames.length} paginado={paginado}/>
      </div>
      </div>
    );
}

/*  const allG = useSelector(state => state.games);
  console.log(allG)
  const zort = allG.sort((a,b)=>{return a.name>b.name?1:a.name<b.name?-1:0}) */