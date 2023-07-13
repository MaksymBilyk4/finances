import Price from "../components/Typography/Price";

export const combinedData = [
    {
        title: "Дата",
        dataIndex: "date",
        width: "10%",
    },
    {
        title: "Витрати",
        dataIndex: "cash",
        width: "10%",
        render: (cash) => <Price price={Number(-cash)}/>
    },
    {
        title: "Карта",
        dataIndex: "cardProfit",
        width: "10%",
    },
    {
        title: "Готівка",
        dataIndex: "cashProfit",
        width: "10%",
    },
    {
        title: "Сума",
        dataIndex: "profit",
        width: "10%",
        render: (profit) => <Price price={profit}/>
    },
    {
        title: "ЗП",
        dataIndex: "dailySalary",
        width: "10%",
        render: (dailySalary) => <Price price={-dailySalary}/>
    },
    {
        title: "2%",
        dataIndex: "employerPercent",
        width: "10%",
        render: (percent) => <Price price={-Math.round(percent)}/>
    },
    {
        title: "10дн.",
        dataIndex: "salary",
        width: "10%",
        render: (salary) => <Price price={salary !== 0 ? -salary : salary}/>
    },
    {
        title: "Чисті",
        dataIndex: "clearProfit",
        width: "10%",
        render: (clearProfit) => <Price price={clearProfit}/>
    }
]