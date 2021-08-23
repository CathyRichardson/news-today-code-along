import axios from "axios";

const initialState = {
    characters: [],
    loading: false
}

const GET_CHARACTERS = "GET_CHARACTERS";
// const SET_LOADING = "SET_LOADING";

export const getCharacters = () => {
    return {
        type: GET_CHARACTERS,
        payload: axios.get('https://swapi.dev/api/people')
    }
}
// export const setLoading = (bool) => {
//     return {
//         type: SET_LOADING,
//         payload: bool
//     }
// }

const reducer = (state = initialState, action) => {
    switch(action.type){
        case `${GET_CHARACTERS}_FULFILLED`: {
            return {
                ...state,
                characters: action.payload.data.results,
                loading: false,
            }
        }
        case `${GET_CHARACTERS}_PENDING`: {
            return {
                ...state,
                loading: true,
            }
        }
        case `${GET_CHARACTERS}_REJECTED`: {
            console.log(action.payload); // logging the error message
            return {
                ...state,
                loading: false,
            }
        }
        default: return state;
    }
}

export default reducer;