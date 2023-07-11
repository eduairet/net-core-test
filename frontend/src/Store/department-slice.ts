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
        setLoading(state, action) {
            state.isLoading = action.payload;
            state.error = null;
        },
        setDepartments(state, action) {
            state.departments = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setError(state, action) {
            state.departments = [];
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export const departmentActions = departmentSlice.actions;
export default departmentSlice.reducer;