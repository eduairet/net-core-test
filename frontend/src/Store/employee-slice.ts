import { Slice, SliceCaseReducers, createSlice } from '@reduxjs/toolkit';
import { EmployeeState } from '../Utils/types';

const defaultEmployeeState: EmployeeState = {
    employees: [],
    isLoading: false,
    error: null
};

export const employeeSlice: Slice<EmployeeState, SliceCaseReducers<EmployeeState>, string> = createSlice({
    name: 'employee',
    initialState: defaultEmployeeState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
            state.error = null;
        },
        setEmployees(state, action) {
            state.employees = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setError(state, action) {
            state.employees = [];
            state.error = action.payload;
            state.isLoading = false;
        }
    },
});

export const employeeActions = employeeSlice.actions;
export default employeeSlice.reducer;