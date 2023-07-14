import { useEffect, useContext } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getDepartments } from '../Store/department-actions';
import { ModalContext } from '../Store/modal-context';
import { FORM } from '../Utils/enums';
import BodyContainer from '../Components/Layout/BodyContainer';
import DepartmentsTable from '../Components/Departments/DepartmentsTable';
import Header from "../Components/UI/Header";
import Spinner from '../Components/UI/Spinner';
import Button from '../Components/UI/Button';
import DepartmentForm from '../Components/Departments/DepartmentForm';

export default function Departments(): JSX.Element {
    const { showModal } = useContext(ModalContext),
        dispatch: Dispatch<any> = useDispatch<any>(),
        departments = useSelector((state: any) => state.department.departments),
        isLoading = useSelector((state: any) => state.department.isLoading),
        error = useSelector((state: any) => state.department.error);

    useEffect(() => {
        dispatch(getDepartments());
    }, [dispatch])

    return (
        <>
            <Header title="Departments" />
            <BodyContainer>
                <div className='mb-8'>
                    {isLoading
                        ? <Spinner />
                        : departments && departments.length > 0 && !isLoading
                            ? <DepartmentsTable departments={departments} />
                            : <p>{error || 'No departments found'}</p>}
                </div>
                <Button onClick={() => showModal('Add Department', <DepartmentForm type={FORM.CREATE} action='Add' />)}>Add</Button>
            </BodyContainer>
        </>
    );
}
