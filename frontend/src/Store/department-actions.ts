import { Dispatch } from '@reduxjs/toolkit';
import { Department } from '../Utils/types';
import { getDepartments as fetchDepartments } from '../Services/department-services';
import { departmentActions } from './department-slice';
const { setDepartments, setLoading, setError } = departmentActions;

export const getDepartments: () => any = () => {
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