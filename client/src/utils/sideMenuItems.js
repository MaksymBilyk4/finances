import {
    DatabaseOutlined, DiffOutlined, EditOutlined,
    MoneyCollectOutlined, ScheduleOutlined,
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {PATH} from "../routes/PATH";

export const sideMenuItems = [
    {
        key: PATH.DAY_ADMIN,
        icon: <MoneyCollectOutlined/>,
        label: (<Link to={PATH.DAY_ADMIN}>Додати день - внесок даних</Link>),
    },
    {
        key: PATH.DAY_DATA,
        icon: <DatabaseOutlined/>,
        label: (<Link to={PATH.DAY_DATA}>Робочі дні - таблиця даних</Link>),
    },
    {
        key: PATH.EXPENSES_ADMIN,
        icon: <DiffOutlined/>,
        label: (<Link to={PATH.EXPENSES_ADMIN}>Додати витрати - внесок даних</Link>),
    },
    {
        key: PATH.EXPENSE_DATA,
        icon: <DatabaseOutlined/>,
        label: (<Link to={PATH.EXPENSE_DATA}>Витрати - таблиця даних</Link>),
    },
    {
        key: PATH.TOTAL,
        icon: <ScheduleOutlined />,
        label: (<Link to={PATH.TOTAL}>Тотал - підрахувати всі витрати та доходи</Link>)
    },
    {
        key: PATH.EDITING,
        icon: <EditOutlined />,
        label: (<Link to={PATH.EDITING}>Видалення - видалити дані</Link>)
    }
]