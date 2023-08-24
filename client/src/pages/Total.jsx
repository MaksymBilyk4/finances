import React, {useState} from 'react';
import {Button, DatePicker, Table} from "antd";
import {findByPeriod as dayPeriod} from "../api/day_api";
import {findByPeriod as expensePeriod} from "../api/expense_api";
import {findByPeriod as salaryPeriod} from "../api/salary_api";
import {combinedData} from "../utils/combinedData";
import {daysTableColumns} from "../utils/daysTableColumns";
import {expenseTableColumns} from "../utils/expenseTableColumns";
import {salaryTableColumns} from "../utils/salaryTableColumns";

const {RangePicker} = DatePicker;

const Total = () => {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [total, setTotal] = useState({
        date: "",
        employerSalary: 0,
        cash: 0,
        cardProfit: 0,
        cashProfit: 0,
        profit: 0,
        dailySalary: 0,
        employerPercent: 0,
        salary: 0,
        clearProfit: 0,
    })

    const [expenses, setExpenses] = useState([]);
    const [day, setDay] = useState([]);
    const [salary, setSalary] = useState([]);

    const onChange = (value, dateString) => {
        setStartDate(dateString[0]);
        setEndDate(dateString[1]);
    }

    const onDateSearch = () => {
        dayPeriod(startDate, endDate)
            .then(res => {
                setDay(res?.data);

                res?.data?.forEach(d => {
                    total.cardProfit += d.cardProfit;
                    total.cashProfit += d.cashProfit;
                    total.profit += d.profit;
                    total.dailySalary += d.dailySalary;
                    total.employerPercent += d.employerPercent;
                    total.salary += d.salary;
                    total.clearProfit += d.clearProfit;
                });

                total.date = res?.data?.length > 0 ?
                    `${res?.data[0]?.day} - ${res?.data[res?.data?.length - 1]?.day}` :
                    `${startDate} - ${endDate}`;
            });

        expensePeriod(startDate, endDate)
            .then(res => {
                setExpenses(res?.data);

                res?.data?.forEach(e => {
                    total.cash += e.cash;
                    total.clearProfit += -e.cash;
                });
            });

        salaryPeriod(startDate, endDate)
            .then(res => {
                setSalary(res?.data)

                res?.data?.forEach(s => {
                    total.employerSalary += s.salary;
                    total.clearProfit += -s.salary
                })
            })
    }

    return (
        <div>
            <h1 style={{textAlign: "center", fontSize: "22px"}}>Тотал - повна статистика за вибраний період</h1>

            <div>
                <p style={{fontWeight: "bold"}}>ОТРИМАТИ ТОТАЛ: ВІД - ДО</p>

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

            <p style={{fontWeight: "bold", marginTop: "20px", textAlign: "center"}}>ТОТАЛ</p>
            <Table
                style={{marginTop: "5px",}}
                pagination={false}
                dataSource={total.date.length > 0 ? [total] : []}
                bordered={true}
                columns={combinedData}
            />

            <p style={{fontWeight: "bold", marginTop: "20px", textAlign: "center"}}>РОБОЧІ ДНІ</p>
            <Table
                style={{marginTop: "5px"}}
                pagination={false}
                dataSource={day}
                bordered={true}
                columns={daysTableColumns}
            />

            <p style={{fontWeight: "bold", marginTop: "20px", textAlign: "center"}}>ВИТРАТИ</p>
            <Table
                style={{marginTop: "5px"}}
                pagination={false}
                dataSource={expenses}
                bordered={true}
                columns={expenseTableColumns}
            />

            <p style={{fontWeight: "bold", marginTop: "20px", textAlign: "center"}}>ЗП</p>
            <Table
                style={{marginTop: "5px"}}
                pagination={false}
                dataSource={salary}
                bordered={true}
                columns={salaryTableColumns}
            />

        </div>
    );
};

export default Total;