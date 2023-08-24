import React, {useEffect, useState} from 'react';
import {Button, DatePicker, Table} from "antd";
import {findAll, findByPeriod} from "../api/salary_api";
import {salaryTableColumns, salaryTableColumnsGeneral} from "../utils/salaryTableColumns";
const {RangePicker} = DatePicker;


const SalaryData = () => {

    const [salaryData, setSalaryData] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [showCalcs, setShowCalcs] = useState(false);
    const [result, setResult] = useState({});

    const onChange = (value, dateString) => {
        setStartDate(dateString[0])
        setEndDate(dateString[1])
    }
    const onDateSearch = () => {
        findByPeriod(startDate, endDate)
            .then(res => {
                setSalaryData(res?.data || []);

                const generalData = {
                    salary: 0,
                    employer: "Загальна ЗП в сумі",
                    able: false
                }

                generalData.able = res?.data.length > 0

                res?.data?.forEach(obj => {
                    generalData.salary += obj.salary
                });

                generalData.day = `${res?.data[0]?.day} - ${res?.data[res?.data?.length - 1]?.day}`
                setResult(generalData || {});
                setShowCalcs(true);
            })
    }

    useEffect(() => {
        findAll().then(res => setSalaryData(res?.data));
    }, []);

    return (
        <div>
            <h1 style={{fontSize: "22px", textAlign: "center", marginTop: "10px"}}>ЗП за 10 днів працівникам</h1>

            <div>
                <p style={{fontWeight: "bold"}}>ОТРИМАТИ ДАНІ ПРО ЗП: ВІД - ДО</p>

                <RangePicker
                    format={"DD.MM.YYYY"}
                    onChange={onChange}
                />

                <Button
                    disabled={startDate.length < 1 || endDate.length < 1}
                    type={"primary"}
                    onClick={onDateSearch}
                >
                    Шукати та отримати дані
                </Button>
            </div>

            {
                showCalcs && <Table
                    bordered
                    style={{marginTop: "20px"}}
                    columns={salaryTableColumnsGeneral}
                    dataSource={result.able ? [result] : []}
                    pagination={false}
                />
            }

            <Table
                bordered
                columns={salaryTableColumns}
                dataSource={salaryData}
                style={{marginTop: "20px"}}
                pagination={false}
            />
        </div>
    );
};

export default SalaryData;