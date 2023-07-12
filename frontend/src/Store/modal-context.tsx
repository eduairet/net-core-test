import { ReactNode, FC, createContext, useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContainer from '../Components/Overlay/ModalContainer';
import Backdrop from '../Components/Overlay/Backdrop';

interface ModalContextProps {
    hidden: boolean;
    showModal: (component: ReactNode) => void;
    hideModal: () => void;
}
interface ModalProps {
    children: ReactNode;
}
interface ModalProviderProps {
    children: ReactNode;
}

const ModalContext = createContext<ModalContextProps>({ hidden: true, showModal() { }, hideModal() { } }),
    Modal: FC<ModalProps> = ({ children }) => {
        const overlay = document.getElementById('overlay');
        if (!overlay) return null;
        return createPortal(
            <><Backdrop /><ModalContainer>{children}</ModalContainer></>,
            overlay
        );
    },
    ModalProvider: FC<ModalProviderProps> = ({ children }) => {
        const [modalContent, setModalContent] = useState<ReactNode | null>(null),
            [hidden, setHidden] = useState(true);

        const showModal = (component: ReactNode) => {
            setHidden(false);
            setModalContent(component);
        }, hideModal = () => {
            setHidden(true)
            setModalContent(null);
        };

        return (
            <ModalContext.Provider value={{ hidden, showModal, hideModal }}>
                {children}
                {
                    modalContent ?
                        <Modal>
                            {modalContent}
                        </Modal> : null
                }
            </ModalContext.Provider>
        );
    };

export { ModalProvider, ModalContext }