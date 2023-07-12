import { useContext } from "react";
import IconButton from "../UI/IconButton";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import pic from "../../Assets/anonymous.png";
import { ModalContext } from '../../Store/modal-context';

interface EmployeeCardProps {
    name: string;
    department: string;
    dateOfJoining: Date;
    photoFileName: string;
}

export default function EmployeeCard({ name, department, dateOfJoining, photoFileName }: EmployeeCardProps): JSX.Element {
    const { showModal } = useContext(ModalContext);

    return (
        <div className="m-w-[300px] rounded overflow-hidden shadow-lg bg-blue-600 text-white">
            <div className="w-full h-64 bg-blue-600 rounded-t overflow-hidden shadow-lg mb-2">
                <img className="object-cover object-center w-full h-full" src={pic || photoFileName} alt={name} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-blue-100 text-base">{new Date(dateOfJoining).toDateString()}</p>
            </div>
            <div className="px-6 pt-2 pb-2 mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{department}</span>
            </div>
            <div className="mx-6 mt-2 mb-8 flex items-center justify-center gap-3">
                <IconButton onClick={() => showModal(<p>Edit</p>)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => showModal(<p>Delete</p>)}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    );
}
