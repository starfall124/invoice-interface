import React from "react";
import moment from "moment";
import {
    Row,
    Form,
    Input,
    InputNumber,
    DatePicker,
    AutoComplete,
    Button,
    Card,
} from "antd";

import { Client, Invoice } from "@types";
import styles from "./invoiceForm.module.scss";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 20,
    },
};
const initialValues = {
    description: "",
};
const disabledDate = (current: moment.Moment) => {
    return current && current < moment().subtract(1, "days").endOf("day");
};

export type IInvoiceForm = {
    clients: Client[];
};

export const InvoiceForm: React.FC<IInvoiceForm> = ({ clients }) => {
    const [form] = Form.useForm();

    const onFinish = (values: Invoice) => {
        console.log({ invoice: values });
    };

    return (
        <Row className={styles.invoiceForm} justify="center" align="middle">
            <Card>
                <Form
                    name="invoiceForm"
                    {...layout}
                    initialValues={initialValues}
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Client"
                        name="client"
                        rules={[
                            {
                                required: true,
                                message: "Client is required",
                            },
                        ]}
                    >
                        <AutoComplete
                            placeholder="Select Client"
                            options={clients}
                            filterOption={(inputValue, option) =>
                                option?.value
                                    .toUpperCase()
                                    .indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        name="amount"
                        label="Amount"
                        rules={[
                            {
                                type: "number",
                                required: true,
                                message: "Amount is required",
                                min: 0,
                            },
                        ]}
                    >
                        <InputNumber
                            min={0}
                            formatter={(value) => `$ ${value}`}
                        />
                    </Form.Item>

                    <Form.Item name="description" label="Description">
                        <Input.TextArea placeholder="Description" />
                    </Form.Item>

                    <Form.Item
                        name="dueDate"
                        label="Due Date"
                        rules={[
                            {
                                required: true,
                                message: "Due Date is required",
                            },
                        ]}
                    >
                        <DatePicker
                            placeholder="Due Date"
                            disabledDate={disabledDate}
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    );
};
