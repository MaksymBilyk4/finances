import React, {useState} from 'react';
import {Button, DatePicker, InputNumber, Select} from "antd";
import {parseDate} from "../utils/parseDate";
import {create} from "../api/day_api";

const Day = () => {

    const [date, setDate] = useState("");
    const [employer, setEmployer] = useState("DARIA");
    const [cashProfit, setCashProfit] = useState(0);
    const [cardProfit, setCardProfit] = useState(0);
    const [profit, setProfit] = useState(0);
    const [employerPercent, setEmployerPercent] = useState(0);
    const [dailySalary, setDailySalary] = useState(0);
    const [salary, setSalary] = useState(0);
    const [clearProfit, setClearProfit] = useState(0);
    const [showData, setShowData] = useState(false);

    const onDateChange = val => setDate(val?.$d || "");
    const onEmployerChange = val => setEmployer(val);
    const onCashChange = val => setCashProfit(val);
    const onCardChange = val => setCardProfit(val);
    const onDailySalaryChange = val => setDailySalary(val);
    const onSalaryChange = val => setSalary(val || 0);

    const onDataCalc = () => {
        const percent = (cardProfit + cashProfit) * 0.02;
        const earns = cardProfit + cashProfit

        setProfit(earns);
        setEmployerPercent(percent);
        setClearProfit(earns - salary - dailySalary - percent);
        setShowData(true);
    }

    const onDataSave = () => {
        const data = {
            date: parseDate(date),
            employer: employer,
            cashProfit: cashProfit,
            cardProfit: cashProfit,
            profit: profit,
            employerPercent: employerPercent,
            dailySalary: dailySalary,
            salary: salary,
            clearProfit: clearProfit
        }

        const resp = create(data);
    }

    return (
        <>
            <div>
                <p>Дата: </p>
                <DatePicker format="DD.MM.YYYY"
                            onChange={onDateChange}
                />
            </div>

            <div style={{marginTop: "10px"}}>
                <p>Працівник: </p>
                <Select
                    defaultValue="DARIA"
                    style={{width: 120,}}
                    onChange={onEmployerChange}
                    options={[
                        {
                            value: 'DARIA',
                            label: 'Даша',
                        },
                        {
                            value: 'YULIA',
                            label: 'Юля',
                        }
                    ]}
                />
            </div>

            <div style={{marginTop: "10px"}}>
                <p>Дохід готівкою: </p>
                <InputNumber addonAfter="UAH"
                             defaultValue={0}
                             value={cashProfit}
                             onChange={onCashChange}
                />
            </div>

            <div style={{marginTop: "10px"}}>
                <p>Дохід карткою: </p>
                <InputNumber addonAfter="UAH"
                             defaultValue={0}
                             value={cardProfit}
                             onChange={onCardChange}
                />
            </div>

            <div style={{marginTop: "10px"}}>
                <p>З/П за день: </p>
                <InputNumber addonAfter="UAH"
                             defaultValue={0}
                             value={dailySalary}
                             onChange={onDailySalaryChange}
                />
            </div>

            <div style={{marginTop: "10px"}}>
                <p>З/П за 10 днів: </p>
                <InputNumber addonAfter="UAH"
                             defaultValue={0}
                             value={salary}
                             onChange={onSalaryChange}
                />
            </div>

            <div>
                <Button onClick={onDataCalc}
                        style={{margin: "10px 0"}}
                        type="default"
                >Провести підрахунки</Button>
                {showData &&
                    <>
                        <p>Дохід: {profit} UAH</p>
                        <p>{employer} (2%): {employerPercent} UAH</p>
                        <p>Чистий дохід: {clearProfit} UAH</p>
                    </>
                }
            </div>

            <div>
                <Button style={{margin: "10px 0"}}
                        type="primary"
                        disabled={!showData}
                        onClick={onDataSave}
                >Зберегти</Button>
            </div>
        </>
    );
};

export default Day;