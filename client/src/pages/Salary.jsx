import React, {useEffect, useState} from 'react';
import {findAll} from "../api/employers_api";
import {Button, DatePicker, Form, InputNumber, message, Select} from "antd";
import {create} from "../api/salary_api";
import {parseDate} from "../utils/parseDate";

const Salary = () => {

    const [messageApi, contextHolder] = message.useMessage();

    const [employers, setEmployers] = useState([]);

    const [employerId, setEmployerId] = useState("");
    const [date, setDate] = useState("");
    const [salary, setSalary] = useState(0.00);

    const handleEmployerChange = val => setEmployerId(val);
    const onSalaryChange = val => setSalary(val);
    const onDateChange = val => setDate(val?.$d || "");

    useEffect(() => {
        findAll().then(res => setEmployers(res?.data));
    }, []);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: "ЗП успішно додано до таблиці"
        });
    }

    const onSubmit = () => {
        create({
            date: parseDate(date),
            salary: salary,
            employerId: employerId
        });

        success();

    }

    return (
        <>
            <h1 style={{fontSize: "22px", textAlign: "center", marginTop: "10px"}}>ЗП. Додати З/П працівнику (за 10 днів)</h1>

            {contextHolder}

            <Form onFinish={onSubmit}>

                <Form.Item
                    name={"date"}
                    label={"Виберіть дату ЗП"}
                    rules={[{
                        required: true,
                        message: "Виеріть дату ЗП!"
                    }]}
                >
                    <DatePicker format="DD.MM.YYYY"
                                onChange={onDateChange}
                    />
                </Form.Item>

                <Form.Item
                    name={"employer"}
                    label={"Виберіть ім'я працівника"}
                    rules={[{
                        required: true,
                        message: "Виберіть ім'я працівника.",
                    }]}
                >
                    <Select
                        placeholder={"Виберіть працівника"}
                        style={{width: "100%"}}
                        onChange={handleEmployerChange}
                        value={employerId}
                        options={employers?.map(e => {return {label: e.name, value: e.id}})}
                    />
                </Form.Item>

                <Form.Item
                    name={"salary"}
                    label={"Введіть ЗП"}
                    rules={[{
                        required: true,
                        message: "Введіть ЗП працівника"
                    }]}
                >
                    <InputNumber
                        placeholder={"Введіть ЗП"}
                        addonAfter="UAH"
                        value={salary}
                        onChange={onSalaryChange}
                    />
                </Form.Item>

                <Button
                    type={"primary"}
                    htmlType={"submit"}
                >
                    Зберегти
                </Button>

            </Form>

        </>
    );
};

export default Salary;