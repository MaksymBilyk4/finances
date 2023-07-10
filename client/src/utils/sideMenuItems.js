import {
    DatabaseOutlined, DiffOutlined,
    MoneyCollectOutlined,
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {PATH} from "../routes/PATH";

export const sideMenuItems = [
    {
        key: "Expense",
        icon: <DiffOutlined/>,
        label: (<Link to={PATH.EXPENSES_ADMIN}>Додати витрати</Link>),
    },
    {
        key: "WorkingDay",
        icon: <MoneyCollectOutlined/>,
        label: (<Link to={PATH.DAY_ADMIN}>Додати дані за день</Link>),
    },
    {
        key: "Data",
        icon: <DatabaseOutlined/>,
        label: (<Link to={PATH.DATA}>Дані та Підрахунки</Link>),
    }
]