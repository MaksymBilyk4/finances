import React, {useEffect, useState} from 'react';
import {Button, DatePicker, Table} from "antd";
import {expenseTableColumns} from "../utils/expenseTableColumns";
import {findAll, findByPeriod} from "../api/expense_api";

const {RangePicker} = DatePicker;

const ExpensesData = () => {

    const [expenses, setExpenses] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [result, setResult] = useState({});
    const [showCalcs, setShowCalcs] = useState(false);

    useEffect(() => {
        findAll().then(data => setExpenses(data.data));
    }, []);

    const onChange = (value, dateString) => {
        setStartDate(dateString[0]);
        setEndDate(dateString[1]);
    }

    const onDateSearch = () => {
        findByPeriod(startDate, endDate)
            .then(res => {
                setExpenses(res?.data || []);

                const generalCalcs = {
                    cash: 0
                }

                res?.data?.forEach(obj => {
                    generalCalcs.cash += obj.cash;
                });

                generalCalcs.name = "Всі витрати за вибраний період"
                generalCalcs.date = `${res?.data[0].date} - ${res?.data[res?.data?.length - 1].date}`
                setResult(generalCalcs || {});
                setShowCalcs(true);
            });
    }

    return (
        <div>
            <h1 style={{textAlign: "center", fontSize: "22px"}}>Таблиця статистики витрат</h1>
            <div>
                <p style={{fontWeight: "bold"}}>ОТРИМАТИ ВИТРАТИ: ВІД - ДО</p>

                <RangePicker
                    format={"DD.MM.YYYY"}
                    onChange={onChange}
                />
                <Button
                    disabled={startDate.length < 1 || endDate.length < 1}
                    type={"primary"}
                    onClick={onDateSearch}
                >
                    Шукати та отримати підрахунки
                </Button>
            </div>

            {showCalcs &&
                <Table
                    bordered
                    style={{marginTop: "20px"}}
                    columns={expenseTableColumns}
                    dataSource={[result]}
                    pagination={false}
                />
            }

            <Table
                bordered
                style={{marginTop: "20px"}}
                columns={expenseTableColumns}
                dataSource={expenses}
                pagination={
                    endDate.length > 0 ?
                        {
                            pageSize: Number(endDate.slice(0, 2))
                        } : false
                }
            />
        </div>
    );
};

export default ExpensesData;