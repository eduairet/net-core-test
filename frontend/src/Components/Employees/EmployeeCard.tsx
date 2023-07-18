import { useState, useEffect, useContext, useCallback } from "react";
import { ModalContext } from '../../Store/modal-context';
import { getProfilePic } from "../../Services/employee-services";
import { FORM } from "../../Utils/enums";
import EmployeeForm from "./EmployeeForm";
import IconButton from "../UI/IconButton";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

interface EmployeeCardProps {
    id: number;
    name: string;
    department: string;
    dateOfJoining: Date;
    photoFileName: string;
}

export default function EmployeeCard({ id, name, department, dateOfJoining, photoFileName }: EmployeeCardProps): JSX.Element {
    const { showModal } = useContext(ModalContext),
        [profilePic, setProfilePic] = useState<string>(''),
        fetchProfilePic = useCallback(async () => {
            const pic: string = await getProfilePic(photoFileName);
            setProfilePic(pic);
        }, [photoFileName]);

    useEffect(() => {
        fetchProfilePic();
    }, [fetchProfilePic]);

    return (
        <div className="m-w-[300px] rounded overflow-hidden shadow-lg bg-blue-600 text-white flex sm:flex-col items-center justify-center animate-fade-up">
            <div className="w-64 h-64 bg-blue-400 overflow-hidden shadow-lg sm:mb-2">
                <img className="object-cover object-center w-full h-full" src={profilePic} cross-origin="use-credentials" alt={name} />
            </div>
            <div className="w-full pb-8 flex flex-col items-center justify-center">
                <div className="px-6 py-4 bg-aapgray">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-blue-100 text-base">{new Date(dateOfJoining).toDateString()}</p>
                </div>
                <div className="px-6 pt-2 pb-2 mb-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{department || 'Unknown'}</span>
                </div>
                <div className="mx-6 mt-2 flex items-center justify-center gap-3">
                    <IconButton onClick={() => showModal('Edit Employee', <EmployeeForm type={FORM.EDIT} action='Edit' id={id} profilePic={profilePic} />)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => showModal('Delete Employee', <EmployeeForm type={FORM.DELETE} action='Delete' id={id} />)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
