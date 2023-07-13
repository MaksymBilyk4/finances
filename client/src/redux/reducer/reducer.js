import {GET_ALL_DAYS, GET_ALL_EXPENSES} from "../action/actions";

const initialObj = {
    days: [],
    expenses: []
}

export const reducer = (state = initialObj, action) => {
    switch (action.type) {
        case GET_ALL_DAYS:
            return {...state, days: action.payload}
        case GET_ALL_EXPENSES:
            return {...state, expenses: action.payload}
        default:
            return state
    }
}