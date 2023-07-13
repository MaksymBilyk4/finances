import React, {useState} from 'react';
import {Button, DatePicker, Input, InputNumber} from "antd";
import {parseDate} from "../utils/parseDate";
import {MinusCircleOutlined} from "@ant-design/icons";
import {create} from "../api/expense_api";

const Expenses = () => {

    const [date, setDate] = useState("");
    const [cost, setCost] = useState(0.00);
    const [description, setDescription] = useState("");

    const onDateChange = val => setDate(val?.$d || "");
    const onCostChange = val => setCost(val);
    const onDescriptionChange = e => setDescription(e.target.value);

    const onSubmit = () => {
        create({
            date: parseDate(date),
            name: description,
            cash: cost
        });

        setDescription("");
        setCost(0);
        setDate("");
    }

    return (
        <>
            <div>
                <p>Витрата: </p>
                <Input size="large"
                       placeholder="Введіть опис витрати"
                       value={description}
                       onChange={onDescriptionChange}
                       prefix={<MinusCircleOutlined/>}
                />
            </div>

            <div style={{marginTop: "10px"}}>
                <p>Дата: </p>
                <DatePicker format="DD.MM.YYYY"
                            onChange={onDateChange}
                />
            </div>

            <div style={{marginTop: "10px"}}>
                <p>Витрачена сума: </p>
                <InputNumber addonAfter="UAH"
                             defaultValue={0.00}
                             value={cost}
                             onChange={onCostChange}
                />
            </div>

            <Button onClick={onSubmit}
                    style={{marginTop: "10px"}}
                    type="primary"
                    disabled={date.length <= 0 || Number(cost) <= 0 || description.length <= 0}
            >Зберегти</Button>
        </>

    );
};

export default Expenses;