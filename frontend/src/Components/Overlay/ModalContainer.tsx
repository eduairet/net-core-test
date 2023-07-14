import { ReactNode, useContext } from "react";
import { ModalContext } from "../../Store/modal-context";
import IconButton from "../UI/IconButton";
import CloseIcon from "../Icons/CrossIcon";

interface ModalContainerProps {
    title: string;
    children: ReactNode;
}

export default function ModalContainer({ title, children }: ModalContainerProps) {
    const { hidden, hideModal } = useContext(ModalContext);

    return (
        <div
            className={`${hidden ? 'hidden ' : ''}rounded p-6 bg-appgray fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-[auto] w-[100vw] max-w-[500px] overflow-y-auto overflow-x-hidden drop-shadow-xl animate-fade`}
            id="employee-app-modal"
            tabIndex={-1}
            aria-labelledby="Employee App Modal"
            aria-hidden="true"
        >
            <div
                className="flex flex-shrink-0 items-center justify-end rounded-t-md dark:border-opacity-50">
                <IconButton onClick={() => hideModal()}>
                    <CloseIcon />
                </IconButton>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
            <div className="relative flex-auto p-4" data-te-modal-body-ref>
                {children}
            </div>
        </div>
    )
}