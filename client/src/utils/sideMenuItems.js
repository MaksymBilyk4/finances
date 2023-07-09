import {
    DatabaseOutlined, DiffOutlined,
    MoneyCollectOutlined,
} from "@ant-design/icons";

export const sideMenuItems = [
    {
        key: "Expense",
        icon: <DiffOutlined/>,
        label: "Додати витрати",
    },
    {
        key: "WorkingDay",
        icon: <MoneyCollectOutlined/>,
        label: "Додати статистику за робочий день",
    },
    {
        key: "Data",
        icon: <DatabaseOutlined/>,
        label: "Дані та Підрахунки"
    }
]