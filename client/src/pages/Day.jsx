import React, {useEffect, useState} from 'react';
import {Button, DatePicker, InputNumber, message, Select} from "antd";
import {parseDate} from "../utils/parseDate";
import {create} from "../api/day_api";
import {findAll} from "../api/employers_api";

const Day = () => {

    const [date, setDate] = useState("");
    const [employer, setEmployer] = useState("DARIA");
    const [cashProfit, setCashProfit] = useState(0);
    const [cardProfit, setCardProfit] = useState(0);
    const [profit, setProfit] = useState(0);
    const [employerPercent, setEmployerPercent] = useState(0);
    const [dailySalary, setDailySalary] = useState(0);
    // const [salary, setSalary] = useState(0);
    const [clearProfit, setClearProfit] = useState(0);
    const [showData, setShowData] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        findAll().then(res => {
            setEmployers(res?.data?.map(e => {
                return {value: e.name, label: e.name}
            }))
        });
    }, []);

    const onDateChange = val => setDate(val?.$d || "");
    const onEmployerChange = val => setEmployer(val);
    const onCashChange = val => setCashProfit(val);
    const onCardChange = val => setCardProfit(val);
    const onDailySalaryChange = val => setDailySalary(val);
    // const onSalaryChange = val => setSalary(val || 0);

    const onDataCalc = () => {
        const percent = Math.round((cardProfit + cashProfit) * 0.02);
        const earns = cardProfit + cashProfit

        setProfit(earns);
        setEmployerPercent(percent);
        setClearProfit(earns - dailySalary - percent);
        setShowData(true);
    }

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'День успішно створено',
        });
    };


    const onDataSave = () => {
        const data = {
            date: parseDate(date),
            employer: employer,
            cashProfit: cashProfit,
            cardProfit: cardProfit,
            profit: profit,
            employerPercent: employerPercent,
            dailySalary: dailySalary,
            salary: 0,
            clearProfit: clearProfit
        }

        create(data);

        setDate("");
        setCashProfit(0);
        setCardProfit(0);
        setProfit(0);
        setEmployerPercent(0);
        setDailySalary(0);
        // setSalary(0);
        setClearProfit(0);
        setShowData(false);
        success();
    }

    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "22px"}}>Додати робочий день (статистику)</h1>
            {contextHolder}
            <div>
                <p>Дата: </p>
                <DatePicker format="DD.MM.YYYY"
                            onChange={onDateChange}
                />
            </div>

            <div style={{marginTop: "10px"}}>
                <p>Працівник: </p>
                <Select
                    style={{width: 120,}}
                    onChange={onEmployerChange}
                    options={employers}
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

            {/*<div style={{marginTop: "10px"}}>*/}
            {/*    <p>З/П за 10 днів: </p>*/}
            {/*    <InputNumber addonAfter="UAH"*/}
            {/*                 defaultValue={0}*/}
            {/*                 value={salary}*/}
            {/*                 onChange={onSalaryChange}*/}
            {/*    />*/}
            {/*</div>*/}

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