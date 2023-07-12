import EmployeeCard from "./EmployeeCard";
import { Employee } from "../../Utils/types"

interface EmployeesGridProps {
    employees: Employee[]
}

export default function EmployeesGrid({ employees }: EmployeesGridProps) {
    return (
        <div className="mb-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {employees.map((employee: Employee) => {
                const { employeeID, employeeName, department, dateOfJoining, photoFileName } = employee;
                return <EmployeeCard
                    key={`employee-card-${employeeID}`}
                    name={employeeName}
                    department={department}
                    dateOfJoining={dateOfJoining}
                    photoFileName={photoFileName}
                />
            })}
        </div>
    )
}