import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {daysTableColumns} from "../utils/daysTableColumns";
import {findAll} from "../api/day_api";

const DaysData = () => {

    const [days, setDays] = useState([]);

    useEffect( () => {
        findAll().then(data => setDays(data?.data));
    }, []);


    return (
        <div>
            <Table
                columns={daysTableColumns}
                dataSource={days}
                pagination={{
                    pageSize: 7
                }}
            />
        </div>
    );
};

export default DaysData;