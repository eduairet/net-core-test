import pic from "../../Assets/anonymous.png";

interface EmployeeCardProps {
    name: string;
    department: string;
    dateOfJoining: Date;
    photoFileName: string;
}

export default function EmployeeCard({ name, department, dateOfJoining, photoFileName }: EmployeeCardProps): JSX.Element {
    console.log(photoFileName);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-600 text-white">
            <img className="w-full" src={pic} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-blue-100 text-base">{new Date(dateOfJoining).toDateString()}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{department}</span>
            </div>
        </div>
    );
}
