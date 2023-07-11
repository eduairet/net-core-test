import { Department } from "../../Utils/types";
import DepartmentRow from "./DepartmentRow";

interface DepartmentTableProps {
    departments: Department[];
}

export default function DepartmentsTable({ departments }: DepartmentTableProps) {
    return (
        <table className="table-auto text-left">
            <thead className="text-xs text-blue-600 uppercase bg-white">
                <tr className="px-6 py-3">
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                {departments.map((department: Department) =>
                    <DepartmentRow key={department.departmentID} name={department.departmentName} />
                )}
            </tbody>
        </table>
    );
}
