import Data from "../pages/Data";
import {PATH} from "./PATH";
import Admin from "../pages/Admin";

export const routes = [
    {
        element: <Data/>,
        path: PATH.DATA
    },
    {
        element: <Admin/>,
        path: PATH.ADMIN
    }
]