import { Dispatch } from '@reduxjs/toolkit';
import { Employee } from '../Utils/types';
import apiEndpoints from '../Utils/api-endpoints';
import { employeeActions } from './employee-slice';

const { setEmployees, setLoading, setError } = employeeActions;

const fetchEmployees: () => Promise<Employee[]> = async () => {
    const response: Response = await fetch(apiEndpoints.employee);
    if (!response.ok) {
        throw new Error('There was an error fetching employees!');
    }
    const employees: Employee[] = await response.json();
    return employees;
};

export const getEmployees: () => any = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(setLoading(true));
        try {
            const employees: Employee[] = await fetchEmployees();
            dispatch(setEmployees(employees));
        } catch (err: any) {
            dispatch(setError(err.message));
        }
        dispatch(setLoading(false));
    }
}