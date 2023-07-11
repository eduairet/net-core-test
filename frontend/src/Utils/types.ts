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

export type EmployeeState = {
    employees: Employee[];
    isLoading: boolean;
    error: string | undefined | null;
}

export type Department = {
    departmentID: number;
    departmentName: string;
}

export type DepartmentState = {
    departments: Department[];
    isLoading: boolean;
    error: string | undefined | null;
}

