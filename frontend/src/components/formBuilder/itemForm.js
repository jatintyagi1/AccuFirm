import { Input, Form, Checkbox } from "antd";

// Mapping of our components
const componentMapping = {
    input: Input,
    password: Input.Password,
    checkbox: Checkbox,
};

function FormElement({ component, label, required, name, ...rest }) {
    // Dynamically select a component from the componentMapping object
    const Component = componentMapping[component];

    // Return an error or fallback component if the component type is invalid
    if (!Component) {
        console.error(`Component type "${component}" not found in componentMapping.`);
        return null;
    }

    return (
        <Form.Item
            label={label}
            name={name}
            rules={[{ required, message: `${label || 'Field'} is required!` }]}
        >
            {/* Pass any additional props using {...rest} */}
            <Component {...rest} />
        </Form.Item>
    );
}

export default FormElement;
