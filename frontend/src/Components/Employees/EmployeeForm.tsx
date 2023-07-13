import { FormEventHandler } from 'react';
import Form from "../UI/Form";
import TextInput from '../UI/TextInput';
import CancelActionButtons from '../UI/CancelActionButtons';

export default function EmployeeForm() {
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log('submit');
        return;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextInput id="department-name" label="Department Name" />
            <CancelActionButtons action='Add' />
        </Form>
    )
}