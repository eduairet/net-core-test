import { useContext } from 'react';
import { ModalContext } from '../../Store/modal-context';

export default function Backdrop() {
    const { hidden, hideModal } = useContext(ModalContext);
    return <div
        role="presentation"
        aria-hidden="true"
        tabIndex={-1}
        id='employee-app-backdrop'
        onClick={() => hideModal()}
        className={`${hidden ? 'hidden ' : ''}fixed w-[100vw] h-[100vh] inset-0 bg-blue-600 opacity-75`}
    ></div>
}