import {initialFiltersState} from "../initialState";
import {constants} from "../constants";

export default function filtersReducer(state = initialFiltersState, action) {
    switch (action.type) {
        case constants.changeFilterStatus:
            return {
                ...state,
                filterStatus: action.payload
            }
        default:
            return state
    }
}