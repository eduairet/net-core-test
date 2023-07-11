import { Slice, SliceCaseReducers, createSlice } from '@reduxjs/toolkit';
import { DepartmentState } from '../Utils/types';

const defaultDepartmentState: DepartmentState = {
    departments: [],
    isLoading: false,
    error: null
};

export const departmentSlice: Slice<DepartmentState, SliceCaseReducers<DepartmentState>, string> = createSlice({
    name: 'department',
    initialState: defaultDepartmentState,
    reducers: {
        getDepartments: (state, action): void => void(state.departments = action.payload)
    }
});

export const departmentActions = departmentSlice.actions;
export default departmentSlice.reducer;