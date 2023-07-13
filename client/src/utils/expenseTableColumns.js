import Price from "../components/Typography/Price";

export const expenseTableColumns = [
    {
        title: "Дата",
        dataIndex: "date",
        width: "20%",
    },
    {
        title: "Опис",
        dataIndex: "name",
        width: "60%"
    },
    {
        title: "Кількість грошей (грн)",
        dataIndex: "cash",
        width: "20%",
        render: (cash) => <Price price={Number(-cash)}/>
    }
];