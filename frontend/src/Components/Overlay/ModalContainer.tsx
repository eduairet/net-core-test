import { ReactNode, useContext } from "react";
import { ModalContext } from "../../Store/modal-context";
import Button from "../UI/Button";
import IconButton from "../UI/IconButton";
import CloseIcon from "../Icons/CrossIcon";

interface ModalContainerProps {
    children: ReactNode
}

export default function ModalContainer({ children }: ModalContainerProps) {
    const { hidden, hideModal } = useContext(ModalContext);

    return (
        <div
            className={`${hidden ? 'hidden ' : ''}rounded bg-appgray fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-[auto] w-[100vw] max-w-[500px] overflow-y-auto overflow-x-hidden drop-shadow-xl`}
            id="employee-app-modal"
            tabIndex={-1}
            aria-labelledby="Employee App Modal"
            aria-hidden="true"
        >
            <div
                className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <IconButton onClick={() => hideModal()}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className="relative flex-auto p-4" data-te-modal-body-ref>
                {children}
            </div>
            <div
                className="flex flex-shrink-0 flex-wrap gap-[1rem] items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <Button btnStyle="outline" className="bg-appgray" onClick={() => hideModal()}>
                    Cancel
                </Button>
                <Button onClick={() => console.log('save changes')}>
                    Save
                </Button>
            </div>
        </div>
    )
}