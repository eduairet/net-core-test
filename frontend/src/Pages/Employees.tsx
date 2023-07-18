import { useState, useEffect, useContext, ChangeEventHandler } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees } from '../Store/employee-actions';
import { ModalContext } from '../Store/modal-context';
import { Employee } from '../Utils/types';
import { FORM } from '../Utils/enums';
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
        error = useSelector((state: any) => state.employee.error),
        [ascending, setAscending] = useState<boolean>(true),
        [employeeList, setEmployeeList] = useState<Employee[]>([]),
        handleSort = () => {
            const sortedEmployees = [...employeeList];
            sortedEmployees.sort((a: Employee, b: Employee) => {
                const nameA: string = a.employeeName.toLowerCase(),
                    nameB: string = b.employeeName.toLowerCase();
                if (nameA < nameB) return ascending ? -1 : 1;
                if (nameA > nameB) return ascending ? 1 : -1;
                return 0;
            });
            setEmployeeList(sortedEmployees);
            setAscending(!ascending);
        }, 
        handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
            const filteredEmployees = [...employees].filter((employee: Employee) => {
                const name: string = employee.employeeName.toLowerCase();
                return name.includes(e.target.value.toLowerCase());
            });
            setEmployeeList(filteredEmployees);
        };

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);

    useEffect(() => {
        employees && setEmployeeList(employees);
    }, [employees]);

    return (
        <>
            <Header title="Employees" />
            <BodyContainer>
                <div className='flex justify-between items-center mb-8 gap-8'>
                    <div className='flex items-center justify-between gap-2'>
                        <input onChange={handleSearch} className='text-appgray border-blue-500 font-[500] border-2 rounded-md py-1 px-4 w-full h-11' type="search" placeholder='Search' />
                    </div>
                    <Button onClick={handleSort}>Sort</Button>
                </div>
                <div className='mb-8'>
                    {isLoading
                        ? <Spinner />
                        : employees && employees.length > 0 && !isLoading
                            ? <EmployeeGrid employees={employeeList} />
                            : <p>{error || 'No employees found'}</p>}
                </div>
                <Button onClick={() => showModal('Add Employee', <EmployeeForm type={FORM.CREATE} action='Add' />)}>Add</Button>
            </BodyContainer>
        </>
    );
}
