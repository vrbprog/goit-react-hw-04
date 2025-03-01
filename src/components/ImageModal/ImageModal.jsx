import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({isOpen, closeModal, image, description}) {
    
    const customStyles = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                zIndex: '999',
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={() => document.body.style.overflow = 'hidden'}
            onAfterClose={() => document.body.style.overflow = 'visible'}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
          >
            <img className={css.imageModal} src={image} alt="modal" />
            <p className={css.description}>{description}</p>
        </Modal>
    );
};
