import { useContext } from "react";
import { ModalContext } from '../../Store/modal-context';
import { FORM } from '../../Utils/enums';
import IconButton from "../UI/IconButton";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import DepartmentForm from "./DepartmentForm";

interface DepartmentRowProps {
    name: string;
}

export default function DepartmentRow({ name }: DepartmentRowProps) {
    const { showModal } = useContext(ModalContext);

    return (
        <tr className="border-b bg-blue-600 border-white">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</td>
            <td className="px-6 py-4 flex items-center space-x-4">
                <IconButton onClick={() => showModal('Edit Department', <DepartmentForm type={FORM.EDIT} action="Edit" />)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => showModal('Delete Department', <DepartmentForm type={FORM.DELETE} action="Delete" />)}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    );
}