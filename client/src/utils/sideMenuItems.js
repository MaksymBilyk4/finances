import {
    AppstoreOutlined,
    DatabaseOutlined, DiffOutlined, EditOutlined, HomeOutlined,
    MoneyCollectOutlined, ScheduleOutlined, TableOutlined, TeamOutlined, TransactionOutlined,
} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {PATH} from "../routes/PATH";

export const sideMenuItems = [
    {
        key: PATH.HOME,
        icon: <HomeOutlined/>,
        label: (<Link to={PATH.HOME}>Документація</Link>),
        description: "На цій сторінкі ви зараз знаходитесь і можете розібратись що до чого"
    },
    {
        key: PATH.DAY_ADMIN,
        icon: <MoneyCollectOutlined/>,
        label: (<Link to={PATH.DAY_ADMIN}>Додати день - внесок даних</Link>),
        description: "На цій сторінкі ви можете додати робочий день, та всі дані про нього, хто працював, скільки грошей зароблено і тп"
    },
    {
        key: PATH.DAY_DATA,
        icon: <DatabaseOutlined/>,
        label: (<Link to={PATH.DAY_DATA}>Робочі дні - таблиця даних</Link>),
        description: "На цій сторінкі можна проглянути повну таблицю данних про всі дні, та вибрати окремий період роботи"
    },
    {
        key: PATH.EXPENSES_ADMIN,
        icon: <DiffOutlined/>,
        label: (<Link to={PATH.EXPENSES_ADMIN}>Додати витрати - внесок даних</Link>),
        description: "На цій сторінкі ви можете додати повсякденні витрати на магазин"
    },
    {
        key: PATH.EXPENSE_DATA,
        icon: <DatabaseOutlined/>,
        label: (<Link to={PATH.EXPENSE_DATA}>Витрати - таблиця даних</Link>),
        description: "На цій сторінкі можна переглянути таблицю з усіма витратами та продивитись витрати за окремий період"
    },
    {
        key: PATH.SALARY_ADMIN,
        icon: <TransactionOutlined/>,
        label: (<Link to={PATH.SALARY_ADMIN}>ЗП - додати З/П</Link>),
        description: "На цій сторінкі ви можете вписувати скільки і кому ви заплатили ЗП за 10 днів"
    },

    {
        key: PATH.SALARY,
        icon: <TableOutlined/>,
        label: (<Link to={PATH.SALARY}>Таблиця ЗП</Link>),
        description: "На цій сторінкі ви можете переглянути всі історії ЗП, кому і скільки, а також продивитись за окремий період"
    },
    {
        key: PATH.EMPLOYERS_ADMIN,
        icon: <TeamOutlined/>,
        label: (<Link to={PATH.EMPLOYERS_ADMIN}>Праціввники - додати працівника</Link>),
        description: "На цій сторінкі ви можете додати нових працівників в свій магазин"
    },
    {
        key: PATH.EMPLOYERS,
        icon: <AppstoreOutlined/>,
        label: (<Link to={PATH.EMPLOYERS}>Працівники</Link>),
        description: "На цій сторінкі ви можете перегляну весь список працівників, та натиснути на когось одного щоб подивитись деталнішу інформацію"
    },
    {
        key: PATH.TOTAL,
        icon: <ScheduleOutlined/>,
        label: (<Link to={PATH.TOTAL}>Тотал - підрахувати всі витрати та доходи</Link>),
        description: "На цій сторінкі ви можете вибрати період та програми обрахує чистий прибуток з урахунком всіх витрат і ЗП"
    },
    {
        key: PATH.EDITING,
        icon: <EditOutlined/>,
        label: (<Link to={PATH.EDITING}>Видалення - видалити дані</Link>),
        description: "Тут можна видалити не потрібні або не правильні дані які ви внесли"
    },
]