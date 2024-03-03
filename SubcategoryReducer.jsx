import {
    ADD_SUBCATEGORY_RED, DELETE_SUBCATEGORY_RED, GET_SUBCATEGORY_RED,
    UPDATE_SUBCATEGORY_RED
} from "../Constants"
export default function SubcategoryReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case GET_SUBCATEGORY_RED:
            return action.payload
        case ADD_SUBCATEGORY_RED:
            newState = state
            console.log(newState);
            newState.push(action.payload)
            return newState
        case UPDATE_SUBCATEGORY_RED:
            console.log(state, action.payload);
            newState = state
            index = state.findIndex((x) => x.id === action.payload.id)
            console.log(index);
            newState[index].name = action.payload.name
            return newState
        case DELETE_SUBCATEGORY_RED:
            newState = state.filter((x) => x.id !== action.payload.id)
            return newState 
        default:
            return state
    }
}