export type ApiEndpoints = {
    department: string,
    employee: string,
    photos: string
}

export interface UsersState {
    entities: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export type Employee = {
    employeeID: number;
    employeeName: string;
    department: string;
    dateOfJoining: Date;
    photoFileName: string;
}

export type AddEmployeeRequest = {
    employeeName: string;
    department: string;
    photoFileName: string;
}

export type UpdateEmployeeRequest = AddEmployeeRequest & {
    employeeID: number;
}

export type DeleteEmployeeRequest = {
    employeeID: number;
}

export type EmployeeState = {
    employees: Employee[];
    isLoading: boolean;
    error: string | undefined | null;
}

export type Department = {
    departmentID: number;
    departmentName: string;
}

export type AddDepartmentRequest = {
    departmentName: string;
}

export type UpdateDepartmentRequest = Department;

export type DeleteDepartmentRequest = {
    departmentID: number;
}

export type DepartmentState = {
    departments: Department[];
    isLoading: boolean;
    error: string | undefined | null;
}

