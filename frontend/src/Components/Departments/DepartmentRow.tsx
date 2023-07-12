import { useContext } from "react";
import IconButton from "../UI/IconButton";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";
import { ModalContext } from '../../Store/modal-context';

interface DepartmentRowProps {
    name: string;
}

export default function DepartmentRow({ name }: DepartmentRowProps) {
    const { showModal } = useContext(ModalContext),
        handleRemove = () => {
            showModal(<p>Edit</p>);
        }, handleEdit = () => {
            showModal(<p>Edit</p>);
        }

    return (
        <tr className="border-b bg-blue-600 border-white">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</td>
            <td className="px-6 py-4 flex items-center space-x-4">
                <IconButton onClick={handleEdit}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={handleRemove}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    )
}