import { FormEventHandler } from 'react';
import { FORM } from '../../Utils/enums';
import Form from "../UI/Form";
import TextInput from '../UI/TextInput';
import CancelActionButtons from '../UI/CancelActionButtons';

interface DepartmentFormProps {
    type: FORM;
    action: string;
}

export default function DepartmentForm({ type, action }: DepartmentFormProps) {
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log('submit');
        return;
    }

    return (
        <Form onSubmit={handleSubmit}>
            {
                type === FORM.CREATE || type === FORM.EDIT
                    ? <TextInput id="department-name" label="Department Name" />
                    : <TextInput id="department-id" label="Department ID" />
            }
            <CancelActionButtons action={action} />
        </Form>
    )
}