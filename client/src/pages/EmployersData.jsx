import React, {useEffect, useState} from 'react';
import {findAll} from "../api/employers_api";
import {Table} from "antd";
import {employerTableColumns} from "../utils/employersTableColumns";

const EmployersData = () => {

    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        findAll().then(res => setEmployers(res?.data));
    });

    return (
        <div>
            <h1 style={{textAlign: "center", fontSize: "22px"}}>Працівники</h1>

            <Table
                bordered
                style={{marginTop: "20px"}}
                columns={employerTableColumns}
                dataSource={employers}
                pagination={false}
            />

        </div>
    );
};

export default EmployersData;