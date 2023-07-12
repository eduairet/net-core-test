import { useEffect, useContext } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees } from '../Store/employee-actions';
import { ModalContext } from '../Store/modal-context';
import BodyContainer from '../Components/Layout/BodyContainer';
import EmployeeGrid from '../Components/Employees/EmployeesGrid';
import Header from "../Components/UI/Header";
import Spinner from '../Components/UI/Spinner';
import Button from '../Components/UI/Button';
import EmployeeForm from '../Components/Employees/EmployeeForm';

export default function Employees(): JSX.Element {
    const { showModal } = useContext(ModalContext),
        dispatch: Dispatch<any> = useDispatch<any>(),
        employees = useSelector((state: any) => state.employee.employees),
        isLoading = useSelector((state: any) => state.employee.isLoading),
        error = useSelector((state: any) => state.employee.error);

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch])

    return (
        <>
            <Header title="Employees" />
            <BodyContainer>
                {isLoading
                    ? <Spinner />
                    : employees && employees.length > 0 && !isLoading
                        ? <EmployeeGrid employees={employees} />
                        : <p>{error || 'No employees found'}</p>}
                <Button onClick={() => showModal(<EmployeeForm />)}>Add</Button>
            </BodyContainer>
        </>
    );
}
