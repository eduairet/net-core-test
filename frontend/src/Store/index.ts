import { AnyAction, ThunkMiddleware, configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import employeeSlice from "./employee-slice";
import departmentSlice from "./department-slice";

const store: ToolkitStore<any, AnyAction, [ThunkMiddleware<any, AnyAction>]> = configureStore({
    reducer: {
        employee: employeeSlice,
        department: departmentSlice,
    },
});

export default store;