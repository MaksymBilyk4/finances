import React, {useEffect, useState} from 'react';
import {Button, DatePicker, Table} from "antd";
import {daysTableColumns} from "../utils/daysTableColumns";
import {findAll, findByPeriod} from "../api/day_api";

const {RangePicker} = DatePicker;

const DaysData = () => {

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [days, setDays] = useState([]);
    const [showCalcs, setShowCalcs] = useState(false);
    const [result, setResult] = useState({});

    useEffect(() => {
        findAll().then(data => setDays(data?.data));
    }, []);

    const onChange = (value, dateString) => {
        setStartDate(dateString[0])
        setEndDate(dateString[1])
    };

    const onDateSearch = () => {
        findByPeriod(startDate, endDate)
            .then(res => {
                setDays(res.data);

                const generalCalcs = {
                    cardProfit: 0,
                    cashProfit: 0,
                    profit: 0,
                    dailySalary: 0,
                    employerPercent: 0,
                    salary: 0,
                    clearProfit: 0,
                }

                res?.data?.forEach(obj => {
                    generalCalcs.cardProfit += obj.cardProfit;
                    generalCalcs.cashProfit += obj.cashProfit;
                    generalCalcs.profit += obj.profit;
                    generalCalcs.dailySalary += obj.profit;
                    generalCalcs.employerPercent += obj.employerPercent;
                    generalCalcs.salary += obj.salary;
                    generalCalcs.clearProfit += obj.clearProfit;
                });

                generalCalcs.day = `${res?.data[0].day} - ${res?.data[res?.data?.length - 1].day}`
                setResult(generalCalcs);
                setShowCalcs(true);
            });
    }


    return (
        <div>
            <div>
                <p>
                    ОТРИМАТИ ДНІ: ВІД - ДО
                </p>
                <RangePicker
                    format={"DD.MM.YYYY"}
                    onChange={onChange}
                />
                <Button
                    disabled={startDate.length < 1 || endDate.length < 1}
                    type={"primary"}
                    onClick={onDateSearch}
                >Шукати та отримати підрахунки</Button>
            </div>

            <Table
                style={{marginTop: "20px"}}
                columns={daysTableColumns}
                dataSource={days}
                pagination={{
                    pageSize: 7
                }}
            />

            {showCalcs &&
                <Table
                    style={{marginTop: "20px"}}
                    columns={daysTableColumns}
                    dataSource={[result]}
                    pagination={false}
                />
            }

        </div>
    );
};

export default DaysData;