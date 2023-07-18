import { useContext } from "react";
import { ModalContext } from "../../Store/modal-context";
import Button from "./Button";

interface CancelActionButtonsProps {
    action: string;
    isSubmit?: boolean,
    disabled?: boolean,
    handleAction?: () => void
}

export default function CancelActionButtons({ action, isSubmit, disabled, handleAction }: CancelActionButtonsProps) {
    const { hideModal } = useContext(ModalContext);

    return (
        <div
            className="flex flex-shrink-0 flex-wrap gap-[1rem] items-center justify-end rounded-b-md pt-8">
            <Button btnStyle="outline" className="bg-appgray" onClick={() => hideModal()}>
                Cancel
            </Button>
            <Button type={isSubmit ? 'submit' : 'button'} onClick={handleAction ? handleAction : () => null} disabled={disabled || false}>
                {action}
            </Button>
        </div>
    );
}