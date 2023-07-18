import { FormEventHandler, useState } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getEmployees } from '../../Store/employee-actions';
import { addEmployee, updateEmployee, deleteEmployee } from '../../Services/employee-services'
import { FORM } from '../../Utils/enums';
import { formValidation } from '../../Utils/validation';
import apiEndpoints from '../../Utils/api-endpoints';
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
    profilePic?: string;
}

// TODO: add validation for inputs, Selection for department, filtering and sorting

export default function EmployeeForm({ type, action, id, profilePic }: EmployeeFormProps) {
    const dispatch: Dispatch<any> = useDispatch<any>(),
        empNameInput = useInput('', formValidation.employee),
        empDepInput = useInput('', formValidation.department),
        [photoFileName, setPhotoFileName] = useState<string>(profilePic || 'anonymous.png'),
        [loading, setLoading] = useState<boolean>(false),
        [requestSuccess, setRequestSuccess] = useState<string | null>(null),
        [requestError, setRequestError] = useState<string | null>(null),
        formIsValid: () => boolean = () => type === FORM.DELETE || (empNameInput.value.length > 0 && empDepInput.value.length > 0 && empNameInput.isValid && empDepInput.isValid),
        handleSubmit: FormEventHandler = async (e) => {
            e.preventDefault();
            setLoading(true);
            setRequestSuccess(null);
            setRequestError(null);
            const employeeName = empNameInput.value,
                department = empDepInput.value,
                employeeID = id,
                noIdError = () => { throw new Error('No employee ID found') };
            try {
                if (formIsValid()) {
                    switch (type) {
                        case FORM.CREATE:
                            await addEmployee({ employeeName, department, photoFileName });
                            break;
                        case FORM.EDIT:
                            employeeID !== undefined
                                ? await updateEmployee({ employeeID, employeeName, department, photoFileName })
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
                }
            } catch (error) {
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
                        <>
                            <img
                                className='w-28 h-28 mb-8 mx-auto rounded-full bg-blue-500'
                                src={profilePic === photoFileName ? profilePic : apiEndpoints.photos(photoFileName)}
                                alt='Employee Avatar'
                            />
                            <div className='flex flex-col gap-2'>
                                <TextInput id="employee-name" label="Employee Name" {...empNameInput} />
                                <TextInput id="employee-department" label="Department" {...empDepInput} />
                                <PhotoInput setPhotoFileName={setPhotoFileName} />
                            </div>
                        </>
                    )
                    : <p>Are you sure you want to delete this department?</p>

            }
            {
                loading ? <div className='pt-4'><Spinner /></div> :
                    <CancelActionButtons action={action} isSubmit={true} disabled={!formIsValid()} />
            }
        </Form>
    )
}