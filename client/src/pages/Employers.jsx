import React, {useState} from 'react';
import {create} from "../api/employers_api";
import {Button, Form, Input, message, Select} from "antd";
import {UserAddOutlined} from "@ant-design/icons";

const Employers = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const onNameChange = e => setName(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    const handleIsActiveChange = val => setStatus(val);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: "Працівника успішно створено"
        })
    }

    const onSubmit = () => {
        create({
            name: name,
            description: description,
            status: status
        });

        setName("");

        success();
    }

    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "22px"}}>Додати працівника</h1>
            {contextHolder}
            <Form onFinish={onSubmit}>
                <Form.Item
                    label={"Ім'я працівника"}
                    rules={[{
                        required: true,
                        message: "Введіть ім'я працівника.",
                    }]}
                    name="name"
                >
                    <Input
                        size={"large"}
                        placeholder={"введіть ім'я працівника"}
                        value={name}
                        onChange={onNameChange}
                        prefix={<UserAddOutlined/>}
                    />
                </Form.Item>

                <Form.Item
                    label={"Короткий коментар про працівника - опція не є обов'язковою"}
                    rules={[{
                        required: false
                    }]}
                    name={"description"}
                >
                    <Input
                        size={"large"}
                        placeholdre={"Коментар"}
                        value={description}
                        onChange={onDescriptionChange}
                    />
                </Form.Item>

                <Form.Item
                    label={"Статус працівника:"}
                    rules={[{
                        required: true
                    }]}
                    name={"isActive"}
                >
                    <Select
                        placeholder={"| Працює | У відпустці | Звільнений | На больнічному |"}
                        style={{width: "100%"}}
                        onChange={handleIsActiveChange}
                        value={status}
                        options={[
                            {label: "Працює", value: "WORKS"},
                            {label: "У відпустці", value: "VACATION"},
                            {label: "Звільнений", value: "DISMISSED"},
                            {label: "На больнічному", value: "SICK_LEAVE"}
                        ]}
                    />
                </Form.Item>

                <Button htmlType={"submit"}
                        style={{marginTop: "10px"}}
                        type={"primary"}
                >
                    Зберегти
                </Button>
            </Form>
        </>
    );
};

export default Employers;