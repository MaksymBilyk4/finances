import Data from "../pages/Data";
import Day from "../pages/Day";
import {PATH} from "./PATH";
import Expenses from "../pages/Expenses";

export const routes = [
    {
        element: <Data/>,
        path: PATH.DATA
    },
    {
        element: <Day/>,
        path: PATH.DAY_ADMIN
    },
    {
        element: <Expenses/>,
        path: PATH.EXPENSES_ADMIN
    }
]