import {
    CalculatorOutlined,
    CalendarOutlined,
    HomeOutlined,
    OrderedListOutlined,
    TeamOutlined
} from "@ant-design/icons";

export const sideMenuItems = [
    {
        key: "Admin",
        icon: <HomeOutlined/>,
        label: "Головна",
    },
    {
        key: "Expense",
        icon: <TeamOutlined />,
        label: "Витрати",
    },
    {
        key: "Calculating",
        icon: <CalculatorOutlined />,
        label: "Дані та Підрахунки"
    }
]