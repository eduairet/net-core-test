import { Dispatch } from '@reduxjs/toolkit';
import { Employee } from '../Utils/types';
import { employeeActions } from './employee-slice';
import { getEmployees as fetchEmployees } from '../Services/employee-services'
const { setEmployees, setLoading, setError } = employeeActions;

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