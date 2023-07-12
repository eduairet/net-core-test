import { useContext } from 'react';
import { ModalContext } from '../../Store/modal-context';

export default function Backdrop() {
    const { hideModal } = useContext(ModalContext);
    return <div
        onClick={() => hideModal()}
        className="fixed w-[100vw] h-[100vh] inset-0 bg-blue-600 bg-opacity-75 transition-opacity"
    ></div>
}