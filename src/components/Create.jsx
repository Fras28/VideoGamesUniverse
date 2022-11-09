import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import"./Styles/Create.css"
import Nav from "./Nav";
import { useDispatch, useSelector } from "react-redux";
import {createGame, getAllGeneros} from "../redux/action"
//import axios from "axios"


export default function Create(){
    let plataformas = ['PlayStation 4',"macOS","PC","Nintendo Switch","PlayStation 5","Xbox Series S/X","Xbox One","Xbox 360","PlayStation 3","Linux","Android","iOS"];
  
    const [inputs, setInputs] = useState({
        name:'',
        description:'',
        released:'',
        rating:'',
        platform:[],
        imageUrl:'',
        genero:[]
    })

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createGame(inputs));
    
        alert('Juego agregado con excito!') 
        setInputs({
            name:'',
            description:'',
            released:'',
            rating:'',
            platform:[],
            imageUrl:'',
            genero:[]
        }); 
      }
     
   var  handleOnChange = (e)=>{
    console.log(inputs)
    
    setInputs({
        ...inputs,
        [e.target.name]:e.target.value
    })
   }
   const handleOnGenero = (e)=>{
    console.log(inputs)
    console.log(e.target.value)
    setInputs({
        ...inputs,
       genero:[...inputs.genero, e.target.value]
       //genero: [new Set([...inputs.genero, e.target.value])]
    })    
    }
    const handleOnPlataform = (e)=>{
        console.log(inputs)
        console.log(e.target.value)
        setInputs({
            ...inputs,
            platform:[...inputs.platform, e.target.value]
        })    
        }

   
    
    let dispatch = useDispatch()
    const generos = useSelector(state => state.generos)
    useEffect(()=>{
        dispatch(getAllGeneros())
    },[dispatch])


    return(
        <div>
            <Route strict path="/Home" component={Nav} />
            <form className="containerC" onSubmit={handleSubmit}>
            <div><input type="text" name="name" className="input" placeholder="Game name" onChange={handleOnChange}/></div>
            <div><input type="text" name="description" className="input" placeholder="Games description" onChange={handleOnChange}/></div>
            <div><input type="date" name="released" className="date" min="28-07-1980" max="08-08-2030" onChange={handleOnChange}/></div>
            <div><input type="number" name="rating" className="input" min="0" max="5" onChange={handleOnChange}/></div>
            <div><input type="text" name="imageUrl" className="input" onChange={handleOnChange}/></div>
            <div> 
                <select className="input" onChange={handleOnGenero}>
                  {generos && generos.map((e) => {
                      return(
                          <option name="genero" value={e.name} key={e.id}>{e.name}</option>
                          )
                        })}
                </select>
                <select className="input" onChange={handleOnPlataform}>
                {plataformas.sort().map(e=>{
                    return(
                        <option name="platform">{e}</option>
                        )
                    })}
                </select>
            </div>
            <div >    
               <button className="input" type="submit" >
                ADD Game
               </button>
            </div>
             </form>
        </div>
    )
}