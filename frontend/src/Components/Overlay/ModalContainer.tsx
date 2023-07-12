import { ReactNode, useContext } from "react";
import IconButton from "../UI/IconButton";
import CloseIcon from "../Icons/CrossIcon";
import { ModalContext } from "../../Store/modal-context";

interface ModalContainerProps {
    children: ReactNode
}

export default function ModalContainer({ children }: ModalContainerProps) {
    const { hidden, hideModal } = useContext(ModalContext);

    return (
        <div
            className={`${hidden ? 'hidden opacity-0 ': 'opacity-100 '}rounded bg-appgray fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-[auto] w-[100vw] max-w-[500px] overflow-y-auto overflow-x-hidden outline-none drop-shadow-xl transition-opacity`}
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
                className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                    type="button"
                    className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                    data-te-modal-dismiss
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Close
                </button>
                <button
                    type="button"
                    className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Save changes
                </button>
            </div>
        </div>
    )
}