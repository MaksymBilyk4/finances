import React, {useState} from 'react';
import {Button, DatePicker, Form, Input, InputNumber, message} from "antd";
import {parseDate} from "../utils/parseDate";
import {MinusCircleOutlined} from "@ant-design/icons";
import {create} from "../api/expense_api";

const Expenses = () => {

    const [date, setDate] = useState("");
    const [cost, setCost] = useState(0.00);
    const [description, setDescription] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const onDateChange = val => setDate(val?.$d || "");
    const onCostChange = val => setCost(val);
    const onDescriptionChange = e => setDescription(e.target.value);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Витрату успішно створено',
        });
    };

    const onSubmit = () => {
        create({
            date: parseDate(date),
            name: description,
            cash: cost
        });

        setDescription("");
        setCost(0);
        setDate("");

        success();
    }

    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "22px"}}>Додати витрату</h1>
            {contextHolder}
            <Form onFinish={onSubmit}>
                <Form.Item
                    label="Опис витрати"
                    rules={[{
                        required: true,
                        message: "Введіть опис витрати. На приклад: сміття, комуналка"
                    }]}
                    name="description"
                >
                    <Input
                        size="large"
                        placeholder="Введіть опис витрати"
                        value={description}
                        onChange={onDescriptionChange}
                        prefix={<MinusCircleOutlined/>}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginTop: "10px"}}
                    label={"Дата витрати"}
                    rules={[{
                        required: true,
                        message: "Виберіть дату покупки"
                    }]}
                    name="date"
                >
                    <DatePicker format="DD.MM.YYYY"
                                onChange={onDateChange}
                    />
                </Form.Item>

                <Form.Item
                    style={{marginTop: "10px"}}
                    label="Вартість витрати"
                    rules={[{
                        required: true,
                        message: "Введіть вартість покупки"
                    }]}
                    name="cost"
                >
                    <InputNumber addonAfter="UAH"
                                 defaultValue={0.00}
                                 value={cost}
                                 onChange={onCostChange}
                    />
                </Form.Item>

                <Button htmlType={"submit"}
                        style={{marginTop: "10px"}}
                        type="primary"
                    // disabled={date.length <= 0 || Number(cost) <= 0 || description.length <= 0}
                >Зберегти</Button>
            </Form>
        </>
    );
};

export default Expenses;