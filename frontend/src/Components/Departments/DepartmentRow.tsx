import IconButton from "../UI/IconButton";
import DeleteIcon from "../Icons/DeleteIcon";
import EditIcon from "../Icons/EditIcon";

interface DepartmentRowProps {
    name: string;
}

export default function DepartmentRow({ name }: DepartmentRowProps) {
    const handleRemove = () => {
        console.log("Remove");
    }, handleEdit = () => {
        console.log("Edit");
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