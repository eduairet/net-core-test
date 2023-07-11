import { useEffect } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import Header from "../Components/UI/Header";
import EmployeeCard from '../Components/Employees/EmployeeCard';
import Spinner from '../Components/UI/Spinner';
import BodyContainer from '../Components/Layout/BodyContainer';
import { Employee } from '../Utils/types';
import { getEmployees } from '../Store/employee-actions';

export default function Employees(): JSX.Element {
    const dispatch: Dispatch<any> = useDispatch<any>(),
        employees = useSelector((state: any) => state.employee.employees),
        isLoading = useSelector((state: any) => state.employee.isLoading),
        error = useSelector((state: any) => state.employee.error);

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch])

    return (
        <>
            <Header title="Employees" />
            <BodyContainer >
                {isLoading
                    ? <Spinner />
                    : employees && employees.length > 0 && !isLoading
                        ? employees.map((employee: Employee) => {
                            const { employeeID, employeeName, department, dateOfJoining, photoFileName } = employee;
                            return <EmployeeCard
                                key={`employee-card-${employeeID}`}
                                name={employeeName}
                                department={department}
                                dateOfJoining={dateOfJoining}
                                photoFileName={photoFileName}
                            />
                        })
                        : <p>{error || 'No employees found'}</p>}
            </BodyContainer>
        </>
    );
}
