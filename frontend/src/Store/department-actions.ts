import { Dispatch } from '@reduxjs/toolkit';
import { Department } from '../Utils/types';
import apiEndpoints from '../Utils/api-endpoints';
import { departmentActions } from './department-slice';

const { setDepartments, setLoading, setError } = departmentActions;

const fetchDepartments = async () => {
    const response: Response = await fetch(apiEndpoints.department);
    if (!response.ok) {
        throw new Error('There was an error fetching departments!');
    }
    const departments: Department[] = await response.json();
    return departments;
};

export const getDepartments = () => {
    return async (dispatch: Dispatch<any>) => {
        dispatch(setLoading(true));
        try {
            const departments: Department[] = await fetchDepartments();
            dispatch(setDepartments(departments));
        } catch (err: any) {
            dispatch(setError(err.message));
        }
        dispatch(setLoading(false));
    }
}