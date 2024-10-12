import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../../redux/crud/action";
import { selectCreatedItem } from "../../../redux/crud/selector";

import { Button, Form } from "antd";
import Loading from "../../../components/Loading";

export default function Create({ entity, formElements }) {
    const dispatch = useDispatch();
    const { isLoading, isSuccess } = useSelector(selectCreatedItem);
    const [form] = Form.useForm();
    const onSubmit = (values) => {
        dispatch(createAction(entity, values));
    };
    useEffect(() => {
        if (isSuccess) form.resetFields();
    }, [isSuccess]);

    return (
        <Loading isLoading={isLoading}>
            <Form form={form} layout="vertical" onFinish={onSubmit}>
                {formElements}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Loading>
    );
}