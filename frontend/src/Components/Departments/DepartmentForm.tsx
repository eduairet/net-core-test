import { FormEventHandler, useState } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getDepartments } from '../../Store/department-actions';
import { FORM } from '../../Utils/enums';
import { addDepartment, updateDepartment, deleteDepartment } from '../../Services/department-services';
import useInput from '../../Hooks/use-input';
import Form from "../UI/Form";
import TextInput from '../UI/TextInput';
import CancelActionButtons from '../UI/CancelActionButtons';
import Spinner from '../UI/Spinner';

interface DepartmentFormProps {
    type: FORM;
    action: string;
    id?: number;
}

export default function DepartmentForm({ type, action, id }: DepartmentFormProps) {
    const dispatch: Dispatch<any> = useDispatch<any>(),
        depNameInput = useInput(),
        [loading, setLoading] = useState<boolean>(false),
        [requestSuccess, setRequestSuccess] = useState<string | null>(null),
        [requestError, setRequestError] = useState<string | null>(null),
        handleSubmit: FormEventHandler = async (e) => {
            e.preventDefault();
            setLoading(true);
            const noIdError = () => { throw new Error('No department ID found') };
            try {
                setRequestError(null);
                switch (type) {
                    case FORM.CREATE:
                        await addDepartment({ departmentName: depNameInput.value });
                        break;
                    case FORM.EDIT:
                        id !== undefined
                            ? await updateDepartment({ departmentID: id, departmentName: depNameInput.value })
                            : noIdError();
                        break;
                    case FORM.DELETE:
                        id !== undefined
                            ? await deleteDepartment({ departmentID: id })
                            : noIdError();
                        break;
                    default:
                        break;
                }
                setRequestSuccess('Your request was successful!');
                dispatch(getDepartments());
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
                (type === FORM.CREATE || type === FORM.EDIT)
                    ? <TextInput id="department-name" label="Department Name" {...depNameInput} />
                    : (<p>Are you sure you want to delete this department?</p>)
            }
            {
                loading ? <div className='pt-4'><Spinner /></div> :
                    <CancelActionButtons action={action} isSubmit={true} />
            }
        </Form>
    )
}