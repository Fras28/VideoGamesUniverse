import {GET_ALL_DETAIL, GET_ALL_GAMES, GET_ALL_GENEROS, SEARCH_GAME, SEARCH_CLEANER, SORT_GAMES, POST_CREATE_GAMES} from './action'
const initialState = {
    games: [],
    generos: [],
    gamesDetail: {},
    searchG:[],
    ordenado:[]
};
  
  const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case GET_ALL_GAMES:
        return{
          ...state, 
          games :  payload
        }
        case GET_ALL_GENEROS: 
        return{
          ...state,
          generos: payload
        }
        case GET_ALL_DETAIL: 
        return{
          ...state,
          gamesDetail: payload
        }
        case SEARCH_GAME: 
        return{
          ...state,
          searchG: payload
        }
        case SEARCH_CLEANER: 
        return{
          ...state,
          searchG:[]
        }
        case SORT_GAMES: 
        const zort =
        payload === 'min'?
        state.games.sort(function (a, b){
          if(a.name > b.name){
            return 1
          }
          if(b.name > a.name){
            return -1
          }
          return 0;
        }) :payload === 'max'?
        state.games.sort(function (a, b){
          if(a.name > b.name){
            return -1;
          }
          if(b.name > a.name){
            return 1;
          }
          return 0;
        }):payload === "rating+"?
        state.games.sort(function (a, b){
          if(a.rating > b.rating){
            return 1
          }
          if(b.rating > a.rating){
            return -1
          }
          return 0;}):
          state.games.sort(function (a, b){
            if(a.rating > b.rating){
              return -1;
            }
            if(b.rating > a.rating){
              return 1;
            }
            return 0;})

        return{
          ...state,
          ordenado:zort
        }
        case POST_CREATE_GAMES: 
        return{
          ...state,
          games:[...state.games, payload]
        }
        
      default:
        return { ...state };
    }
  };
  
  export default rootReducer;