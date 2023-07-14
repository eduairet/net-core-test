import { FormEventHandler } from 'react';
import { FORM } from '../../Utils/enums';
import Form from "../UI/Form";
import TextInput from '../UI/TextInput';
import CancelActionButtons from '../UI/CancelActionButtons';
import PhotoInput from '../UI/PhotoInput';

interface EmployeeFormProps {
    type: FORM;
    action: string;
}

export default function EmployeeForm({ type, action }: EmployeeFormProps) {
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log('submit');
        return;
    }

    return (
        <Form onSubmit={handleSubmit}>
            {
                type === FORM.CREATE || type === FORM.EDIT
                    ? (
                        <div className='flex flex-col gap-2'>
                            <TextInput id="employee-name" label="Employee Name" />
                            <TextInput id="employee-department" label="Department" />
                            <PhotoInput />
                        </div>
                    )
                    : <TextInput id="employee-id" label="Employee ID" />

            }
            <CancelActionButtons action={action} />
        </Form>
    )
}