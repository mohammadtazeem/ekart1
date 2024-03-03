import {
    ADD_BRAND_RED, DELETE_BRAND_RED, GET_BRAND_RED,
    UPDATE_BRAND_RED
} from "../Constants"
export default function BrandReducer(state = [], action) {
    let newState, index
    switch (action.type) {
        case GET_BRAND_RED:
            return action.payload
        case ADD_BRAND_RED:
            newState = state
            newState.push(action.payload)
            return newState
        case UPDATE_BRAND_RED:
            newState = state
            index = state.findIndex((x) => x.id === action.payload.id)
            newState[index].name = action.payload.name
            return newState
        case DELETE_BRAND_RED:
            newState = state.filter((x) => x.id !== action.payload.id)
            return newState
        default:
            return state
    }
}