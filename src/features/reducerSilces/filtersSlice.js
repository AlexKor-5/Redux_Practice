import {initialFiltersState} from "../initialState";
import {constants} from "../constants";

export default function filtersReducer(state = initialFiltersState, action) {
    switch (action.type) {
        case constants.changeFilterStatus:
            return {
                ...state,
                filterStatus: action.payload
            };
        case constants.addColorToFilter:
            return {
                ...state,
                filterColors: [
                    ...state.filterColors,
                    action.payload
                ]
            };
        case constants.removeColorInFilter:
            return {
                ...state,
                filterColors: state.filterColors.filter(color => color !== action.payload)
            }
        default:
            return state
    }
}