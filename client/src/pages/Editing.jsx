import React, {useEffect, useState} from 'react';
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {deleteById as deleteByIdDay} from "../api/day_api";
import {deleteById as deleteByIdExpense} from "../api/expense_api";
import {findAll as findAllExpenses} from "../api/expense_api";
import {findAll as findAllDays} from "../api/day_api";

const Editing = () => {

    const [days, setDays] = useState([]);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        findAllExpenses().then(res => setExpenses(res?.data));
        findAllDays().then(res => setDays(res?.data));
    }, []);


    const onHandleDeleteDay = (id) => {
        deleteByIdDay(id);
    }

    const onHandleDeleteExpense = (id) => {
        deleteByIdExpense(id);
    }

    return (
        <>
            <h1 style={{fontSize: "24px", marginBottom: "30px", textAlign: "center"}}>Видалення даних</h1>
            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 50%)"}}>
                <div>
                    <h2>Робочі дні:</h2>
                    {days?.map(item =>
                        <p style={{fontSize: "18px"}}>
                            {item?.day} - <Button onClick={() => onHandleDeleteDay(item?.id)} danger
                                                  style={{marginRight: "5px"}}
                                                  type={"primary"}><DeleteOutlined/></Button>
                        </p>
                    )}
                </div>

                <div style={{justifySelf: "end"}}>
                    <h2>Витрати:</h2>
                    {expenses?.map(item =>
                        <p style={{fontSize: "18px"}}>
                            {item?.date} - <Button onClick={() => onHandleDeleteExpense(item?.id)}
                                                   danger
                                                   style={{marginRight: "5px"}}
                                                   type={"primary"}><DeleteOutlined/></Button>
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Editing;