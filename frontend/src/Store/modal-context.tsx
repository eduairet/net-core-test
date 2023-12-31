import { ReactNode, FC, createContext, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContainer from '../Components/Overlay/ModalContainer';
import Backdrop from '../Components/Overlay/Backdrop';

interface ModalContextProps {
    hidden: boolean;
    showModal: (title: string, component: ReactNode) => void;
    hideModal: () => void;
}
interface ModalProps {
    title: string;
    children: ReactNode;
}
interface ModalProviderProps {
    children: ReactNode;
}

const ModalContext = createContext<ModalContextProps>({ hidden: true, showModal() { }, hideModal() { } }),
    Modal: FC<ModalProps> = ({ title, children }) => {
        const overlay = document.getElementById('overlay');
        if (!overlay) return null;
        return createPortal(
            <><Backdrop /><ModalContainer title={title}>{children}</ModalContainer></>,
            overlay
        );
    },
    ModalProvider: FC<ModalProviderProps> = ({ children }) => {
        const [modalContent, setModalContent] = useState<ReactNode | null>(null),
            [hidden, setHidden] = useState(true),
            [title, setTitle] = useState<string>('');

        const showModal = (modalTitle: string, component: ReactNode) => {
            setHidden(false);
            setTitle(modalTitle);
            document.body.style.overflow = 'hidden';
            setModalContent(component);
        }, hideModal = () => {
            setHidden(true);
            document.body.style.overflow = 'unset';
            setModalContent(null);
        };

        return (
            <ModalContext.Provider value={{ hidden, showModal, hideModal }}>
                {children}
                {
                    modalContent ?
                        <Modal title={title}>
                            {modalContent}
                        </Modal> : null
                }
            </ModalContext.Provider>
        );
    };

export { ModalProvider, ModalContext }