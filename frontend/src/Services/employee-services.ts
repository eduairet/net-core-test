import { Employee, AddEmployeeRequest, UpdateEmployeeRequest, DeleteEmployeeRequest } from "../Utils/types";
import apiEndpoints from '../Utils/api-endpoints';

export const getEmployees: () => Promise<Employee[]> = async () => {
    const response: Response = await fetch(apiEndpoints.employee);
    if (!response.ok) {
        throw new Error('There was an error fetching employees!');
    }
    const employees: Employee[] = await response.json();
    return employees;
};

export const addEmployee: (req: AddEmployeeRequest) => Promise<{}> = async (req) => {
    const response: Response = await fetch(apiEndpoints.employee, {
        method: 'POST',
        body: JSON.stringify(req),
    });
    if (!response.ok) {
        throw new Error('There was an error adding the employee!');
    }
    const message: {} = await response.json();
    return message;
};

export const updateEmployee: (req: UpdateEmployeeRequest) => Promise<{}> = async (req) => {
    const response: Response = await fetch(apiEndpoints.employee, {
        method: 'PUT',
        body: JSON.stringify(req),
    });
    if (!response.ok) {
        throw new Error('There was an error updating the employee!');
    }
    const message: {} = await response.json();
    return message;
};

export const deleteEmployee: (req: DeleteEmployeeRequest) => Promise<{}> = async (req) => {
    const response: Response = await fetch(apiEndpoints.employee, {
        method: 'DELETE',
        body: JSON.stringify(req),
    });
    if (!response.ok) {
        throw new Error('There was an error deleting the employee!');
    }
    const message: {} = await response.json();
    return message;
};