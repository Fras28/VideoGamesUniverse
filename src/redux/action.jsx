import axios from "axios"
export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_ALL_GENEROS = 'GET_ALL_GENEROS'
export const GET_ALL_DETAIL = "GET_ALL_DETAIL"
export const SEARCH_GAME = "SEARCH_GAME"
export const SEARCH_CLEANER = "SEARCH_CLEANER"
export const SORT_GAMES = "SORT_GAMES"
export const POST_CREATE_GAMES = "POST_CREATE_GAMES"



export const getAllGames = () => {
    return async function (dispatch) {
      return fetch('http://localhost:3001/videogames')
      .then((res)=>res.json())
      .then((res_json) =>{
        dispatch({type: GET_ALL_GAMES,
                  payload: res_json})
      })
    };
  };

  export const getAllGeneros = () => {
    return async function (dispatch) {
      return fetch('http://localhost:3001/genres')
      .then((res)=>res.json())
      .then((res_json) =>{
        dispatch({type: GET_ALL_GENEROS,
                  payload: res_json})
      })
    };
  };
 
  export const getDetail = (id) => {
    return async function (dispatch) {
      return fetch(`http://localhost:3001/videogames/${id}`)
      .then((res)=>res.json())
      .then((res_json) =>{
        dispatch({type: GET_ALL_DETAIL,
                  payload: res_json})
      })
    };
  };

export const searchBar = (name)=>{
  return async function (dispatch) {
    return fetch(`http://localhost:3001/videogames/?name=${name}`)
    .then((res)=>res.json())
    .then((res_json) =>{
      dispatch({type: SEARCH_GAME,
                payload: res_json})
    })
  };
}

export const clearSearch = () =>{
  return{
      type:SEARCH_CLEANER
    }
  
}


export function orden (payload) {
    return {
      type: SORT_GAMES,
      payload:payload, 
    } 
    }

    export const createGame = (payload) => {
      return async function(dispatch){
          let response = await axios.post('http://localhost:3001/videogames/create', payload)
          return dispatch({
            type: POST_CREATE_GAMES,
            payload: response.data
          })
      }
    }