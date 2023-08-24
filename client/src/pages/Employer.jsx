import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {findByName} from "../api/employers_api";
import {Table} from "antd";
import {salaryTableColumns} from "../utils/salaryTableColumns";

const Employer = () => {

    const [employer, setEmployer] = useState({});
    const [cash, setCash] = useState(0);

    const {name} = useParams();

    useEffect(() => {
        findByName(name).then(res => {
            setEmployer(res?.data);
            const s = res?.data?.salary?.reduce((p, c) => {
                return p+c.salary
            }, 0);
            setCash(s)
        });
    }, []);

    return (
        <div>
            <h2 style={{marginTop: "10px"}}>Працівник - {employer?.name}</h2>
            <h2 style={{marginTop: "10px"}}>Короткий опис: {employer?.description}</h2>
            <h1 style={{marginTop: "10px"}}>Зароблено за весь час: {cash} грн</h1>
            <h1 style={{textAlign: "center", fontSize: "22px", marginTop: "10px"}}>Інформація про ЗП:</h1>

            <Table
                bordered
                style={{marginTop: "15px"}}
                dataSource={employer?.salary}
                columns={salaryTableColumns}
                pagination={false}
            />
        </div>
    );
};

export default Employer;