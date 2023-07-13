import DaysData from "../pages/DaysData";
import Day from "../pages/Day";
import {PATH} from "./PATH";
import Expenses from "../pages/Expenses";
import ExpensesData from "../pages/ExpensesData";
import Editing from "../pages/Editing";
import Total from "../pages/Total";

export const routes = [
    {
        element: <DaysData/>,
        path: PATH.DAY_DATA
    },
    {
        element: <Day/>,
        path: PATH.DAY_ADMIN
    },
    {
        element: <Expenses/>,
        path: PATH.EXPENSES_ADMIN
    },
    {
        element: <ExpensesData/>,
        path: PATH.EXPENSE_DATA
    },
    {
        element: <Editing/>,
        path: PATH.EDITING
    },
    {
        element: <Total/>,
        path: PATH.TOTAL
    }
]