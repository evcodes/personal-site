import { Form, Input } from "antd";

export default function FormInput(props) {
  return (
    <Form.Item name={props.name} label={props.label} rules={props.rules}>
      <Input onChange={props.onChange} value={props.value} />
    </Form.Item>
  );
}
