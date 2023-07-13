import { Department, AddDepartmentRequest, DeleteDepartmentRequest } from "../Utils/types";
import apiEndpoints from '../Utils/api-endpoints';

export const getDepartments: () => Promise<Department[]> = async () => {
    const response: Response = await fetch(apiEndpoints.department);
    if (!response.ok) {
        throw new Error('There was an error fetching departments!');
    }
    const employees: Department[] = await response.json();
    return employees;
};

export const addDepartment: (req: AddDepartmentRequest) => Promise<{}> = async (req) => {
    const response: Response = await fetch(apiEndpoints.department, {
        method: 'POST',
        body: JSON.stringify(req),
    });
    if (!response.ok) {
        throw new Error('There was an error adding the department!');
    }
    const message: {} = await response.json();
    return message;
};

export const updateDepartment: (req: AddDepartmentRequest) => Promise<{}> = async (req) => {
    const response: Response = await fetch(apiEndpoints.department, {
        method: 'PUT',
        body: JSON.stringify(req),
    });
    if (!response.ok) {
        throw new Error('There was an error updating the department!');
    }
    const message: {} = await response.json();
    return message;
};

export const deleteDepartment: (req: DeleteDepartmentRequest) => Promise<{}> = async (req) => {
    const response: Response = await fetch(apiEndpoints.department, {
        method: 'DELETE',
        body: JSON.stringify(req),
    });
    if (!response.ok) {
        throw new Error('There was an error deleting the department!');
    }
    const message: {} = await response.json();
    return message;
};