import { FormEventHandler, useState } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getEmployees } from '../../Store/employee-actions';
import { FORM } from '../../Utils/enums';
import { addEmployee, updateEmployee, deleteEmployee } from '../../Services/employee-services'
import useInput from '../../Hooks/use-input';
import Form from "../UI/Form";
import TextInput from '../UI/TextInput';
import CancelActionButtons from '../UI/CancelActionButtons';
import PhotoInput from '../UI/PhotoInput';
import Spinner from '../UI/Spinner';

interface EmployeeFormProps {
    type: FORM;
    action: string;
    id?: number;
}

export default function EmployeeForm({ type, action, id }: EmployeeFormProps) {
    const dispatch: Dispatch<any> = useDispatch<any>(),
        empNameInput = useInput(),
        empDepInput = useInput(),
        [loading, setLoading] = useState<boolean>(false),
        [requestSuccess, setRequestSuccess] = useState<string | null>(null),
        [requestError, setRequestError] = useState<string | null>(null),
        handleSubmit: FormEventHandler = async (e) => {
            e.preventDefault();
            setLoading(true);
            const employeeName = empNameInput.value,
                department = empDepInput.value,
                employeeID = id,
                noIdError = () => { throw new Error('No employee ID found') };
            try {
                switch (type) {
                    case FORM.CREATE:
                        await addEmployee({ employeeName, department, photoFileName: 'anonymous.png' });
                        break;
                    case FORM.EDIT:
                        employeeID !== undefined
                            ? await updateEmployee({ employeeID, employeeName, department, photoFileName: 'anonymous.png' })
                            : noIdError();
                        break;
                    case FORM.DELETE:
                        employeeID !== undefined
                            ? await deleteEmployee({ employeeID })
                            : noIdError();
                        break;
                    default:
                        break;
                }
                setRequestSuccess('Your request was successful!');
                dispatch(getEmployees());
            } catch (error) {
                setRequestSuccess(null);
                setRequestError('We could not process your request. Please reload the page and try again!');
            }
            setLoading(false);
            return;
        }

    if (requestSuccess) return <p className=" text-green-500">{requestSuccess}</p>;
    if (requestError) return <p className=" text-red-500">{requestError}</p>;

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
                    : <p>Are you sure you want to delete this department?</p>

            }
            {
                loading ? <div className='pt-4'><Spinner /></div> :
                    <CancelActionButtons action={action} isSubmit={true} />
            }
        </Form>
    )
}