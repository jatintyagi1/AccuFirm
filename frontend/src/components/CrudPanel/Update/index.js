import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../../../redux/crud/action";
import { selectUpdatedItem } from "../../../redux/crud/selector";

import { Button, Form } from "antd";
import Loading from "../../Loading";

export default function Update({ entity, formElements }) {
    const dispatch = useDispatch();
    const { result, isLoading, isSuccess } = useSelector(selectUpdatedItem);
    const [form] = Form.useForm();
    const onSubmit = (values) => {
        const id = result.current._id;
        dispatch(updateAction(entity, id, values));
    };
    useEffect(() => {
        if (isSuccess) form.resetFields();
    }, [isSuccess, result]);

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