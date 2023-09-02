import DaysData from "../pages/DaysData";
import Day from "../pages/Day";
import {PATH} from "./PATH";
import Expenses from "../pages/Expenses";
import ExpensesData from "../pages/ExpensesData";
import Editing from "../pages/Editing";
import Total from "../pages/Total";
import Employers from "../pages/Employers";
// import Salary from "../pages/Salary";
import EmployersData from "../pages/EmployersData";
import Employer from "../pages/Employer";
import SalaryData from "../pages/SalaryData";
import Home from "../pages/Home";

export const routes = [
    {
        element: <Home/>,
        path: PATH.HOME
    },
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
    },
    {
        element: <Employers/>,
        path: PATH.EMPLOYERS_ADMIN
    },
    // {
    //     element: <Salary/>,
    //     path: PATH.SALARY_ADMIN
    // },
    {
        element: <SalaryData/>,
        path: PATH.SALARY
    },
    {
        element: <EmployersData/>,
        path: PATH.EMPLOYERS
    },
    {
        element: <Employer/>,
        path: PATH.EMPLOYER
    }
]