import {initialInputState} from "../initialState";
import {constants} from "../constants";

export default function inputReducer(state = initialInputState, action) {
    switch (action.type) {
        case constants.changeInput:
            return action.payload
        default:
            return state
    }
}