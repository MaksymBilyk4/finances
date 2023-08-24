import {Link} from "react-router-dom";
import {PATH} from "../routes/PATH";
import Price from "../components/Typography/Price";

export const salaryTableColumns = [
    {
        title: "Дата",
        dataIndex: "day",
        width: "33%"
    },
    {
        title: "ЗП",
        dataIndex: "salary",
        width: "33%",
        render: (salary) => <Price price={Number(-salary)}/>
    },
    {
        title: "Працівник",
        dataIndex: "employer",
        width: "33%",
        render: (empl) => <Link to={PATH.employer(empl)}>{empl}</Link>
    }
]

export const salaryTableColumnsGeneral = [
    {
        title: "Дата",
        dataIndex: "day",
        width: "50%"
    },
    {
        title: "ЗП",
        dataIndex: "salary",
        width: "50%",
        render: (salary) => <Price price={Number(-salary)}/>
    },
]