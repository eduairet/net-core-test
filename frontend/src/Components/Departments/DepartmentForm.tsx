import { FormEventHandler } from 'react';
import { FORM } from '../../Utils/enums';
import { addDepartment, updateDepartment, deleteDepartment } from '../../Services/department-services';
import useInput from '../../Hooks/use-input';
import Form from "../UI/Form";
import TextInput from '../UI/TextInput';
import CancelActionButtons from '../UI/CancelActionButtons';

interface DepartmentFormProps {
    type: FORM;
    action: string;
}

export default function DepartmentForm({ type, action }: DepartmentFormProps) {
    const depNameInput = useInput(),
        depIdInput = useInput(),
        handleSubmit: FormEventHandler = async (e) => {
            e.preventDefault();
            switch (type) {
                case FORM.CREATE:
                    await addDepartment({ departmentName: depNameInput.value });
                    break;
                case FORM.EDIT:
                    await updateDepartment({ departmentName: depNameInput.value });
                    break;
                case FORM.DELETE:
                    await deleteDepartment({ departmentID: +depIdInput.value });
                    break;
                default:
                    break;
            }
            return;
        }

    return (
        <Form onSubmit={handleSubmit}>
            {
                type === FORM.CREATE || type === FORM.EDIT
                    ? <TextInput id="department-name" label="Department Name" {...depNameInput} />
                    : <TextInput id="department-id" label="Department ID" {...depIdInput} />
            }
            <CancelActionButtons action={action} isSubmit={true} />
        </Form>
    )
}