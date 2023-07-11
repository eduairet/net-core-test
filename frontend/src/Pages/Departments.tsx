import { useEffect } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Header from "../Components/UI/Header";
import Spinner from '../Components/UI/Spinner';
import BodyContainer from '../Components/Layout/BodyContainer';
import DepartmentsTable from '../Components/Departments/DepartmentsTable';
import { getDepartments } from '../Store/department-actions';

export default function Departments(): JSX.Element {
    const dispatch: Dispatch<any> = useDispatch<any>(),
        departments = useSelector((state: any) => state.department.departments),
        isLoading = useSelector((state: any) => state.department.isLoading),
        error = useSelector((state: any) => state.department.error);

    useEffect(() => {
        dispatch(getDepartments());
    }, [dispatch])

    return (
        <>
            <Header title="Departments" />
            <BodyContainer >
                {isLoading
                    ? <Spinner />
                    : departments && departments.length > 0 && !isLoading
                        ? <DepartmentsTable departments={departments} />
                        : <p>{error || 'No departments found'}</p>}
            </BodyContainer>
        </>
    );
}
