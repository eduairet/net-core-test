import { FormEventHandler } from 'react';
import { FORM } from '../../Utils/enums';
import { addEmployee, updateEmployee, deleteEmployee } from '../../Services/employee-services'
import useInput from '../../Hooks/use-input';
import Form from "../UI/Form";
import TextInput from '../UI/TextInput';
import CancelActionButtons from '../UI/CancelActionButtons';
import PhotoInput from '../UI/PhotoInput';

interface EmployeeFormProps {
    type: FORM;
    action: string;
}

export default function EmployeeForm({ type, action }: EmployeeFormProps) {
    const empNameInput = useInput(),
        empDepInput = useInput(),
        empIdInput = useInput(),
        handleSubmit: FormEventHandler = async (e) => {
            e.preventDefault();
            const employeeName = empNameInput.value,
                department = empDepInput.value,
                employeeID = +empIdInput.value;
            switch (type) {
                case FORM.CREATE:
                    await addEmployee({ employeeName, department, photoFileName: '' });
                    break;
                case FORM.EDIT:
                    await updateEmployee({ employeeID, employeeName, department, photoFileName: '' });
                    break;
                case FORM.DELETE:
                    await deleteEmployee({ employeeID });
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
                    ? (
                        <div className='flex flex-col gap-2'>
                            <TextInput id="employee-name" label="Employee Name" {...empNameInput} />
                            <TextInput id="employee-department" label="Department" {...empDepInput} />
                            <PhotoInput />
                        </div>
                    )
                    : <TextInput id="employee-id" label="Employee ID" {...empIdInput} />

            }
            <CancelActionButtons action={action} />
        </Form>
    )
}