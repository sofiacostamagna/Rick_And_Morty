import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState ={
    myFavorites: [],
    allCharacthers: []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.allCharacthers, action.payload],
                allCharacthers: [...state.allCharacthers, action.payload]
            }
            
            case DELETE_FAVORITE:
                return{
                    ...state,
                    myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
                }
            case FILTER:
                const allCharsFiltered = state.allCharacthers.filter(char => char.gender === action.payload);
                return{
                    ...state,
                    myFavorites: allCharsFiltered
                }

                case ORDER:
                    return{
                        ...state,
                        myFavorites: 
                        action.payload === "Ascendente"
                        ? state.allCharacthers.sort((a, b)=> a.id - b.id)
                        : state.allCharacthers.sort((a, b)=> b.id - a.id)
                    } 
                
        default:
            return{...state}
    }
}

export default reducer;