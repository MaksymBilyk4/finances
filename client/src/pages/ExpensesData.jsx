import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {expenseTableColumns} from "../utils/expenseTableColumns";
import {findAll} from "../api/expense_api";

const ExpensesData = () => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        findAll().then(data => setExpenses(data.data));
    }, []);

    return (
        <div>
            <Table
                columns={expenseTableColumns}
                dataSource={expenses}
                pagination={{
                    pageSize: 20
                }}
            />
        </div>
    );
};

export default ExpensesData;