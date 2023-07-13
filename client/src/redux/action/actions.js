import {findAll as findAllDays} from "../../api/day_api";
import {findAll as findAllExpenses} from "../../api/expense_api";

export const GET_ALL_DAYS = "GET_ALL_DAYS";
export const GET_ALL_EXPENSES = "GET_ALL_EXPENSES";

export const getAllDays = () => async (dispatch) => {
    await findAllDays()
        .then(res => {
            dispatch({type: GET_ALL_DAYS, payload: res?.data})
        })
}

export const getAllExpenses = () => async (dispatch) => {
    await findAllExpenses()
        .then(res => {
            dispatch({type: GET_ALL_EXPENSES, payload: res?.data})
        })
}